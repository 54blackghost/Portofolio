<template>
<v-app>
  <v-responsive>
    <v-container fluid>
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
          <v-card :elevation="isHovering ? 12: 2" class="{'on-hover' : isHovring}" v-bind="props">
          <v-img :src="item.img" height="225px" cover></v-img>
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
    <v-col cols="12" id="page">
    <div class="pre">
      <v-row>
        <v-col cols="12" sm="3">
          <v-card class="mr auto" max-width="344" height="">
          <v-img src="@/assets/logo.png" height="200px" cover></v-img>
        <v-card-title>
          we provide you the best
        </v-card-title>
        <v-card-subtitle>
          thing in the world
        </v-card-subtitle>
        <v-card-text>
          we provide you the best ernefwjfojw wifjwproj woeiwejr wieriwje
        </v-card-text>
        </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="mr auto" max-width="344" height="">
          <v-img src="@/assets/logo.png" height="200px" cover></v-img>
        <v-card-title>
          we provide you the best
        </v-card-title>
        <v-card-subtitle>
          thing in the world
        </v-card-subtitle>
        <v-card-text>
          we provide you the best ernefwjfojw wifjwproj woeiwejr wieriwje
        </v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </div>
    </v-col><br>
    <v-col cols="12" id="blog">
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

    </v-col>

    <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <v-col cols="12" sm="4">
        <div class="child">
            <h1 >Contact info </h1>
            <v-btn icon="fas fa-map-marker-alt"  variant="outlined" class="mt-10"></v-btn><br>
            <span class="text-caption">
              your street, 
            </span><br>
            <v-btn icon="fas fa-phone-alt"  variant="outlined" class="mt-10"></v-btn><br>
            <span class="text-caption">
            00-3900-300-3332223
            </span><br>
            <v-btn icon="fas fa-envelope-alt"  variant="outlined" class="mt-10"></v-btn><br>
            <span class="text-caption">
            abcexample@gmail.com
            </span><br>
        </div>
          </v-col>
          <v-col cols="12" sm="8">
            <h1 class="mt-8">send your message</h1>
            <v-divider></v-divider>
            <span class="text-caption">
              cnwnpigxolw owjowxerkj jowjeorcojqorj jojxocrojeojr joorjcorjoq 
            </span>
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-text-field label="Name" persistent-hint variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Phone No" persistent-hint variant="outlined"></v-text-field>
              </v-col>
            </v-row>
                <v-textarea label="Message" persistent-hint variant="outlined"></v-textarea>
                <v-btn color="#F8DF7E" class="mt-2">Submit Now</v-btn>
          </v-col>
        </v-row>
      

    </v-col>
    </v-container>
  </v-responsive>
</v-app>
</template>

<script setup>


</script>


<style scoped>
.v-container{
padding: 16px 0;
}
.imgcover{
    padding: 0 200px;
}
.pre{
    width: 100%;
    height: 400px;
    text-align: center;
    padding: 0 200px;
    background-color:  #f5f5f5;
}
.hire{
    width: 100%;
    height: 200px;
    padding: 0 200px;
    background-color:  #f5f5f5;
    margin-top: -24px;

}
.child{
    display: inline-block;
    padding: 2rem 2rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
}
</style>
