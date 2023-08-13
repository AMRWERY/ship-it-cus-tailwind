<template>
    <Search />
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl py-10 sm:py-8 lg:max-w-none lg:py-10">
            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <router-link v-for="product in products" :key="product.id" :to="product.route" class="group">
                    <div
                        class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg mb-4">
                        <img class="h-48 w-full object-cover object-center" :src="product.imageSrc" />
                        <div class="p-4">
                            <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{{ product.name }}</h2>
                            <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                                <Rating />
                            </p>
                            <div class="flex items-center">
                                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${{ product.price }}</p>
                                <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">${{
                                    product.originalPrice }}</p>
                                <p class="ml-auto text-base font-medium text-green-500">20% off</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="flex justify-center mt-4">
            <Pagination />
        </div>
    </div>
</template>

  
<script>
import Search from '../../reusable/Search.vue';
import Rating from '../../reusable/Rating.vue';
import Pagination from '../../reusable/Pagination.vue';

export default {
    name: 'Products',

    components: { Search, Rating, Pagination },

    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Earthen Bottle',
                    route: 'product/1',
                    price: '48.00',
                    originalPrice: '55.00',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
                },
                {
                    id: 2,
                    name: 'Nomad Tumbler',
                    route: 'product/1',
                    price: '48.00',
                    originalPrice: '55.00',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
                },
                {
                    id: 3,
                    name: 'Focus Paper Refill',
                    route: 'product/1',
                    price: '48.00',
                    originalPrice: '55.00',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
                },
                {
                    id: 4,
                    name: 'Machined Mechanical Pencil',
                    route: 'product/1',
                    price: '48.00',
                    originalPrice: '55.00',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
                },
            ]
        }
    }
}
</script>