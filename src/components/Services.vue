<template>
<v-app>
      <v-responsive>
          <v-container fluid>
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
                        <v-btn icon color="#F8DF7E" class="text-white">
                            <v-icon>mdi-laptop</v-icon>
                        </v-btn>
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
              </div>
            </v-col>

            <br><br>
            <v-divider></v-divider>
            <br>

            <v-col cols="12" sm="12" id="services">
                  <div class="d-flex justify-center mb-6">
                    <v-btn color="#F8DF7E" class="mr-2">ALL</v-btn>
                    <v-btn variant="tonal" class="mr-2">Web Design</v-btn>
                    <v-btn variant="tonal" class="mr-2">App Design</v-btn>
                    <v-btn variant="tonal" class="mr-2">SEO</v-btn>
                    <v-btn variant="tonal" >Photographie</v-btn>
                  </div>
            </v-col>
            <v-col cols="12" class="imgcover">
                <v-row class="fill-height" align="center" justify="center">
                  <template v-for="(item, i) in items" :key="i">
                    <v-col cols="12" md="4">
                      <v-hover v-slot="{isHovering,props}">
                        <v-card :elevation="isHovering ? 12: 2" class="{'on-hover' : isHovering}" v-bind="props">
                          <v-img :src="item.img" height="225px" aspect-ratio="1"></v-img>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </template>
                </v-row>
            </v-col>
            <v-col  cols="12" sm="12">
              <div class="d-flex justify-center mb-6">
                <v-btn  class="mt-4" color="#F8DF7E"> Load More</v-btn>
              </div>
            </v-col>
        </v-container>
          <portofolio/>
      </v-responsive>
</v-app>
</template>

<script>
/*export default{
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
  },
};*/
import { ref } from "vue";
/*
export default {
  setup() {
    const items = ref([
      { img: "@/assets/1.png"},
      { img: "@/assets/logo.png"},
      { img: "@/assets/1.png"},
      { img: "@/assets/1.png"},
    ]);

    return {
      items,
    };
  },
};*/
</script>


<style scoped>
.v-container{
padding: 16px 0;
}
.imgcover{
    padding: 0 200px;
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
