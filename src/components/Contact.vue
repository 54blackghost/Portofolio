
<template>
<div class="booking" >
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
      </div>
    </div>
  </div>
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