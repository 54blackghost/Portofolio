<script setup >
// App.vue
</script>

<template>
  <div class="app-container">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">Mon Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">
                  <font-awesome-icon icon="home" /> Accueil
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">
                  <font-awesome-icon icon="user" /> À propos
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/skills">
                  <font-awesome-icon icon="code" /> Compétences
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/projects">
                  <font-awesome-icon icon="briefcase" /> Projets
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">
                  <font-awesome-icon icon="envelope" /> Contact
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <div class="mb-3">
          <a href="https://github.com/54blackghost" target="_blank" class="text-white me-3">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/ulrich-leblack-7a803220a/" target="_blank" class="text-white me-3">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
          </a>
          <a href="mailto:ulrichleblack@example.com" class="text-white">
            <font-awesome-icon icon="envelope" size="2x" />
          </a>
        </div>
        <p>&copy; {{ new Date().getFullYear() }} - Portfolio Développeur Full Stack By Ulrichleblack</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-top: 76px;
}

.router-link-active {
  font-weight: bold;
  color: #fff !important;
}
</style>