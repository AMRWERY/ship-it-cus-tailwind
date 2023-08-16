<template>
  <Navbar />
  <RouterView />
  <LoadingSpinner v-if="isLoading" />
</template>

<script>
import { RouterView } from 'vue-router'
import { mapGetters } from "vuex";
import Navbar from './layouts/Navbar.vue';
import LoadingSpinner from './reusable/LoadingSpinner.vue'

export default {
  name: 'App',

  components: { Navbar, LoadingSpinner },

  computed: {
    ...mapGetters(["isLoading"]),
  },
}
</script>