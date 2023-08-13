<template>
  <aside class="
        fixed
        bottom-4
        end-4
        z-50
        flex
        items-center
        justify-center
        gap-4
        rounded-lg
        bg-black
        px-5
        py-3
        text-white
      " v-if="showAlert">
    <p class="text-sm font-medium hover:opacity-75">
      Hey! Amr 👋
    </p>

    <button class="rounded bg-white/20 p-1 hover:bg-white/10" @click="hideAlert">
      <i class="fa-solid fa-xmark h-4 w-4"></i>
    </button>
  </aside>
</template>

<script>
export default {
  name: 'WelcomeAlert',

  data() {
    return {
      showAlert: true,
    };
  },

  methods: {
    hideAlert() {
      this.showAlert = false;
    },
  },

  mounted() {
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  },
};
</script>