

<template>   
<div id="app-container">      
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navLinks">
      <div class="container">
        <!-- Logo -->
        <div class="logo">
            <router-link class="nav-link" to="/">
             <span>Ulrich LeBlack</span> 
            </router-link></div>

        <!-- Liens -->
   
           <ul class="nav-links">
              <li >
                <router-link class="nav-link" to="/" >
                  <font-awesome-icon icon="home" /> Accueil
                </router-link>
              </li>
              <li >
                <router-link class="nav-link" to="/about">
                  <font-awesome-icon icon="user" />About Me
                </router-link>
              </li>
              <li >
                <router-link class="nav-link" to="/projects">
                  <font-awesome-icon icon="briefcase" /> Web Projets 
                </router-link>
              </li>
              <li >
                <router-link class="nav-link" to="/design">
                  <font-awesome-icon icon="briefcase" />Design Projets 
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">
                  <font-awesome-icon icon="envelope" /> Contact
                </router-link>
              </li>
            </ul>
        </div>
    
    </nav>
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
  <motion.div />
</template>


<script setup >
import { ref } from "vue";
import { useRouter } from "vue-router";


</script>
<style>


</style>