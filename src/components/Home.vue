<script setup lang="ts">
// Home.vue
const fullName = "Ulrich leblack"; // Remplacez par votre nom
const title = "Développeur Web Full Stack";
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
          <h1 class="display-4 fw-bold mb-3">{{ fullName }}</h1>
          <h2 class="display-6 mb-4">{{ title }}</h2>
          <p class="lead mb-5">Spécialisé en HTML, CSS, JavaScript, Bootstrap, Vue.js, Laravel et Django</p>
          <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-5">
            <font-awesome-icon :icon="['fab', 'html5']" class="tech-icon text-danger" />
            <font-awesome-icon :icon="['fab', 'css3-alt']" class="tech-icon text-primary" />
            <font-awesome-icon :icon="['fab', 'js']" class="tech-icon text-warning" />
            <font-awesome-icon :icon="['fab', 'bootstrap']" class="tech-icon text-purple" />
            <font-awesome-icon :icon="['fab', 'vuejs']" class="tech-icon text-success" />
            <font-awesome-icon :icon="['fab', 'laravel']" class="tech-icon text-danger" />
            <font-awesome-icon :icon="['fab', 'python']" class="tech-icon text-primary" />
          </div>
          <div>
            <router-link to="/projects" class="btn btn-light btn-lg me-3">Voir mes projets</router-link>
            <router-link to="/contact" class="btn btn-outline-light btn-lg">Me contacter</router-link>
          </div>
        </div>
        <div class="col-lg-6 text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmwrFsk0InvcTNA2CXv8o2RnnrqxIDoyMUg&s" alt="Developer illustration" class="img-fluid humaaans-image" />
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <font-awesome-icon icon="code" class="mb-3 text-primary" size="3x" />
              <h3 class="card-title">Front-end</h3>
              <p class="card-text">Création d'interfaces utilisateur modernes et réactives avec HTML, CSS, JavaScript, Bootstrap et Vue.js.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <font-awesome-icon icon="server" class="mb-3 text-primary" size="3x" />
              <h3 class="card-title">Back-end</h3>
              <p class="card-text">Développement de systèmes robustes et évolutifs avec Laravel (PHP) et Django (Python).</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <font-awesome-icon icon="graduation-cap" class="mb-3 text-primary" size="3x" />
              <h3 class="card-title">Apprentissage continu</h3>
              <p class="card-text">Toujours à l'affût des dernières technologies et meilleures pratiques du développement web.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-purple {
  color: #7952b3;
}

.humaaans-image {
  max-height: 500px;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.1));
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
}

@media (max-width: 991.98px) {
  .hero-section {
    padding: 80px 0;
  }
}
</style>