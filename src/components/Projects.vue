

<template>
  <section class="container section-padding">
    <h2 class="section-title text-center mb-5">Mes projets</h2>
    
    <div class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
        <div class="card project-card h-90 border-0 shadow-sm">
          <img :src="project.image" class="card-img-top" :alt="project.title">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="mb-3">
              <span v-for="(tech, index) in project.technologies" :key="index" 
                    class="badge bg-primary me-1 mb-1">{{ tech }}</span>
            </div>
          </div>
          <div class="card-footer bg-white border-0">
            <div class="d-flex justify-content-between">
              <a :href="project.demoLink" class="btn btn-primary" target="_blank">Démo</a>
              <a :href="project.VisiteLink" class="btn btn-outline-secondary" target="_blank">Visite</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-5">
      <p class="lead">Vous avez un projet en tête ?</p>
      <router-link to="/contact" class="btn btn-lg btn-primary">Discutons-en</router-link>
    </div>
  </section>
</template>









<script setup >
// Projects.vue
const projects = [
  {
    id: 1,
    title: 'Site Vitrine  ',
    description: 'Plateforme de commerce électronique complète avec panier, paiement et gestion des commandes.',
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
    demoLink: '#',
    VisiteLink: '#'
  },
  
];
</script>