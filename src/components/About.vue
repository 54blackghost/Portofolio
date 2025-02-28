<script setup lang="ts">
// About.vue
</script>

<template>
  <section class="container section-padding">
    <div class="row">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <h2 class="section-title">À propos de moi</h2>
        <p class="lead">Développeur Web Full Stack passionné par la création d'applications web performantes et élégantes.</p>
        <p>
          Avec une solide expérience dans le développement front-end et back-end, je crée des solutions web complètes
          qui répondent aux besoins des utilisateurs tout en respectant les meilleures pratiques du secteur.
        </p>
        <p>
          Ma passion pour l'apprentissage continu me permet de rester à jour avec les dernières technologies
          et tendances du développement web, garantissant ainsi des solutions modernes et efficaces.
        </p>
        <div class="mt-4">
          <h4>Mes valeurs :</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-transparent">🚀 Innovation et créativité</li>
            <li class="list-group-item bg-transparent">🔍 Attention aux détails</li>
            <li class="list-group-item bg-transparent">🤝 Collaboration et communication</li>
            <li class="list-group-item bg-transparent">📈 Amélioration continue</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <h3 class="mb-4">Parcours professionnel</h3>
            
            <div class="d-flex mb-4">
              <div class="flex-shrink-0">
                <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                  <font-awesome-icon icon="briefcase" />
                </div>
              </div>
              <div class="ms-3">
                <h5>Développeur Full Stack </h5>
                <p class="text-muted mb-1">Laravel Full Stack </p>
                <p>Développement d'applications web d'une Plateforme de donation de dons utilisant Bootstrap5 et Django.</p>
                <a href="#">
                  <button type="button" class="btn btn-primary">
                Click Here
                </button></a>
              </div>
            </div>
            
            
            
            <div class="d-flex">
              <div class="flex-shrink-0">
                <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                  <font-awesome-icon icon="graduation-cap" />
                </div>
              </div>
              <div class="ms-3">
                <h5>Formation Développement Web</h5>
                <p class="text-muted mb-1">École de Développement • 2018 - 2020</p>
                <p>Formation complète en développement web front-end et back-end.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>