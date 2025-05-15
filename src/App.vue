<script setup >
// App.vue
</script>

<template>
  <div class="app-container">
    <header>
      <div class="container">
      <nav class="navbar">
          <div class="logo">
            <router-link class="nav-link" to="/">
              Ulrich Le Black
            </router-link></div>
            <ul class="nav-links">
              <li >
                <router-link class="nav-link" to="/">
                  <font-awesome-icon icon="home" /> Accueil
                </router-link>
              </li>
              <li >
                <router-link class="nav-link" to="/about">
                  <font-awesome-icon icon="user" /> À propos
                </router-link>
              </li>
              <li >
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
        </nav>
        </div>
    </header>

    <main>
      <router-view />
    </main>
    <footer>
        <div class="container">
            <div class="footer-content scroll-reveal">
                <div class="footer-col">
                    <h3>Ulrich</h3>
                    <p> " Que l’on me donne 5 heures pour abattre un arbre, j’en prendrai 4h pour aiguiser ma hache ".</p>
                    <div class="social-links">
                        <a href="https://github.com/54blackghost"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/ulrich-leblack-7a803220a/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="mailto:ulrichleblack@example.com"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div class="copyright --services">
              <p>&copy; {{ new Date().getFullYear() }} - Portfolio Développeur Full Stack <i class="fas fa-heart" style="color: red;"></i> By Ulrichleblack</p>
            </div>
        </div>
    </footer>
  </div>
</template>

<style>


.router-link-active {
  font-weight: bold;
  color: #fff !important;
}
</style>