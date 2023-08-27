<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h2 class="text-lg title-font text-gray-500 tracking-widest text-center mb-6">Featured Products</h2>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center justify-center" id="myTab"
                data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#men"
                        type="button" role="tab" aria-controls="men" aria-selected="false">Men</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#women"
                        type="button" role="tab" aria-controls="women" aria-selected="false">Women</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#gadgets"
                        type="button" role="tab" aria-controls="gadgets" aria-selected="false">Gadgets</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab"
                        data-tabs-target="#accessories" type="button" role="tab" aria-controls="accessories"
                        aria-selected="false">Accessories</button>
                </li>
            </ul>
        </div>
        <div id="myTabContent">
            <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="men" role="tabpanel" aria-labelledby="men-tab">
                <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div v-for="(product, index) in men" :key="product.id" class="group relative">
                            <button type="button" class="absolute top-2 right-2 mx-3 mt-3 z-10"
                                @click="toggleHeartColor(index)">
                                <i class="fa-regular fa-heart" :style="{ color: product.heartColor }"></i>
                            </button>
                            <div
                                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img :src="product.img"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <span aria-hidden="true" class="absolute inset-0" />
                                        {{ product.title }}
                                    </h3>
                                </div>
                                <div>
                                    <div class="flex gap-2">
                                        <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
                                    </div>
                                    <div class="mt-12">
                                        <router-link :to="product.route">
                                            <button type="button" id="hs-as-table-table-export-dropdown"
                                                class="absolute bottom-2 right-2 float-right">
                                                <i class="fa-solid fa-bag-shopping" style="color: #614BC3"></i>
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="women" role="tabpanel" aria-labelledby="women-tab">
                <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div v-for="(product, index) in women" :key="product.id" class="group relative">
                            <button type="button" class="absolute top-2 right-2 mx-3 mt-3 z-10"
                                @click="toggleHeartColor(index)">
                                <i class="fa-regular fa-heart" :style="{ color: product.heartColor }"></i>
                            </button>
                            <div
                                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img :src="product.img"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <span aria-hidden="true" class="absolute inset-0" />
                                        {{ product.title }}
                                    </h3>
                                </div>
                                <div>
                                    <div class="flex gap-2">
                                        <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
                                    </div>
                                    <div class="mt-12">
                                        <router-link :to="product.route">
                                            <button type="button" id="hs-as-table-table-export-dropdown"
                                                class="absolute bottom-2 right-2 float-right">
                                                <i class="fa-solid fa-bag-shopping" style="color: #614BC3"></i>
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="gadgets" role="tabpanel" aria-labelledby="gadgets-tab">
                <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div v-for="(product, index) in gadgets" :key="product.id" class="group relative">
                            <button type="button" class="absolute top-2 right-2 mx-3 mt-3 z-10"
                                @click="toggleHeartColor(index)">
                                <i class="fa-regular fa-heart" :style="{ color: product.heartColor }"></i>
                            </button>
                            <div
                                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img :src="product.img"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <span aria-hidden="true" class="absolute inset-0" />
                                        {{ product.title }}
                                    </h3>
                                </div>
                                <div>
                                    <div class="flex gap-2">
                                        <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
                                    </div>
                                    <div class="mt-12">
                                        <router-link :to="product.route">
                                            <button type="button" id="hs-as-table-table-export-dropdown"
                                                class="absolute bottom-2 right-2 float-right">
                                                <i class="fa-solid fa-bag-shopping" style="color: #614BC3"></i>
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="accessories" role="tabpanel"
                aria-labelledby="accessories-tab">
                <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div v-for="(product, index) in accessories" :key="index" class="group relative">
                            <button type="button" class="absolute top-2 right-2 mx-3 mt-3 z-10"
                                @click="toggleHeartColor(index)">
                                <i class="fa-regular fa-heart" :style="{ color: product.heartColor }"></i>
                            </button>
                            <div
                                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img :src="product.img"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <span aria-hidden="true" class="absolute inset-0" />
                                        {{ product.title }}
                                    </h3>
                                </div>
                                <div>
                                    <div class="flex gap-2">
                                        <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
                                    </div>
                                    <div class="mt-12">
                                        <router-link :to="product.route">
                                            <button type="button" id="hs-as-table-table-export-dropdown"
                                                class="absolute bottom-2 right-2 float-right">
                                                <i class="fa-solid fa-bag-shopping" style="color: #614BC3"></i>
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

