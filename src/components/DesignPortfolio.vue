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
   {
    id: 4,
    title: "Formation en Produits d'/entretien menager",
    description: "Une affiche qui presente les differents modules d'une formation de produits de menage.",
    image: '/formation_lessivage.png',
    technologies: ['Adobe PhotoShop'],
   
  },
   {
    id: 5,
    title: "Flyer pour ETS ROYAL ALU",
    description: "Une affiche qui presente les differents services de la structure Royal Alu.",
    image: '/royal_alu2.png',
    technologies: ['Adobe Illustrator'],
   
  },
  {
    id: 6,
    title: "MockUp",
    description: "MockUp du Logo de la structure Royal Alu.",
    image: '/mockup_royal_alu.png',
    technologies: ['Adobe Illustrator'],
   
  },
  {
    id: 7,
    title: "Flyer",
    description: "Affiche pour un post de publiciter des Delices de Daina",
    image: '/Daina_poster.png',
    technologies: ['Adobe PhotoShop'],
   
  },
    {
    id: 8,
    title: "Couverture",
    description: "Presentation d'une couverture pour un livre ou bord d'etude ",
    image: '/Couverture1.png',
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