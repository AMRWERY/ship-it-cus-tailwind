<template>
    <div class="mx-auto py-5 px-4 w-full max-w-7xl">
        <div class="mx-auto max-w-sm sm:max-w-3xl lg:max-w-none">
            <h2 class="text-2xl lg:text-3xl text-black dark:text-white font-bold text-center mb-6">{{
                $t('products.shop_by_category') }}</h2>
            <div class="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 sm:gap-x-8">
                <div class="col-span-1 aspect-w-2 aspect-h-3 relative rounded-lg overflow-hidden bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg"
                    v-for="category in getAllCategories" :key="category.id">
                    <router-link :to="{ name: 'products', params: { category: category.title } }"
                        class="py-6 flex justify-center items-end">
                        <img :src="category.img" class="absolute inset-0 w-full h-full object-cover object-center" />
                        <div class="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 via-transparent" />
                        <h3
                            class="relative text-center text-sm sm:text-base lg:text-lg text-white font-semibold tracking-wide antialiased">
                            {{ category.title }}
                        </h3>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const getAllCategories = computed(() => store.getters.getAllCategories);

const fetchCategories = () => {
    store.dispatch('fetchCategories');
};

onMounted(() => {
    fetchCategories();
});
</script>