export default {
    name: 'FeaturedProducts',

    data() {
        return {
            men: [
                { title: 'Super Jacket', price: '82.75', img: "https://justfields.com/storage/projects/7M5rV059/2-item-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Vintage Jean', price: '18.75', img: "https://justfields.com/storage/projects/7M5rV059/3-item-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Blue Jean', price: '40.82', img: "https://justfields.com/storage/projects/7M5rV059/4-item-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Denim Pullover', price: '42.75', img: "https://justfields.com/storage/projects/7M5rV059/1-item-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Black T-Shirt', price: '22.75', img: "https://justfields.com/storage/projects/7M5rV059/5-item-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Black Jacket', price: '92.75', img: "https://justfields.com/storage/projects/7M5rV059/jacket01.jpg", heartColor: "white", route: '/products' },
            ],
            women: [
                { title: 'Red Strip Dress', price: '97.75', img: "https://justfields.com/storage/projects/7M5rV059/6-item-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Blue Denim', price: '49.75', img: "https://justfields.com/storage/projects/7M5rV059/7-item-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Black Dress', price: '40.82', img: "https://justfields.com/storage/projects/7M5rV059/8-item-a.jpg", heartColor: "white", route: '/products' },
                { title: 'White T-Shirt', price: '22.45', img: "https://justfields.com/storage/projects/7M5rV059/9-item-a.jpg", heartColor: "white", route: '/products' },
                { title: 'White Jacket', price: '92.75', img: "https://justfields.com/storage/projects/7M5rV059/jacket02.jpg", heartColor: "white", route: '/products' },
                { title: 'Hand Bag', price: '32.75', img: "https://justfields.com/storage/projects/7M5rV059/bags01.jpg", heartColor: "white", route: '/products' },
            ],
            gadgets: [
                { title: 'Wired Headphone', price: '125.75', img: "https://justfields.com/storage/projects/7M5rV059/g-1-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Black Smartphone', price: '875.55', img: "https://justfields.com/storage/projects/7M5rV059/g-2-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Analog Watch', price: '375.82', img: "https://justfields.com/storage/projects/7M5rV059/g-3-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Digital Watch', price: '567.45', img: "https://justfields.com/storage/projects/7M5rV059/g-4-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Circular Speaker', price: '985.22', img: "https://justfields.com/storage/projects/7M5rV059/g-7-a.jpg", heartColor: "white", route: '/products' },
            ],
            accessories: [
                { title: 'Men Belts', price: '38.31', img: "https://justfields.com/storage/projects/7M5rV059/a-2-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Steal Chain', price: '52.55', img: "https://justfields.com/storage/projects/7M5rV059/a-3-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Circular Speaker', price: '985.22', img: "https://justfields.com/storage/projects/7M5rV059/g-7-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Men Purse', price: '19.45', img: "https://justfields.com/storage/projects/7M5rV059/a-4-a.jpg", heartColor: "white", route: '/products' },
                { title: 'Summer Goggles ', price: '35.22', img: "https://justfields.com/storage/projects/7M5rV059/a-5-a.jpg", heartColor: "white", route: '/products' },
            ],
        }
    },

    methods: {
        toggleHeartColor(index) {
            this.men[index].heartColor = this.men[index].heartColor === "white" ? "#D71313" : "white";
            this.women[index].heartColor = this.women[index].heartColor === "white" ? "#D71313" : "white";
            this.gadgets[index].heartColor = this.gadgets[index].heartColor === "white" ? "#D71313" : "white";
            this.accessories[index].heartColor = this.accessories[index].heartColor === "white" ? "#D71313" : "white";
        },
    },

    setup() {
        onMounted(() => {
            initFlowbite();
        });
    }
}
</script>