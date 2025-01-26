<template>
<v-app>
    <v-responsive>
        <v-container  fluid>
            <v-col cols="12" class="mt-16" id="about">
            <div>
                <v-row>
                    <v-col cols="12" sm="6">
                    <div class="egg">
                    <v-img src="@/assets/logo.png"></v-img>
                    </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <h5 class="mt-16">About me</h5>
                        <div style="width: 120px;">
                            <v-slider v-model="slider2" color="yellow" thumb-label>

                            </v-slider>
                        </div>
                        <h4 class="mt-8">I'm a Creative web designer</h4>
                        <h4 >and developper</h4>
                        <p class="text-grey">Graduated with a Certificate in PHP and passionate about computer science,. During my internships, I participated in the definition of user needs and the writing of programs. Known for my rigor and autonomy, I would like to put my skills at your service.</p>
                        <br>
                        <p class="text-grey">Graduated with a Certificate in PHP and passionate about computer science,. During my internships, I participated in the definition of user needs and the writing of programs. Known for my rigor and autonomy, I would like to put my skills at your service.</p>
                        <v-btn small dark class="text-yellow mt-8" variant="outlined"> Download Resume</v-btn>
                    </v-col>
                </v-row>
            </div>
            </v-col>
            <div class="text-center mt-4">
                <h2>What we Do</h2>
      </div>
      <div  style="width: 120px; margin:0 auto;">
                <v-slider v-model="slider2" color="yellow" thumb-label=""></v-slider>
      </div>
      <v-col cols="12" class="padd" id="portofolio">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
                <div class="child">
                    <v-btn icon="fas fa-laptop" color="#F8DF7E" class="text-white"></v-btn>
                      <h3 class="ml-3 mt-4">Web Design</h3>
                      <p class="text-grey ml-3 mt-4 text-caption">
                          wfuuwfuowuofwofiowhiofw <br>hgeihfihwifhwihiwhfihwir <br>efeifehfihiiwhri
                      </p>
                </div>
                <div class="child">
                  <v-btn icon="fas fa-mobile-alt" color="#F8DF7E" class="text-white"></v-btn>
                    <h3 class="ml-3 mt-4">App Design</h3>
                    <p class="text-grey ml-3 mt-4 text-caption">
                        wfuuwfuowuofwofiowhiofw <br>hgeihfihwifhwihiwhfihwir <br>efeifehfihiiwhri
                    </p>
                </div>
                <div class="child">
                <v-btn icon="fas fa-camera" color="#F8DF7E" class="text-white"></v-btn>
                    <h3 class="ml-3 mt-4">Photographie</h3>
                    <p class="text-grey ml-3 mt-4 text-caption">
                    wfuuwfuowuofwofiowhiofw <br>hgeihfihwifhwihiwhfihwir <br>efeifehfihiiwhri
                    </p>
            </div>
</v-col>
</v-row>
<v-divider></v-divider>
</div>
</v-col>
<br><br>
<Services/>     
        </v-container>
        
    </v-responsive>

</v-app>
</template>


<script>
import Services from '@/components/Services.vue';

import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Services',
  setup(){
  return {
    slider2: 50, // Valeur initiale du slider
  
    items:[
    {
        img: "logo.png"
    },
    {
        img: "logo.png"
    },
    {
        img: "logo.png"
    },
    {
        img: "logo.png"
    },
    {
        img: "logo.png"
    },
    {
        img: "logo.png"
    },
    {
        img: "logo.png"
    },
],
}
}
})

</script>

<style scoped>
.v-container{
padding: 16px 0;
}
.egg{
    display: block;
    margin-left: 100px;
    margin-top: 50px;
    width: 300px;
    background-color: #F8DF7E;
    border-radius: 50% 50% 50% 50%/ 60% 60% 40% 0% ;
}
.first{
    width: 100%;
    height: 200px;
    text-align: center;
    padding: 2rem 2rem;
}
.child{
    display: inline-block;
    padding: 2rem 2rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
}



</style>