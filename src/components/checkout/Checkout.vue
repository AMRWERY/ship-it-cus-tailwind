<template>
    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
            <p class="text-xl font-medium dark:text-white">{{ $t('checkout.order_summary') }}</p>
            <p class="text-gray-400">{{ $t('checkout.check_your_items_and_select_a_suitable_shipping_method') }}</p>
            <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6" v-for="item in cart" :key="item">
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" :src="item.imgFront" />
                    <div class="flex w-full flex-col px-4 py-4">
                        <span class="font-semibold">{{ item.title }}</span>
                        <span class="float-right text-gray-400">{{ item.category }}</span>
                        <p class="text-lg font-bold">${{ item.price }}</p>
                        <p class="text-lg font-normal">
                            {{ $t('cart_wishlist.qty') }}: <span class="text-blue-700">{{ item.cartQty }}</span> {{
                                $t('checkout.piece') }}</p>
                    </div>
                </div>
            </div>

            <p class="mt-8 text-lg font-medium dark:text-white">{{ $t('checkout.shipping_methods') }}</p>
            <form class="mt-5 grid gap-6 grid-cols-2">
                <div class="relative dark:bg-zinc-100" @click="selectShipping('STANDARD')">
                    <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                    <span
                        class="peer-checked:border-gray-700 absolute end-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 dark:peer-checked:border-gray-200 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_1">
                        <p class="mt-2 font-semibold text-2xl text-blue-700">%10</p>
                        <div class="ms-5">
                            <span class="mt-2 font-semibold">{{ $t('checkout.standard_shipping') }}</span>
                            <p class="text-slate-500 text-sm leading-6">{{ $t('checkout.delivery') }}: 3-6 {{
                                $t('checkout.days') }}</p>
                        </div>
                    </label>
                </div>
                <div class="relative dark:bg-zinc-100" @click="selectShipping('EXPRESS')">
                    <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
                    <span
                        class="peer-checked:border-gray-700 absolute end-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 dark:peer-checked:border-gray-200 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_2">
                        <p class="mt-2 font-semibold text-2xl text-blue-700">%25</p>
                        <div class="ms-5">
                            <span class="mt-2 font-semibold">{{ $t('checkout.express_shipping') }}</span>
                            <p class="text-slate-500 text-sm leading-6">{{ $t('checkout.delivery') }}: 2-4 {{
                                $t('checkout.days') }}</p>
                        </div>
                    </label>
                </div>
            </form>

            <p class="mt-8 text-lg font-medium dark:text-white">{{ $t('checkout.payment_options') }}</p>
            <form class="mt-5 grid gap-4 grid-cols-2">
                <div class="relative dark:bg-zinc-100" @click="selectCard('CREDIT_CARD')">
                    <input class="peer hidden" id="radio_3" type="radio" name="radio" checked />
                    <span
                        class="peer-checked:border-gray-700 absolute end-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 dark:peer-checked:border-gray-200 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_3">
                        <img src="/cridetcard.svg">
                        <div class="ms-5">
                            <span class="mt-2 font-semibold">{{ $t('checkout.credit_card') }}</span>
                        </div>
                    </label>
                </div>
                <div class="relative dark:bg-zinc-100" @click="selectCard('PAYPAL')">
                    <input class="peer hidden" id="radio_4" type="radio" name="radio" checked />
                    <span
                        class="peer-checked:border-gray-700 absolute end-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 dark:peer-checked:border-gray-200 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_4">
                        <img src="/paypal-svgrepo-com.svg">
                        <div class="ms-5">
                            <span class="mt-2 font-semibold">{{ $t('checkout.paypal') }}</span>
                        </div>
                    </label>
                </div>
                <div class="relative dark:bg-zinc-100" @click="selectCard('CASH')">
                    <input class="peer hidden" id="radio_5" type="radio" name="radio" checked />
                    <span
                        class="peer-checked:border-gray-700 absolute end-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 dark:peer-checked:border-gray-200 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_5">
                        <img src="/cash.svg">
                        <div class="ms-5">
                            <span class="mt-2 font-semibold">{{ $t('checkout.cash_on_delivery') }}</span>
                        </div>
                    </label>
                </div>
            </form>
        </div>
        <div class="mt-10 px-4 pt-8 lg:mt-0">
            <p class="text-xl font-medium dark:text-white">{{ $t('checkout.payment_detail') }}</p>
            <p class="text-gray-400">{{ $t('checkout.complete_your_order_by_providing_your_payment_details') }}</p>
            <div class="">
                <label for="email" class="mt-4 mb-2 block text-sm font-medium dark:text-white">{{ $t('footer.email')
                }}</label>
                <div class="relative">
                    <input type="text" id="email" name="email"
                        class="w-full rounded-md border border-gray-200 px-4 py-3 ps-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        v-model="getUserEmail" />
                    <div class="pointer-events-none absolute inset-y-0 start-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                    </div>
                </div>
                <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium dark:text-white">{{
                    $t('checkout.card_holder')
                }}</label>
                <div class="relative">
                    <input type="text" id="card-holder" name="card-holder"
                        class="w-full rounded-md border border-gray-200 px-4 py-3 ps-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        :placeholder="$t('checkout.your_full_name_here')" />
                    <div class="pointer-events-none absolute inset-y-0 start-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                    </div>
                </div>
                <label for="card-no" class="mt-4 mb-2 block text-sm font-medium dark:text-white">{{
                    $t('checkout.card_details') }}</label>
                <div class="flex">
                    <div class="relative w-7/12 flex-shrink-0">
                        <input type="text" id="card-no" name="card-no"
                            class="w-full rounded-md border border-gray-200 px-2 py-3 ps-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="xxxx-xxxx-xxxx-xxxx" />
                        <div class="pointer-events-none absolute inset-y-0 start-0 inline-flex items-center px-3">
                            <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                <path
                                    d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                            </svg>
                        </div>
                    </div>
                    <input type="text" name="credit-expiry"
                        class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="MM/YY" />
                    <input type="text" name="credit-cvc"
                        class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="CVC" />
                </div>
                <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium dark:text-white">{{
                    $t('checkout.billing_address')
                }}</label>
                <div class="flex flex-col sm:flex-row">
                    <div class="relative flex-shrink-0 sm:w-7/12">
                        <input type="text" id="billing-address" name="billing-address"
                            class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            :placeholder="$t('checkout.street_address')" />
                    </div>
                    <input type="text" id="billing-address" name="billing-address" :placeholder="$t('checkout.city')"
                        class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                    <input type="text" name="billing-zip"
                        class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="ZIP" />
                </div>

                <!-- Total -->
                <div class="mt-6 border-t border-b py-2">
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900 dark:text-zinc-400">{{ $t('cart_wishlist.subtotal') }}
                        </p>
                        <p class="font-semibold text-gray-900 dark:text-zinc-400">${{ total }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900 dark:text-zinc-400">{{ $t('checkout.shipping') }}</p>
                        <p class="font-semibold text-gray-900 dark:text-zinc-400" v-if="shipping === 'STANDARD'">+ {{
                            STANDARD }}</p>
                        <p class="font-semibold text-gray-900 dark:text-zinc-400" v-if="shipping === 'EXPRESS'">+ {{ EXPRESS
                        }}</p>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900 dark:text-zinc-400">{{ $t('checkout.total') }}</p>
                    <p class="text-2xl font-semibold text-gray-90 dark:text-zinc-200">${{ total }}</p>
                </div>
            </div>
            <router-link to="/order-summary">
                <button class="mt-4 mb-8 w-full rounded-md  px-6 py-3 font-medium text-white bg-green-600"
                    @click="goToOrderSummary" v-if="card === 'CREDIT_CARD'">{{ $t('checkout.credit_card') }}</button>
            </router-link>
            <router-link to="/order-summary">
                <button class="mt-4 mb-8 w-full rounded-md px-6 py-3 font-medium text-white bg-red-600"
                    @click="goToOrderSummary" to="/order-summary" v-if="card === 'CASH'">{{ $t('checkout.cash_on_delivery')
                    }}</button>
            </router-link>
            <router-link to="/order-summary">
                <button class="mt-4 mb-8 w-full rounded-md px-6 py-3 font-medium text-white bg-blue-600"
                    @click="goToOrderSummary" to="/order-summary" v-if="card === 'PAYPAL'">{{ $t('checkout.paypal')
                    }}</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/config";

export default {
    name: "Checkout",

    data() {
        return {
            show: false,
            selectedCard: null,
            selectedShipping: null,
            card: 'CREDIT_CARD',
            shipping: '$10.00',
            STANDARD: '$10.00',
            EXPRESS: '$25.00',
            cart: [],
            price: 0,
            cartQty: 0,
            total: 0,
            totalItems: 0,
            totalAmount: 0,
            orderStatus: [],
        };
    },

    methods: {
        selectCard(card) {
            this.$store.commit('setSelectedCard', card);
            sessionStorage.setItem('selectedCard', JSON.stringify(card));
        },
        selectShipping(shipping) {
            this.$store.commit('setSelectedShipping', shipping)
        },
        async goToOrderSummary() {
            const colRef = collection(db, "orders");
            const dataObj = {
                cartItems: this.cart.map(item => ({ ...item, paymentMethod: this.card })),
                total: this.totalAmount,
                userId: JSON.parse(sessionStorage.getItem("cartData")).userId,
                orderDate: new Date(),
                status: this.orderStatus,
            };
            const docRef = await addDoc(colRef, dataObj);
            console.log("Document was created with ID:", docRef.id);
        },
        calculateTotal() {
            let subtotal = 0;
            this.cart.forEach((item) => {
                subtotal += item.price * item.cartQty;
            });
            let total = subtotal;
            if (this.shipping === 'STANDARD') {
                total += 10;
            } else if (this.shipping === 'EXPRESS') {
                total += 25;
            }
            this.total = total.toFixed(2);
        },

        async getStatus() {
            const querySnap = await getDocs(query(collection(db, "orderTracking")));

            querySnap.forEach((doc) => {
                let pro = {
                    id: doc.id,
                    ...doc.data(doc.id),
                };
                this.orderStatus.push(pro);
            });
        },
    },

    computed: {
        ...mapGetters(['getSelectedCard', 'getSelectedShipping', 'getUserEmail']),
    },

    watch: {
        getSelectedCard(newVal) {
            this.card = newVal;
        },
        getSelectedShipping(newVal) {
            this.shipping = newVal;
            this.calculateTotal();
        },
    },

    mounted() {
        if (sessionStorage.getItem("cartData")) {
            this.cart = JSON.parse(sessionStorage.getItem("cartData"))?.cartData;

            let cart = JSON.parse(sessionStorage.getItem("cartData"));
            if (cart) {
                this.totalItems = cart.length;
                this.$store.commit("cartItems", this.cart);
                this.$store.commit("cartItemsCount", this.cart.length);
                this.calculateTotal();
            }
        }

        this.getStatus();
    }
};
</script>