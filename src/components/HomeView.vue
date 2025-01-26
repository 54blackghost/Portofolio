<template>
    <v-app >
        
    </v-app>
</template>

<script>
import { defineComponent } from 'vue';


import NavBar from '../components/NavBar.vue';
import About from  '../components/About.vue';





export default defineComponent({
name: 'HomeView',

compoments:(
    NavBar,
    About

),
});

</script>


<style scoped>

</style>