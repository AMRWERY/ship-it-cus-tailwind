<template>
    <div class="relative">
        <span
            class="absolute top-0 right-0 -mt-2 -mr-2 inline-flex items-center justify-center rounded-full bg-red-500 h-4 w-4 text-white text-xs">
            {{ totalItems }}
        </span>
        <button type="button"
            class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            @click="cartOpen = !cartOpen">
            <i class="fa-solid fa-cart-shopping fa-xl"></i>
        </button>
    </div>

    <TransitionRoot as="template" :show="cartOpen">
        <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
                            leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <DialogTitle class="text-lg font-medium text-gray-900">Shopping Cart
                                            </DialogTitle>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    @click="cartOpen = false">
                                                    <i class="fa-solid fa-xmark fa-xl"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="mt-8 flex items-center justify-center" v-if="cart.length === 0">
                                            <p class="text-center text-gray-500">Your cart is empty.</p>
                                        </div>

                                        <div class="mt-8" v-else>
                                            <div class="flow-root">
                                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                    <li v-for="item in cart" :key="item" class="flex py-6">
                                                        <div
                                                            class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img :src="item.imgFront"
                                                                class="h-full w-full object-cover object-center" />
                                                        </div>

                                                        <div class="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div
                                                                    class="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        {{ item.title }}
                                                                    </h3>
                                                                    <p class="ml-4">${{ item.price }}</p>
                                                                </div>
                                                                <p class="mt-1 text-sm text-gray-500">
                                                                    {{ item.categories }}
                                                                </p>
                                                            </div>
                                                            <div class="flex flex-1 items-end justify-between text-sm">
                                                                <p class="text-gray-500">
                                                                    Qty {{ item.cartQty }}
                                                                </p>

                                                                <div>
                                                                    <div class="flex items-center gap-1">
                                                                        <button type="button" @click="decrement(item)"
                                                                            class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
                                                                            &minus;
                                                                        </button>

                                                                        <input type="number" id="Quantity"
                                                                            :value="item.cartQty"
                                                                            class="h-10 w-10 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />


                                                                        <button type="button" @click="increment(item)"
                                                                            class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
                                                                            &plus;
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="flex justify-end mt-4">
                                                                <button type="button" @click="removeCartItem(item)"
                                                                    class="font-medium text-red-600 hover:text-indigo-500 mr-6">
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div class="mt-8" v-if="cart.length === 0" />

                                        <div v-else>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>${{ totalAmount }}</p>
                                            </div>
                                            <p class="mt-0.5 text-sm text-gray-500">
                                                Shipping and taxes calculated at checkout.
                                            </p>
                                        </div>

                                        <div class="mt-8" v-if="cart.length === 0">
                                            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <router-link to="/products">
                                                    <button type="button"
                                                        class="font-medium text-indigo-600 hover:text-indigo-500"
                                                        @click="cartOpen = false">
                                                        Start Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </router-link>
                                            </div>
                                        </div>

                                        <div v-else>
                                            <div class="mt-6">
                                                <router-link to="/checkout"
                                                    class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</router-link>
                                            </div>
                                            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    or
                                                    <router-link to="/products">
                                                        <button type="button"
                                                            class="font-medium text-indigo-600 hover:text-indigo-500"
                                                            @click="cartOpen = false">
                                                            Continue Shopping
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </router-link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>


<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue';

const open = ref(true);
const cartOpen = ref(false);
const cart = ref([]);
const total = ref(0);
const totalItems = ref(0);
const userId = ref('');
const store = useStore();

const totalAmount = computed(() => {
    let totalValue = 0;
    cart.value.forEach((item) => {
        totalValue += item.price * item.cartQty;
    });
    return totalValue.toFixed(2);
});

const totalItemsInCart = computed(() => {
    return store.getters.totalItemsInCart;
});

watch(totalItemsInCart, (newVal, oldVal) => {
    totalItems.value = newVal;
});

onMounted(() => {
    const storedCartData = JSON.parse(sessionStorage.getItem("cartData"));
    if (storedCartData) {
        cart.value = storedCartData.cartData;
        userId.value = storedCartData.userId;
        store.commit("cartItemsCount", cart.value.length);
        totalAmount.value = calculateTotal();
    }
});

const increment = (item) => {
    item.cartQty++;
    calculateTotal();
};

const decrement = (item) => {
    if (item.cartQty > 0) {
        item.cartQty--;
        if (item.cartQty === 0) {
            removeCartItem(item);
        } else {
            calculateTotal();
        }
    }
};

watch(() => store.getters.totalItemsAmount, (newVal) => {
    cart.value = newVal;
    totalItems.value = calculateTotal();
});

const calculateTotal = () => {
    let total = 0;
    cart.value.forEach((item) => {
        total += item.cartQty;
    });
    return total;
};

const removeCartItem = (item) => {
    const index = cart.value.indexOf(item);
    if (index !== -1) {
        cart.value.splice(index, 1);
        let obj = {
            userId: userId.value,
            cartData: cart.value
        }
        calculateTotal();
        store.commit("cartItemsCount", cart.value.length);
        sessionStorage.setItem("cartData", JSON.stringify(obj));
    }
};
</script>