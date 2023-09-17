<template>
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto overflow-y-hidden dark:bg-gray-900">
        <div
            class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div
                    class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                    <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                        Customer’s Cart</p>
                    <div v-for="item in userOrders" :key="item"
                        class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                        <div v-for="prod in item.cartItems" :key="prod">
                            <div class="mb-5 flex justify-start item-start space-y-2 flex-col">
                                <h3 class="text-2xl dark:text-white font-semibold leading-7 lg:leading-9 text-gray-800">
                                    Order <span class="text-blue-500">#{{ item.id }}</span>
                                </h3>
                                <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{{ new
                                    Date(date).toLocaleDateString() }}</p>
                            </div>
                            <div class="flex">
                                <div class="pb-4 md:pb-8 w-full md:w-40 mr-16">
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
                                            <p class="text-sm dark:text-white leading-none text-gray-800">Category: <span
                                                    class="text-red-500">{{ prod?.categories }}</span></p>
                                            <p class="text-sm dark:text-white leading-none text-gray-800">Status: <span
                                                    class="text-red-500">{{ item?.status[0].name }}</span></p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between space-x-8 items-start w-full">
                                        <p class="text-base dark:text-white xl:text-lg leading-6">${{ prod?.price }}
                                            <span class="text-red-300 line-through"
                                                v-if="prod?.originalPrice !== null && prod?.originalPrice !== '' && prod?.originalPrice !== 0">${{
                                                    prod?.originalPrice }}</span>
                                        </p>
                                        <p class="text-base dark:text-white xl:text-lg font-normal leading-6 text-gray-800">
                                            Qty:
                                            {{ prod?.cartQty }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                    <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                        <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                        <div
                            class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                            <div class="flex justify-between w-full">
                                <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${{ subtotal }}</p>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white leading-4 text-gray-800">Tax <span
                                        class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span>
                                </p>
                                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${{ tax }}</p>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{{ shipping }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full">
                            <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                            <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${{ total }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                <div
                    class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                    <div class="flex flex-col justify-start items-start flex-shrink-0">
                        <div
                            class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                            <div class="flex justify-start items-start flex-col space-y-2">
                                <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">{{
                                    getUsername }}
                                </p>
                                <p class="text-sm dark:text-gray-300 leading-5 text-gray-600">10 Previous Orders</p>
                            </div>
                        </div>

                        <div
                            class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                            <p class="cursor-pointer text-sm leading-5">{{ getUserEmail }}</p>
                        </div>
                    </div>
                    <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                        <div
                            class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                            <div
                                class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                <p
                                    class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                                    Shipping Address</p>
                                <p
                                    class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                    180 North King Street, Northhampton MA 1060</p>
                            </div>
                            <div
                                class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                <p
                                    class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                                    Billing Address</p>
                                <p
                                    class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                    180 North King Street, Northhampton MA 1060</p>
                            </div>
                        </div>
                        <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                            <router-link to="/profile">
                                <button
                                    class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit
                                    Details</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from "vuex";
import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export default {
    name: 'OrderSummary',

    data() {
        return {
            cart: [],
            cartQty: 0,
            price: 0,
            total: 0,
            totalItems: 0,
            shipping: '$10.00',
            STANDARD: '$10.00',
            EXPRESS: '$25.00',
            selectedCard: null,
            date: Date.now(),
            userOrders: [],
            allOrders: [],
            userId: sessionStorage.getItem('userId')
        }
    },

    methods: {
        selectCard(card) {
            this.$store.commit('setSelectedCard', card);
        },
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

    computed: {
        ...mapGetters(["getUsername", "getUserEmail"]),
        subtotal() {
            let subtotal = 0;
            this.userOrders.forEach((order) => {
                order.cartItems.forEach((item) => {
                    subtotal += item.price * item.cartQty;
                });
            });
            return subtotal.toFixed(2);
        },
        tax() {
            const subtotal = parseFloat(this.subtotal);
            return (subtotal * 0.15).toFixed(2);
        },
        total() {
            const subtotal = parseFloat(this.subtotal);
            const tax = parseFloat(this.tax);
            const shippingCost = parseFloat(this.shipping.replace("$", ""));
            const totalWithShipping = subtotal + tax + shippingCost;
            return totalWithShipping.toFixed(2);
        },
    },

    mounted() {
        const username = sessionStorage.getItem("username");
        this.$store.commit("setUsername", username);

        const email = sessionStorage.getItem("email");
        this.$store.commit("setUserEmail", email);

        this.getOrders()

        const selectedCard = JSON.parse(sessionStorage.getItem('selectedCard'));
        if (selectedCard) {
            this.selectedCard = selectedCard;
        }
    },
}
</script>