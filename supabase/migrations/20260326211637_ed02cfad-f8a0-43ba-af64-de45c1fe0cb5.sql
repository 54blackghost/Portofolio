
-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  technologies TEXT[] DEFAULT '{}',
  github_link TEXT,
  demo_link TEXT,
  image_url TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create skills table
CREATE TABLE public.skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  level INT NOT NULL DEFAULT 50 CHECK (level >= 0 AND level <= 100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Profiles policies
CREATE POLICY "Profiles viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- User roles policies
CREATE POLICY "User roles viewable by owner" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Projects policies (public read, admin write)
CREATE POLICY "Projects viewable by everyone" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Admins can insert projects" ON public.projects FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update projects" ON public.projects FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete projects" ON public.projects FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Skills policies (public read, admin write)
CREATE POLICY "Skills viewable by everyone" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Admins can insert skills" ON public.skills FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update skills" ON public.skills FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete skills" ON public.skills FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Testimonials policies (public read, admin write)
CREATE POLICY "Testimonials viewable by everyone" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Admins can insert testimonials" ON public.testimonials FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update testimonials" ON public.testimonials FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete testimonials" ON public.testimonials FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Contact messages policies (anyone can insert, admin can read/manage)
CREATE POLICY "Anyone can submit contact message" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view messages" ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update messages" ON public.contact_messages FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete messages" ON public.contact_messages FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Storage bucket for project images
INSERT INTO storage.buckets (id, name, public) VALUES ('portfolio-images', 'portfolio-images', true);

CREATE POLICY "Portfolio images publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'portfolio-images');
CREATE POLICY "Admins can upload portfolio images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'portfolio-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update portfolio images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'portfolio-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete portfolio images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'portfolio-images' AND public.has_role(auth.uid(), 'admin'));

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'display_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
