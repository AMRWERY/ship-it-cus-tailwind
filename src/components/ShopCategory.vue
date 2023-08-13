<template>
    <section class="container m-16 mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between px-4 sm:px-0">
            <h2 class="text-lg font-semibold md:text-2xl">Shop by Category</h2>
            <router-link to="/categories" class="text-blue-800">View All</router-link>
        </div>
        <div class="mt-8 flex overflow-x-auto">
            <swiper class="mySwiper">
                <swiper-slide v-for="card in categories" :key="card"
                    class="items-center justify-center flex text-base text-center shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <router-link to=""
                        class="h-56 relative flex-shrink-0 flex justify-center w-44 overflow-hidden rounded-xl border border-white mx-2">
                        <img :src="card.img" class="h-full object-cover w-full inset-0 absolute" />
                        <div
                            class="bg-gradient-to-t from-black to-transparent h-1/2 opacity-50 inset-x-0 bottom-0 absolute">
                        </div>
                        <span
                            class="font-semibold mt-auto text-sm text-white mb-2 z-10 relative capitalize md:text-base md:mb-4">{{
                                card.title }}</span>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
  
  
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    name: 'ShopCategory',

    components: {
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            categories: [
                { title: 'Clothing', img: "https://justfields.com/storage/projects/7M5rV059/woo01.png", route: '' },
                { title: 'T-Shirts', img: "https://justfields.com/storage/projects/7M5rV059/woo06.png", route: '' },
                { title: 'Music', img: "https://justfields.com/storage/projects/7M5rV059/woo03.png", route: '' },
                { title: 'Hoodies', img: "https://justfields.com/storage/projects/7M5rV059/woo02.png", route: '' },
                { title: 'Albums', img: "https://justfields.com/storage/projects/7M5rV059/woo04.png", route: '' },
                { title: 'Accessories', img: "https://justfields.com/storage/projects/7M5rV059/woo05.png", route: '' },
                { title: 'Clothing', img: "https://justfields.com/storage/projects/7M5rV059/woo01.png", route: '' },
                { title: 'T-Shirts', img: "https://justfields.com/storage/projects/7M5rV059/woo06.png", route: '' },
                { title: 'Music', img: "https://justfields.com/storage/projects/7M5rV059/woo03.png", route: '' },
                { title: 'Hoodies', img: "https://justfields.com/storage/projects/7M5rV059/woo02.png", route: '' },
                { title: 'Albums', img: "https://justfields.com/storage/projects/7M5rV059/woo04.png", route: '' },
                { title: 'Accessories', img: "https://justfields.com/storage/projects/7M5rV059/woo05.png", route: '' },
            ]
        }
    },

    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>
  
<style scoped>
.swiper-slide {
    width: 200px !important;
}
</style>