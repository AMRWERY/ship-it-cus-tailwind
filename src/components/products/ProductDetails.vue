<template>
    <!-- component -->
    <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                    src="https://justfields.com/storage/projects/7M5rV059/hoodie_2_front.jpg">
                <p class="text-base font-medium text-green-500 absolute m-3">
                    <span
                        class="inline-flex items-center rounded-md bg-red-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10">-20%</span>
                </p>
                <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                    <div class="flex items-start">
                        <button type="button"
                            class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center mr-3">
                            <img class="h-full w-full object-cover"
                                src="https://justfields.com/storage/projects/7M5rV059/hoodie_2_front.jpg" />
                        </button>
                        <button type="button"
                            class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center ml-2">
                            <img class="h-full w-full object-cover"
                                src="https://justfields.com/storage/projects/7M5rV059/hoodie_2_back.jpg" />
                        </button>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <div class="flex items-center">
                        <h2 class="text-md title-font text-gray-500 tracking-widest inline">SKU:</h2>
                        <h4 class="text-md title-font text-gray-500 tracking-widest inline ml-1">woo-beanie</h4>
                    </div>

                    <div class="flex items-center justify-between my-5">
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Beanie</h1>
                        <div class="flex items-center">
                            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$50.00</p>
                            <p class="text-lg font-medium text-gray-400 line-through dark:text-gray-300">$80.00</p>
                        </div>
                    </div>
                    <div class="flex items-center my-8">
                        <h2 class="text-md title-font text-gray-500 tracking-widest inline">Availability:</h2>
                        <h4 class="text-md title-font text-green-500 tracking-widest inline ml-1">In Stock</h4>
                    </div>
                    <div class="flex mb-4">

                        <Rating />
                    </div>
                    <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
                        taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
                        Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra
                        jean shorts keytar banjo tattooed umami cardigan.</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div class="flex flex-col items-center">
                            <div class="flex items-center my-10">
                                <input type="number" id="Quantity" value="1"
                                    class="h-10 w-10 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
                                <button
                                    class="ml-3 flex items-center justify-center text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded">
                                    Buy Now
                                </button>
                            </div>

                            <div class="flex items-center mt-2">
                                <h2 class="text-md title-font text-gray-500 tracking-widest">Categories:</h2>
                                <h4 class="text-md title-font text-gray-500 tracking-widest ml-1">Accessories</h4>
                            </div>
                        </div>

                    </div>
                    <div class="flex">
                        <button
                            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 mr-48">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <button
                            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                            @click="shareBtn">
                            <i class="fa-solid fa-share-nodes"></i>
                        </button>
                        <div v-if="showShareButtons" class="mt-2 ml-3">
                            <button
                                class="rounded-full w-7 h-7 bg-blue-600 text-white p-0 border-0 inline-flex items-center justify-center ml-4">
                                <i class="fa-brands fa-facebook-f"></i>
                            </button>
                            <button
                                class="rounded-full w-7 h-7 bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white p-0 border-0 inline-flex items-center justify-center ml-4">
                                <i class="fa-brands fa-instagram"></i>
                            </button>
                            <button
                                class="rounded-full w-7 h-7 bg-blue-400 text-white p-0 border-0 inline-flex items-center justify-center ml-4">
                                <i class="fa-brands fa-x-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <MightLike />
</template>
  
<script>
import Rating from '../../reusable/Rating.vue';
import MightLike from '../MightLike.vue';

export default {
    name: 'ProductDetails',

    components: { Rating, MightLike },

    data() {
        return {
            showShareButtons: false,
        }
    },

    methods: {
        shareBtn() {
            this.showShareButtons = !this.showShareButtons
        },
    }
};
</script>