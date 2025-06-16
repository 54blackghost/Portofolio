<script setup >
// DesignPortfolio.vue
const designs = [
  {
    id: 1,
    title: 'Tabaski 2025',
    description: "A small visual for the ULB TV Enterprise to celebrate with Mulsuman community",
    image: '/Tabaski.png',
    technologies: ['Adobe PhotoShop'],
    
  },
  {
    id: 2,
    title: 'Conference Flyer',
    description: 'A simple design conference flyer designed.',
    image: '/Free_Poster_Mockup_4.gif',
    technologies: ['Adobe PhotoShop'],
  },
  {
    id: 3,
    title: 'Cooking Flyer',
    description: "A simple design cooking flyer designed.",
    image: '/Free_Poster_Mockup_5.gif',
    technologies: ['Adobe PhotoShop'],
   
  },
  
  
];
</script>



<template> 
  <section class="projects" id="projects">
        <h2 class="section-title">Design Projets</h2>
        <div class="projects-grid" >
            
            <div class="project-card" v-for="design in designs" :key="design.id">
                <img :src="design.image" :alt="design.title"  class="project-img">
                <div class="project-info">
                    <h3 class="project-title">{{ design.title }}</h3>
                    <p class="project-description">{{ design.description }}</p>
                    <div class="project-tech">
                         <span v-for="(tech, index) in design.technologies" :key="index" 
                      class="tech-tag">{{ tech }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>



</style>