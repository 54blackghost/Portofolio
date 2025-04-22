
<template>
<section class="booking" id="booking">
  <div class="container">
            <div class="booking-content scroll-reveal" >
              <h2 class="section-title text-center mb-5">Me contacter</h2>
                <p class="section-subtitle">
                  Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
                </p>
                <form action="" class="booking-form" @submit.prevent="submitForm" v-if="!submitted">
                    <div class="form-grid">
                        <div class="input-group">
                            <input type="text" id="name" required>
                            <label for="name">full name</label>
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="input-group">
                            <input type="email" id="email" required>
                            <label for="email">Email address</label>
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="input-group">
                            <input type="tel" id="phone" required>
                            <label for="phone">Phone Number</label>
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="input-group full-width">
                            <textarea rows="4" placeholder="Décrivez votre projet ou votre demande..." id="message"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn">
                        <i class="fas fa-paper-plane"></i>
                        <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
                    </button>
                </form>
        
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
<style scoped>






</style>