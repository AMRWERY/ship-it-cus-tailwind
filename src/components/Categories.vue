<template>
    <div class="mx-auto py-5 px-4 w-full max-w-7xl bg-gray-100">
        <div class="mx-auto max-w-sm sm:max-w-3xl lg:max-w-none">
            <h2 class="text-2xl lg:text-3xl text-black font-bold text-center mb-6">Shop by Category</h2>

            <div class="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 sm:gap-x-8">
                <div class="col-span-1 aspect-w-2 aspect-h-3 relative rounded-lg overflow-hidden bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg"
                    v-for="category in categories" :key="category.id">
                    <router-link to="" class="py-6 flex justify-center items-end">
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


<script>
export default {
    name: 'Categories',

    data() {
        return {
            categories: [
                { id: 1, title: "Clothing", route: "", img: "https://justfields.com/storage/projects/7M5rV059/woo01.png" },
                { id: 2, title: "T-Shirts", route: "", img: "https://justfields.com/storage/projects/7M5rV059/woo06.png" },
                { id: 3, title: "Music", route: "", img: "https://justfields.com/storage/projects/7M5rV059/woo03.png" },
                { id: 4, title: "Hoodies", route: "", img: "https://justfields.com/storage/projects/7M5rV059/woo02.png" },
                { id: 5, title: "Albums", route: "", img: "https://justfields.com/storage/projects/7M5rV059/woo04.png" },
                { id: 6, title: "Accessories", route: "", img: "https://justfields.com/storage/projects/7M5rV059/woo05.png" },
                { id: 7, title: "Posters", route: "", img: "https://justfields.com/storage/projects/7M5rV059/Screenshot-2021-10-10-at-11.06.50-a.m..png" },
                { id: 8, title: "Decor", route: "", img: "https://justfields.com/storage/projects/7M5rV059/Screenshot-2021-10-10-at-11.04.00-a.m..png" },
            ]
        }
    },
}
</script>