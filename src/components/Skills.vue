
<template>
  <section class="container section-padding">
   <div>
    <h2 class="section-title text-center mb-5">Mes compétences</h2>
   </div>
    
    <div class="row mb-5">
      <div class="col-md-6 mb-4 mb-md-0">
        <h3 class="mb-4">Front-end</h3>
        <div class="mb-4" v-for="skill in frontendSkills" :key="skill.name">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <div>
              <font-awesome-icon :icon="skill.icon" :style="{ color: skill.color }" class="me-2" />
              <span>{{ skill.name }}</span>
            </div>
            <span>{{ skill.level }}%</span>
          </div>
          <div class="progress" style="height: 10px;">
            <div class="progress-bar" :style="{ width: `${skill.level}%`, backgroundColor: skill.color }" role="progressbar" :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <h3 class="mb-4">Back-end</h3>
        <div class="mb-4" v-for="skill in backendSkills" :key="skill.name">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <div>
              <font-awesome-icon :icon="skill.icon" :style="{ color: skill.color }" class="me-2" />
              <span>{{ skill.name }}</span>
            </div>
            <span>{{ skill.level }}%</span>
          </div>
          <div class="progress" style="height: 10px;">
            <div class="progress-bar" :style="{ width: `${skill.level}%`, backgroundColor: skill.color }" role="progressbar" :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12">
        <h3 class="mb-4">Autres compétences</h3>
        <div class="row">
          <div class="col-md-6" v-for="(skill, index) in otherSkills" :key="index">
            <div class="mb-4">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <div>
                  <font-awesome-icon :icon="skill.icon" :style="{ color: skill.color }" class="me-2" />
                  <span>{{ skill.name }}</span>
                </div>
                <span>{{ skill.level }}%</span>
              </div>
              <div class="progress" style="height: 10px;">
                <div class="progress-bar" :style="{ width: `${skill.level}%`, backgroundColor: skill.color }" role="progressbar" :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
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
  </section>
</template>




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
