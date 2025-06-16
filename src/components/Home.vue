<script setup >
// Home.vue
const fullName = "Ulrich leblack"; 
const title = "Développeur Web Full Stack et Graphisque Designer";
</script>



<template> 
  <section class="hero" id="hero">
        <div class="hero-content">
          <h1 > <span>{{ fullName }}</span><br>
          {{ title }}</h1>
          <p>Je suis Ulrich, jeune designer graphique & développeur web</p>
          <p>Je crée des identités visuelles modernes,des sites web responsive et je suis passionné par le digital et la tech.</p>
  
            <div>
              <router-link to="/projects" class="btn btn-light btn-lg me-3">Voir mes projets</router-link>
              <router-link to="/contact" class="btn btn-outline-light btn-lg">Me contacter</router-link>
            </div>
        </div>
        
        
        <div class="profile-container">
            <div class="profile-border"></div>
            <div class="tech-icons">
                <i class="tech-icon" style="top: 0; left: 50%; transform: translateX(-50%);">⚛️</i>
                <i class="tech-icon" style="top: 50%; right: 0; transform: translateY(-50%);">💻</i>
                <i class="tech-icon" style="bottom: 0; left: 50%; transform: translateX(-50%);">🔌</i>
                <i class="tech-icon" style="top: 50%; left: 0; transform: translateY(-50%);">🎨</i>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmwrFsk0InvcTNA2CXv8o2RnnrqxIDoyMUg&s" alt="Developer illustration" width="300px" class="profile-pic" />
        </div>
  </section>

  <section class="hero" id="hero">
      <div class="projects-grid">
            
            <div class="project-card">
                <div class="project-info">
                  <font-awesome-icon icon="code" class="mb-3 text-primary" size="3x" />
                    <h3 class="project-title">Front-end</h3>
                    <p class="project-description">Création d'interfaces utilisateur et visuelles modernes et réactives .</p>
                </div>
              </div>
      </div>
       <div class="projects-grid">
            
            <div class="project-card">
                <div class="project-info">
                 <font-awesome-icon icon="server" class="mb-3 text-primary" size="3x" />
                    <h3 class="project-title">Back-end</h3>
                    <p class="project-description">Développement de systèmes robustes et évolutifs avec NodejS (JavaScript), Laravel (PHP) et Django (Python).</p>
                </div>
              </div>
      </div>
      <div class="projects-grid">
            
            <div class="project-card">
                <div class="project-info">
                  <font-awesome-icon icon="graduation-cap" class="mb-3 text-primary" size="3x" />
                    <h3 class="project-title">Apprentissage continu</h3>
                    <p class="project-description">Toujours à l'affût des dernières technologies et meilleures pratiques du développement web, du designer graphique.</p>
                </div>
              </div>
      </div>
  </section>
</template>

<style scoped>


</style>