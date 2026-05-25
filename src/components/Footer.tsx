import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
