<template>
  <Navbar />
  <RouterView />
  <!-- <Footer /> -->
</template>

<script>
import { RouterView } from 'vue-router'
import Navbar from './layouts/Navbar.vue';
// import Footer from './layouts/Footer.vue';

export default {
  name: 'App',

  components: { Navbar }
  // components: { Navbar, Footer }
}
</script>