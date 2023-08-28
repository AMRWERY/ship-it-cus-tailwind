<template>
  <Navbar />
  <RouterView />
  <LoadingSpinner v-if="isLoading" />
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router'
import { mapGetters } from "vuex";
import Navbar from './layouts/Navbar.vue';
import Footer from './layouts/Footer.vue';
import LoadingSpinner from './reusable/LoadingSpinner.vue'

export default {
  name: 'App',

  components: { Navbar, Footer, LoadingSpinner },

  computed: {
    ...mapGetters(["isLoading"]),
  },
}
</script>