<template>
    <div class="relative">
        <span
            class="absolute top-0 right-0 -mt-2 -mr-2 inline-flex items-center justify-center rounded-full bg-red-500 h-4 w-4 text-white text-xs">{{
                        totalItems }}</span>
        <button type="button"
            class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            @click="OpenDialog(true)">
            <i class="fa-solid fa-heart fa-xl"></i>
        </button>
    </div>

    <TransitionRoot as="template" id="wishlistDialog" :show="cartOpen" v-if="cartOpen === true">
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
                                            <DialogTitle class="text-lg font-medium text-gray-900">Wishlist</DialogTitle>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    @click="cartOpen = false">
                                                    <i class="fa-solid fa-xmark fa-xl"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="mt-8 flex items-center justify-center" v-if="wishlist.length === 0">
                                            <p class="text-center text-gray-500">Your wishlist is empty.</p>
                                        </div>

                                        <div class="mt-8" v-else>
                                            <div class="flow-root">
                                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                    <li v-for="item in wishlist" :key="item" class="flex py-6">
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
                                                            </div>
                                                            <div class="flex flex-1 items-end justify-between text-sm">
                                                                <p class="text-gray-500">
                                                                    {{ item.categories }}
                                                                </p>

                                                                <div class="mt-4">
                                                                    <div class="flex items-center gap-1">
                                                                        <button type="button" @click="addToCart(item)"
                                                                            class="font-medium text-indigo-600 hover:text-indigo-500">
                                                                            Add to Cart
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="flex justify-end mt-4">
                                                                <button type="button" @click="removeItemFromWishlist(item)"
                                                                    class="font-medium text-red-600 hover:text-indigo-500">
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
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
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { useStore } from 'vuex';
import { ref, onMounted, watch, computed } from 'vue';

const wishlist = ref([]);
const img = ref("");
const totalItems = ref(0);
const cart = ref([]);
const store = useStore();

const addToCart = () => {
    for (const item of wishlist.value) {
        let index = cart.value.indexOf(item);

        if (index !== -1) {
            cart.value[index].cartQty += 1;
            cart.value[index].totalPrice = cart.value[index].cartQty * cart.value[index].price;
        } else {
            const product = { ...item };
            product.cartQty = 1;
            product.totalPrice = product.cartQty * product.price;
            cart.value.push(product);
        }
    }
    wishlist.value = [];
    // sessionStorage.setItem("cartData", JSON.stringify(cart.value));
    sessionStorage.setItem("wishListData", JSON.stringify(wishlist.value));
    store.commit("cartItemsCount", cart.value.length);
    store.commit("wishlistItems", wishlist.value);
    store.commit("wishlistItemsCount", wishlist.value.length);
};

const removeItemFromWishlist = (item) => {
    const index = wishlist.value.indexOf(item);

    if (index !== -1) {
        wishlist.value.splice(index, 1);
        store.commit('wishlistItems', wishlist.value);
        store.commit('wishlistItemsCount', wishlist.value.length);
        sessionStorage.setItem('wishListData', JSON.stringify(wishlist.value));
    }
};

const totalItemsInWishlist = computed(() => {
    return store.getters.totalItemsInWishlist;
});

watch(totalItemsInWishlist, (newVal, oldVal) => {
    totalItems.value = newVal;
});

watch(wishlist, (newVal, oldVal) => {
    wishlist.value = newVal
    totalItems.value = wishlist.value.length
});

onMounted(() => {
    OpenDialog()
});

const open = ref(true);
const cartOpen = ref(false);

const OpenDialog = (isClicked = false) => {
    if (isClicked) {
        cartOpen.value = true
    }

    if (sessionStorage.getItem("wishListData")) {
        wishlist.value = JSON.parse(sessionStorage.getItem("wishListData"));

        if (wishlist.value.length) {
            totalItems.value = wishlist.value.length;
            store.commit("wishlistItems", wishlist.value);
            store.commit("wishlistItemsCount", wishlist.value.length);
        }
    }
}
</script>