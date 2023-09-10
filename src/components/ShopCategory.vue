<template>
    <section class="container m-16 mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between px-4 sm:px-0">
            <h2 class="text-lg font-semibold md:text-2xl">Shop by Category</h2>
            <router-link to="/categories" class="text-blue-800">View All</router-link>
        </div>
        <div class="mt-8 flex overflow-x-auto">
            <swiper class="mySwiper">
                <swiper-slide v-for="category in getAllCategories" :key="category.id"
                    class="items-center justify-center flex text-base text-center shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <router-link to=""
                        class="h-56 relative flex-shrink-0 flex justify-center w-44 overflow-hidden rounded-xl border border-white mx-2">
                        <img :src="category.img" class="h-full object-cover w-full inset-0 absolute" />
                        <div
                            class="bg-gradient-to-t from-black to-transparent h-1/2 opacity-50 inset-x-0 bottom-0 absolute">
                        </div>
                        <span
                            class="font-semibold mt-auto text-sm text-white mb-2 z-10 relative capitalize md:text-base md:mb-4">{{
                                category.title }}</span>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const store = useStore();

const getAllCategories = computed(() => store.getters.getAllCategories);

const fetchCategories = () => {
    store.dispatch('fetchCategories');
};

onMounted(() => {
    fetchCategories();
});
</script>

  
<style scoped>
.swiper-slide {
    width: 200px !important;
}
</style>