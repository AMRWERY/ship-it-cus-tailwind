<template>
  <div class="px-4 pt-16 g-stone-100 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div class="sm:col-span-2">
        <router-link to="/" aria-label="Go home" title="Ship-IT" class="inline-flex items-center">
          <img src="/shopping-bags-svgrepo-com.svg" class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24">
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Ship-IT</span>
        </router-link>
        <div class="mt-6 lg:max-w-sm">
          <p class="text-sm text-gray-800">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam.
          </p>
          <p class="mt-4 text-sm text-gray-800">
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div class="space-y-2 text-sm">
        <router-link to="/hire-me" class="text-base font-bold tracking-wide text-gray-900">Hire Me</router-link>
        <div class="flex">
          <p class="mr-1 text-gray-800">Phone:</p>
          <a href="tel:102-265-5742" aria-label="Our phone" title="Our phone"
            class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">(+20) 102 265
            5742</a>
        </div>
        <div class="flex">
          <p class="mr-1 text-gray-800">Email:</p>
          <a href="mailto:amrmounir2@gmail.com" aria-label="Our email" title="Our email"
            class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">amrmounir2@gmail.com</a>
        </div>
        <div class="flex">
          <p class="mr-1 text-gray-800">Address:</p>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address"
            title="Our address"
            class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
            New Maadi, Cairo, Egypt
          </a>
        </div>
      </div>
      <div>
        <span class="text-base font-bold tracking-wide text-gray-900">Social</span>
        <div class="flex items-center mt-1">
          <a href="https://www.facebook.com/Amr.Wery/" target="_blank" rel="noopener noreferrer"
            class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <button
              class="rounded-full w-7 h-7 bg-blue-600 text-white p-0 border-0 inline-flex items-center justify-center ml-4">
              <i class="fa-brands fa-facebook-f"></i>
            </button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=201022655742" target="_blank" rel="noopener noreferrer"
            class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <button
              class="rounded-full w-7 h-7 bg-green-500 text-white p-0 border-0 inline-flex items-center justify-center ml-4">
              <i class="fa-brands fa-whatsapp"></i>
            </button>
          </a>
          <a href="https://twitter.com/3mr_wery" target="_blank" rel="noopener noreferrer"
            class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <button
              class="rounded-full w-7 h-7 bg-blue-400 text-white p-0 border-0 inline-flex items-center justify-center ml-4">
              <i class="fa-brands fa-twitter"></i>
            </button>
          </a>
        </div>
        <p class="mt-4 text-sm text-gray-500">
          Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
      <p class="text-sm text-gray-600">
        © Copyright 2023 Ship-IT. All rights reserved.
      </p>
      <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
        <li>
          <router-link to="/f-a-q"
            class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</router-link>
        </li>
        <li>
          <router-link to="/privacy-policy"
            class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
            Policy</router-link>
        </li>
        <li>
          <router-link to="/terms-and-conditions"
            class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp;
            Conditions</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  next();
});
</script>