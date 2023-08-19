<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-lg font-semibold md:text-2xl">You May Also Like</h2>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="card in cards" :key="card" class="group relative">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="card.img" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
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
                                        v-if="card.originalPrice != null">${{ card.originalPrice }}</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-sm font-medium text-green-500" v-if="card.discount != null">{{ card.discount }} off
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MightLike',

    data() {
        return {
            discount: null,
            originalPrice: null,
            cards: [
                { price: '15.00', img: 'https://justfields.com/storage/projects/7M5rV059/cap-2.jpg' },
                { price: '15.00', img: 'https://justfields.com/storage/projects/7M5rV059/hoodie-2.webp' },
                { price: '15.00', originalPrice: '20.00', discount: '20%', img: 'https://justfields.com/storage/projects/7M5rV059/poster_2_up.jpg' },
                { price: '35.00', originalPrice: '42.00', discount: '17%', img: 'https://justfields.com/storage/projects/7M5rV059/T_1_front.webp' },
                { price: '15.00', img: 'https://justfields.com/storage/projects/7M5rV059/sunglasses-2.jpg' },
                { price: '55.00', originalPrice: '65.00', discount: '19%', img: 'https://justfields.com/storage/projects/7M5rV059/hoodie_6_front.webp' },
            ]
        }
    }
}
</script>