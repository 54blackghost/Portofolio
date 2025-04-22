
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
:root{
    --primary: #ff6896;
    --secondary: #6A5ACD;
    --accent: #FFD700;
    --dark: #2A2A2A;
    --light: #FFFFFF;
}
.btn{
    display: inline-flex;
    align-items: center;
    padding: 1rem 2.5rem;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    color: var(--light);
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    gap: 0.8rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
.btn::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    left: -100%;
    transition: all o.3s ease;
}
.btn:hover::before{
    left: 100%;
}
.scroll-reveal{
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
}

.scroll-reveal{
    opacity: 1;
    transform: translateY(0);
}
.booking{
    padding: 8rem 0;
    background: linear-gradient(45deg, var(--primary),var(--secondary));
    color: var(--light);
    position: relative;
    overflow: hidden;
}
.booking::before{
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(80px);
    top: -50px;
    right: -50px;
}

.section-subtitle{
    text-align: center;
    margin-bottom: 3rem;
    opacity: 0.9;
}
.booking-form{
    max-width: 800px;
    margin: 0 auto;
}

.form-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.input-group{
    position: relative;
}

.input-group input,
.input-group select,
.input-group textarea{
    width: 100%;
    padding: 1.5rem 1rem 1rem 3rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--light);
    font-size: 1rem;
    transition: all
    0.3s ease;
}

.input-group textarea{
    padding: 1.5rem 1rem 1rem 3rem;
    resize: vertical;
    
}
.input-group label{
    position: absolute;
    left: 3rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
    pointer-events: none;
    transition: all 0.3s ease;
}

.input-group i{
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
}
.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus{
    border-color: var(--light);
    background: rgba(255, 255, 255, 0.15);
    outline: none;
}

.input-group input:valid ~ label,
.input-group input:focus ~ label,
.input-group select:valid ~ label,
.input-group select:focus ~ label{
    transform: translateY(-180%);
    font-size: 0.8rem;
    opacity: 0.7;
}

.input-group textarea::placeholder{
    color: rgba(255, 255, 255, 0.5);
}

.full-width{
    grid-column: 1 / -1;
}

@media (max-width: 760px){
    .input-group input,
    .input-group select{
        padding-left: 2.5rem;
    }
    .input-group i{
        left: 0.8rem;
    }
}


</style>