<template>
    <div class="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div
            class="flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div
                    class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                    <div v-for="item in userOrders" :key="item"
                        class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                        <div v-for="prod in item.cartItems" :key="prod">
                            <div class="mb-5 flex justify-start item-start space-y-2 flex-col">
                                <h3 class="text-2xl dark:text-white font-semibold leading-7 lg:leading-9 text-gray-800">
                                    {{ $t('order_summary.order') }} <span class="text-blue-500">#{{ item.id }}</span>
                                </h3>
                                <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{{ new
                                    Date(date).toLocaleDateString() }}</p>
                            </div>
                            <div class="flex">
                                <div class="pb-4 md:pb-8 w-full md:w-40 me-16">
                                    <img class="w-full hidden md:block" :src="prod?.imgFront" />
                                    <img class="w-full md:hidden" :src="prod?.imgFront" />
                                </div>
                                <div
                                    class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                    <div class="w-full flex flex-col justify-start items-start space-y-2">
                                        <h3
                                            class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                            {{ prod?.title }}</h3>
                                        <div class="flex justify-start items-start flex-col space-y-2">
                                            <p class="text-sm dark:text-white leading-none text-gray-800">{{
                                                $t('order_summary.category') }}: <span class="text-red-500">{{
        prod?.categories }}</span></p>
                                            <p class="text-sm dark:text-white leading-none text-gray-800">{{
                                                $t('order_summary.status') }}: <span class="text-red-500">{{
        item?.status[0].name }}</span></p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between space-s-8 items-start w-full">
                                        <p class="text-base dark:text-white xl:text-lg leading-6">${{ prod?.price }}
                                            <span class="text-red-300 line-through"
                                                v-if="prod?.originalPrice !== null && prod?.originalPrice !== '' && prod?.originalPrice !== 0">${{
                                                    prod?.originalPrice }}</span>
                                        </p>
                                        <p class="text-base dark:text-white xl:text-lg font-normal leading-6 text-gray-800">
                                            {{ $t('cart_wishlist.qty') }}:
                                            {{ prod?.cartQty }}
                                        </p>
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
import { getDocs, query, collection } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
    name: 'OrderTracking',

    data() {
        return {
            date: Date.now(),
            orders: [],
            price: 0,
            userOrders: [],
            allOrders: [],
            userId: sessionStorage.getItem('userId')
        }
    },

    methods: {
        async getOrders() {
            const querySnap = await getDocs(query(collection(db, "orders")));

            querySnap.forEach((doc) => {
                let pro = {
                    id: doc.id,
                    ...doc.data(),
                };
                this.allOrders.push(pro);
            });
            this.userOrders = this.allOrders.filter((order) => order.userId == this.userId);
        },
    },

    mounted() {
        this.getOrders();
    },
}
</script>