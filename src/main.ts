import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faJs, faBootstrap, faVuejs, faLaravel, faPython } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser, faBriefcase, faGraduationCap, faCode, faServer } from '@fortawesome/free-solid-svg-icons'

// Import des composants pour les routes
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

// Configuration des icônes
library.add(
  faGithub, faLinkedin, faHtml5, faCss3Alt, faJs, faBootstrap, faVuejs, faLaravel, faPython,
  faEnvelope, faHome, faUser, faBriefcase, faGraduationCap, faCode, faServer
)

// Configuration des routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')