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
   <!-- About Section -->
    <section class="about" id="about">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
            <div class="about-text">
                <p>
                  Je suis un développeur full-stack passionné avec plus de 5 ans d'expérience dans la création d'applications web dynamiques. Mon parcours dans la technologie a commencé avec la création de mon premier site web à 15 ans, et je suis passionné depuis.
                </p>
                <p>
                  Je suis spécialisé dans les frameworks JavaScript modernes et possède un sens aigu du design. Mon approche allie expertise technique et résolution créative de problèmes pour offrir des expériences utilisateur exceptionnelles.
                </p>
                <p>
                  Lorsque je ne code pas, vous pouvez me trouver en train de contribuer à des projets open source, d'assister à des rencontres technologiques ou d'explorer les dernières nouveautés en matière de développement VR.
                </p>
            </div>

            <div class="skills">
                <div v-for="(skill, index) in [...frontendSkills, ...backendSkills]" :key="index" class="skill-item">
                    <div  class="skill-name">
                        <span>{{ skill.name }}</span>
                        <span>{{ skill.level }}%</span>
                    </div>
                    <div class="skill-bar" >
                        <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                    </div>

                </div>

                
            </div>
        </div>
    </section>

</template>