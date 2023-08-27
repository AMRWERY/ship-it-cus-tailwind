<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-lg font-semibold md:text-2xl">You May Also Like</h2>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <router-link v-for="card in subProducts" :key="card" :to="'/product/' + card.id" class="group relative">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="card.productImg" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div class="flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                    <router-link to="">
                                    </router-link>
                                </h3>
                                <div class="flex items-center">
                                    <p class="text-sm font-medium text-gray-900 mr-2">${{ card.price }}</p>
                                    <p class="text-sm font-medium text-gray-400 line-through dark:text-gray-300"
                                        v-if="card.originalPrice !== null && card.originalPrice !== '' && card.originalPrice !== 0">
                                        ${{ card.originalPrice }}</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-sm font-medium text-green-500"
                            v-if="card.discount !== null && card.discount !== '' && card.discount !== 0">{{ card.discount
                            }}% off
                        </p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref, watch } from 'vue';

const store = useStore();
const route = useRoute();
const router = useRouter();
store.dispatch('fetchProducts');


let products = computed(() => store.getters.getAllProducts);
let someProducts = ref(6);

const subProducts = computed(() => {
    return products.value.slice(0, someProducts.value);
});

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    next();
});

watch(products, (newProducts) => {
    subProducts.value = newProducts.slice(0, someProducts.value);
});

watch(() => route.params.id, async (newId) => {
    await store.dispatch('getProductById', newId);
});
</script>