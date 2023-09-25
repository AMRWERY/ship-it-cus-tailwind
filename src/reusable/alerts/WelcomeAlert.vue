<template>
  <aside
    class="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white animate__animated animate__backInLeft"
    v-if="showAlert">
    <p class="text-sm font-medium hover:opacity-75">
      {{ $t('message.hey') }}! <span>{{ getUsername }}</span> 👋
    </p>

    <button class="rounded bg-white/20 p-1 hover:bg-white/10" @click="hideAlert">
      <i class="fa-solid fa-xmark h-4 w-4"></i>
    </button>
  </aside>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const showAlert = ref(true);
const store = useStore();

const hideAlert = () => {
  showAlert.value = false;
};

const getUsername = computed(() => store.getters.getUsername);

onMounted(() => {
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
});

onMounted(() => {
  const username = sessionStorage.getItem("username");
  store.commit("setUsername", username);
});
</script>