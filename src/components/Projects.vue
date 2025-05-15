

<template>
    <section class="projects" id="projects">
        <h2 class="section-title">Mes Projets</h2>
        <div class="projects-grid" >
            
            <div class="project-card" v-for="project in projects" :key="project.id">
                <img :src="project.image" :alt="project.title" height="200px" class="project-img">
                <div class="project-info">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-description">{{ project.description }}</p>
                    <div class="project-tech">
                         <span v-for="(tech, index) in project.technologies" :key="index" 
                      class="tech-tag">{{ tech }}</span>
                    </div>
                    <div class="project-links">
                        <a :href="project.VisiteLink" class="project-link" ><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
  
  
];
</script>

<style scoped>

</style>