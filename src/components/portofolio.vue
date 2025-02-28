<template>
<v-app>
    <v-responsive>
        <v-container fluid>
    <v-col cols="12" id="page">
    <div class="pre">
      <v-row>
        <template v-for="(project, i) in projects" :key="i">
        <v-col cols="12" sm="3">
          <v-card class="mr auto" max-width="344" height="">
          <v-img src="@/assets/logo.png" height="200px" cover></v-img>
        <v-card-title data-name="{{ project.title|upper}}" data-tags="{{ project.tags.all|join:','|lower }}">
          {{ project.title }}
        </v-card-title>
        <v-card-subtitle>
          thing in the world
        </v-card-subtitle>
        <v-card-text>
          {{ project.description }}
        </v-card-text>
        <v-card-text>
          Tags: {{ project.tags.all|join  }}
        </v-card-text>
        <v-card-link>
          Links: {{ project.links }}
        </v-card-link>
        </v-card>
        </v-col>
        </template>
      </v-row>
    </div>
    </v-col><br>
    <v-col cols="12" id="blog"></v-col>
    <div class="hire">
              <v-row>
                <v-col cols="12" sm="8">
                  <h1 class="mt-9 text-black">Hire me for you awesome web projects</h1>
                  <p class="text-grey">
                    cnwnpigxolw owjowxerkj jowjeorcojqorj jojxocrojeojr joorjcorjoq fecgehxgevuxg thrd
                  </p>
                </v-col>
                <v-col cols="12" sm="4">
                <v-btn color="#F8DF7E" class="mt-15">Hire Me</v-btn>
                </v-col>
              </v-row>
            </div>
        </v-container>
        <Contact/>
    </v-responsive>
</v-app>
</template>


<script>
import { ref, onMounted } from 'vue';
import api from '@/axios';

const fetchUsers = async () =>{
  try{
    const response = await api.get("/projects/"); //URL de l'Api django
    projects.value = response.data;//stockage des donnees
    } catch(error)  {
      console.error("Erreur API:", error);
    
    }
};


onMounted(fetchUsers)
</script>

<style>
.v-container{
padding: 16px 0;
}

.hire{
    width: 100%;
    height: 200px;
    padding: 0 200px;
    background-color:  #f5f5f5;
    margin-top: -24px;
}
.pre{
    width: 100%;
    height: 400px;
    text-align: center;
    padding: 0 200px;
    background-color:  #f5f5f5;
}
</style>