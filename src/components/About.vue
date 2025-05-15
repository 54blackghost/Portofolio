<script setup >
// Skills.vue
const frontendSkills = [
  { name: 'HTML5', icon: ['fab', 'html5'], color: '#E44D26', level: 95 },
  { name: 'CSS3', icon: ['fab', 'css3-alt'], color: '#264DE4', level: 90 },
  { name: 'JavaScript', icon: ['fab', 'js'], color: '#F7DF1E', level: 85 },
  { name: 'Bootstrap', icon: ['fab', 'bootstrap'], color: '#7952B3', level: 90 },
  { name: 'Vue.js', icon: ['fab', 'vuejs'], color: '#4FC08D', level: 80 }
];

const backendSkills = [
  { name: 'Laravel', icon: ['fab', 'laravel'], color: '#FF2D20', level: 85 },
  { name: 'Django', icon: ['fab', 'python'], color: '#092E20', level: 80 },
  { name: 'PHP', icon: 'code', color: '#777BB4', level: 85 },
  { name: 'Python', icon: ['fab', 'python'], color: '#3776AB', level: 80 },
  { name: 'SQL', icon: 'server', color: '#336791', level: 75 }
];

const otherSkills = [
  { name: 'Git', icon: ['fab', 'github'], color: '#F05032', level: 85 },
  { name: 'RESTful API', icon: 'code', color: '#0096D6', level: 80 },
  { name: 'Responsive Design', icon: 'code', color: '#FF6B6B', level: 90 },
  
];
</script>

<template>
  <section class="container section-padding">
    <div class="row">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <h2 class="section-title">À propos de moi</h2>
        <p class="lead">Développeur Web Full Stack passionné par la création d'applications web performantes et élégantes.</p>
        <p>
          Avec une solide expérience dans le développement front-end et back-end, je crée des solutions web complètes
          qui répondent aux besoins des utilisateurs tout en respectant les meilleures pratiques du secteur.
        </p>
        <p>
          Ma passion pour l'apprentissage continu me permet de rester à jour avec les dernières technologies
          et tendances du développement web, garantissant ainsi des solutions modernes et efficaces.
        </p>
        <div class="mt-4">
          <h4>Mes valeurs :</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-transparent">🚀 Innovation et créativité</li>
            <li class="list-group-item bg-transparent">🔍 Attention aux détails</li>
            <li class="list-group-item bg-transparent">🤝 Collaboration et communication</li>
            <li class="list-group-item bg-transparent">📈 Amélioration continue</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <h3 class="mb-4">Mes compétences</h3>
            
        <div class="row mt-5">
          <div class="col-12 text-center">
            <h3 class="mb-4">Technologies maîtrisées</h3>
            <div class="d-flex flex-wrap justify-content-center gap-4 mb-4">
              <div v-for="(skill, index) in [...frontendSkills, ...backendSkills]" :key="index" class="text-center">
                <font-awesome-icon :icon="skill.icon" :style="{ color: skill.color }" class="tech-icon" />
                <p>{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>