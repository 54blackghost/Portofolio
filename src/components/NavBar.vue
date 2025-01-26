<template>
<v-app>
    <v-responsive>
        <v-app-bar app color="black" dark flat class="px-12">
        <v-btn>
            <i class="fas fa-signature" style="color: yellow;"></i> Ulrichleblack
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn>
        <v-btn text @click="scroll('about')" >About</v-btn>
        <v-btn text @click="scroll('services')" >Services</v-btn>
        <v-btn text @click="scroll('portofolio')" >Portofolio</v-btn>
        
        
    </v-app-bar>
    <v-container  fluid>
            <div class="head">
                <v-row>
                    <v-col cols="5">
                        <div style="position: relative;" class="mt-16">
                        <h1 class="text-grey">Hello</h1>
                        <h1 class="text-h3 text-secondary">I'M ulrichleblack</h1>
                        <span class="text-body-3 text-secondary"> web designer & developer</span><br>
                        <v-btn small dark class="text-yellow mt-8" variant="outlined" color="primary"> Contact me</v-btn>
                    </div>
                    </v-col>
                    <v-col cols="2">
                        <div style="position: absolute; z-index: 9000; margin-left: auto; margin-right: auto; left:0 ; right: 0; text-align: center;" class="mt-16">
                            
                            <v-icon color="white" size="50">mdi-angle-double-down</v-icon>
                        </div>
                    </v-col>
                    <v-col cols="5">
                        <div style="position: relative; z-index: 9000 ;" class="mt-16">
                            
                            <v-img  src="@/assets/1.png"  contain max-width="300"
                            ></v-img>
                        </div>
                    </v-col>
                </v-row>
            </div>

        </v-container>  

        <About/>
    </v-responsive>
</v-app>
</template>


<script>
import { defineComponent } from 'vue';
export default{
    name: "NavBar",
    methods:{
        scroll(refName){
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: "smooth"});
        }
    }

}

</script>


<style>
.v-container{
padding: 16px 0;
}
.head{
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height:400px ;
    width: 100%;
    color: white;
    overflow: hidden;
}
.head::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, 6deg);
}
.head::after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, -6deg); 
}


</style>