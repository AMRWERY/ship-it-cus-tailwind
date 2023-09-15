<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <section class="text-gray-600 body-font overflow-hidden">
            <h2 class="text-lg title-font text-gray-500 tracking-widest text-center mb-6">Deal of the day</h2>
            <div class="container px-5 py-12 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap" v-if="todayDeal">
                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        :src="todayDeal.productImg">
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <div class="flex justify-between text-base font-medium text-gray-900">
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ todayDeal.title }}</h1>
                            <div class="flex gap-2 mt-2">
                                <p class="text-md font-medium text-gray-500 line-through">${{ todayDeal.originalPrice }}</p>
                                <p class="text-md font-medium text-gray-900">${{ todayDeal.price }}</p>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span class="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a class="text-gray-500 mr-2">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a class="text-gray-500 mr-2">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                                <a class="text-gray-500">
                                    <i class="fa-regular fa-comment"></i>
                                </a>
                            </span>
                        </div>
                        <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
                            taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage
                            brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle
                            pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div class="flex ml-6 items-center">
                                <div class="flex space-x-4">
                                    <div class="flex items-center">
                                        <span class="text-4xl text-orange-400">{{ hours }}</span>
                                        <p class="ml-1 text-sm">hours</p>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-4xl text-orange-400">{{ minutes }}</span>
                                        <p class="ml-1 text-sm">minutes</p>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="text-4xl text-orange-400">{{ seconds }}</span>
                                        <p class="ml-1 text-sm">seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <router-link to="/products">
                                <button
                                    class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Shop
                                    Now</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'

const hours = ref('')
const minutes = ref('')
const seconds = ref('')

const store = useStore()

store.dispatch('fetchDeals')

const todayDeal = computed(() => store.getters.getAllDeals[0]);

const todayDealExpired = computed(() => {
    if (todayDeal.value && todayDeal.value.endDate) {
        const now = new Date().getTime();
        const endDate = new Date(todayDeal.value.endDate).getTime();
        return endDate <= now;
    }
    return false;
});

const updateClock = () => {
    const now = new Date().getTime();
    const timeLeft = dealExpiry - now;

    if (timeLeft > 0) {
        hours.value = String(Math.floor(timeLeft / (1000 * 60 * 60))).padStart(2, '0');
        minutes.value = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        seconds.value = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');
    } else {
        clearInterval(timer);
        hours.value = '00';
        minutes.value = '00';
        seconds.value = '00';
    }
}

const calculateTimeRemaining = () => {
    const now = new Date().getTime();

    if (todayDeal.value && todayDeal.value.endDate) {
        const endDate = new Date(todayDeal.value.endDate).getTime();
        const timeLeft = endDate - now;

        if (timeLeft <= 0) {
            clearInterval(timer);
            return;
        }

        const hoursRemaining = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeLeft % (1000 * 60)) / 1000);

        hours.value = String(hoursRemaining).padStart(2, '0');
        minutes.value = String(minutesRemaining).padStart(2, '0');
        seconds.value = String(secondsRemaining).padStart(2, '0');
    }
};

calculateTimeRemaining();

const timer = setInterval(calculateTimeRemaining, 1000);

onMounted(() => {
    calculateTimeRemaining();
});
</script>

<!-- <script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'TodayDeals',

    data() {
        return {
            hours: '',
            minutes: '',
            seconds: '',
        };
    },

    methods: {
        updateClock() {
            const now = new Date();
            this.hours = String(now.getHours()).padStart(2, '0');
            this.minutes = String(now.getMinutes()).padStart(2, '0');
            this.seconds = String(now.getSeconds()).padStart(2, '0');
        },
    },

    created() {
        this.timer = setInterval(this.updateClock, 1000);
        this.updateClock
    },

    beforeDestroy() {
        clearInterval(this.timer);
    },

    setup() {
        const store = useStore()
        store.dispatch('fetchDeals')
        const todayDeal = computed(() => store.getters.getAllDeals[0]);

        return {
            todayDeal
        }
    }
}
</script> -->