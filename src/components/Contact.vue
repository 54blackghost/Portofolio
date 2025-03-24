
<template>
  <section class="container section-padding">
    <div>
      <h2 class="section-title text-center mb-5">Me contacter</h2>
    </div>
    
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4 p-md-5">
            <div v-if="submitted" class="alert alert-success" role="alert">
              Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
            </div>
            
            <form @submit.prevent="submitForm" v-if="!submitted">
              <div class="mb-4">
                <label for="name" class="form-label">Nom complet</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="name" 
                  v-model="name" 
                  required
                  placeholder="Votre nom"
                >
              </div>
              
              <div class="mb-4">
                <label for="email" class="form-label">Adresse e-mail</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="email" 
                  v-model="email" 
                  required
                  placeholder="votre@email.com"
                >
              </div>
              
              <div class="mb-4">
                <label for="message" class="form-label">Message</label>
                <textarea 
                  class="form-control" 
                  id="message" 
                  rows="5" 
                  v-model="message" 
                  required
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary btn-lg w-100" 
                :disabled="loading"
              >
                <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>
            </form>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <div class="bg-white p-4 rounded shadow-sm h-100">
              <font-awesome-icon icon="envelope" class="text-primary mb-3" size="2x" />
              <a href="mailto:ulrichleblack@gmail.com" class="text-decoration-none">
                <h5>Email</h5>
              </a>
            </div>
          </div>
          
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <div class="bg-white p-4 rounded shadow-sm h-100">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="text-primary mb-3" size="2x" />
              <a href="https://www.linkedin.com/in/ulrich-leblack-7a803220a/" target="_blank" class="text-decoration-none">
                <h5>LinkedIn</h5>
              </a>
            </div>
          </div>
          
          <div class="col-md-4 text-center">
            <div class="bg-white p-4 rounded shadow-sm h-100">
              <font-awesome-icon :icon="['fab', 'github']" class="text-primary mb-3" size="2x" />
              <a href="https://github.com/54blackghost" target="_blank" class="text-decoration-none">
                <h5>GitHub</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>





<script setup >
    import { ref } from 'vue';

    const name = ref('');
        const email = ref('');
        const message = ref('');
        const submitted = ref(false);
        const loading = ref(false);

        const submitForm = () => {
          loading.value = true;
          
          // Simuler un envoi de formulaire
          setTimeout(() => {
            loading.value = false;
            submitted.value = true;
            
            // Réinitialiser le formulaire
            name.value = '';
            email.value = '';
            message.value = '';
            
            // Réinitialiser l'état de soumission après 5 secondes
            setTimeout(() => {
              submitted.value = false;
            }, 5000);
          }, 1500);
        };
</script>