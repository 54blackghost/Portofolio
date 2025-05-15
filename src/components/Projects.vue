

<template>
    <!-- Projects Section -->
    <section class="projects" id="projects">
        <h2 class="section-title">My Projects</h2>
        <div class="projects-grid" v-for="project in projects" :key="project.id">
            <!-- 1st card -->
            <div class="project-card">
                <img :src="project.image" :alt="project.title" height="200px" class="project-img">
                <div class="project-info">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-description">{{ project.description }}</p>
                    <div class="project-tech">
                      <span v-for="(tech, index) in project.technologies" :key="index" 
                      class="tech-tag">{{ tech }}</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-5">
      <p class="lead">Vous avez un projet en tête ?</p>
      <router-link to="/contact" class="btn btn-lg btn-primary">Discutons-en</router-link>
    </div>
    </section>

  <br>
</template>


<script setup >
// Projects.vue
const projects = [
  {
    id: 1,
    title: 'Site Vitrine  ',
    description: "Plateforme de Présentation des services électronique de l'entreprise GTS Alarm",
    image: '/gts.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
    VisiteLink: 'https://gts-alarm.vercel.app/'
  },
  {
    id: 2,
    title: 'Application de Gestion de Dons',
    description: 'Application permettant aux utilisateurs de créer des levés de fonds en ligne.',
    image: '/donation.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django'],
    VisiteLink: '#'
  },
  {
    id: 3,
    title: 'Site Vitrine pour Saveur Afrique',
    description: "Saveur d'Afrique est spécialisé dans la gastronomie et pomouvois les plats d'Afrique",
    image: '/saveur-afrique.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    VisiteLink: 'https://saveur-afrique.netlify.app'
  },
  {
    id: 4,
    title: 'Site Vitrine pour Saveur Afrique',
    description: "Saveur d'Afrique est spécialisé dans la gastronomie et pomouvois les plats d'Afrique",
    image: '/saveur-afrique.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    VisiteLink: 'https://saveur-afrique.netlify.app'
  },
  
];
</script>

<style scoped>

/* Projects Section */
.projects {
    padding: 5rem 5%;
    position: relative;
    margin-top: 10px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    background-color: var(--darker-bg);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;
    position: relative;
    border: 1px solid #333;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 136, 255, 0.2);
    border: 1px solid var(--neon-blue);
}

.project-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-info {
    padding: 1.5rem;
}

.project-title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--neon-blue);
}

.project-description {
    color: #ccc;
    margin-bottom: 1rem;
    line-height: 1.5;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tech-tag {
    background-color: rgba(0, 136, 255, 0.2);
    color: var(--neon-blue);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-link {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    transition: color 0.3s ease;
}

.project-link:hover {
    color: var(--neon-pink);
}
</style>