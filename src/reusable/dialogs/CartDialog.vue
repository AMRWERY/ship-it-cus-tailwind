<template>
    <div class="relative">
        <span class="
          absolute
          top-0
          right-0
          -mt-2
          -mr-2
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-red-500
          h-4
          w-4
          text-white text-xs
        ">4</span>
        <button type="button" class="
          rounded-full
          p-1
          text-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-white
          focus:ring-offset-2
          focus:ring-offset-gray-800
        " @click="cartOpen = !cartOpen">
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
                    <div class="
                pointer-events-none
                fixed
                inset-y-0
                right-0
                flex
                max-w-full
                pl-10
              ">
                        <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
                            leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                <div class="
                      flex
                      h-full
                      flex-col
                      overflow-y-scroll
                      bg-white
                      shadow-xl
                    ">
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

                                        <div class="mt-8">
                                            <div class="flow-root">
                                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                    <li v-for="product in products" :key="product.id" class="flex py-6">
                                                        <div class="
                                  h-24
                                  w-24
                                  flex-shrink-0
                                  overflow-hidden
                                  rounded-md
                                  border border-gray-200
                                ">
                                                            <img :src="product.imageSrc"
                                                                class="h-full w-full object-cover object-center" />
                                                        </div>

                                                        <div class="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div class="
                                      flex
                                      justify-between
                                      text-base
                                      font-medium
                                      text-gray-900
                                    ">
                                                                    <h3>
                                                                        <router-link :to="product.route">{{
                                                                            product.name
                                                                        }}</router-link>
                                                                    </h3>
                                                                    <p class="ml-4">{{ product.price }}</p>
                                                                </div>
                                                                <p class="mt-1 text-sm text-gray-500">
                                                                    {{ product.color }}
                                                                </p>
                                                            </div>
                                                            <div class="
                                    flex flex-1
                                    items-end
                                    justify-between
                                    text-sm
                                  ">
                                                                <p class="text-gray-500">
                                                                    Qty {{ product.quantity }}
                                                                </p>

                                                                <div>
                                                                    <div class="flex items-center gap-1">
                                                                        <button type="button" class="
                                          w-10
                                          h-10
                                          leading-10
                                          text-gray-600
                                          transition
                                          hover:opacity-75
                                        ">
                                                                            &minus;
                                                                        </button>

                                                                        <input type="number" id="Quantity" value="1" class="
                                          h-10
                                          w-10
                                          rounded
                                          border-gray-200
                                          text-center
                                          [-moz-appearance:_textfield]
                                          sm:text-sm
                                          [&::-webkit-outer-spin-button]:m-0
                                          [&::-webkit-outer-spin-button]:appearance-none
                                          [&::-webkit-inner-spin-button]:m-0
                                          [&::-webkit-inner-spin-button]:appearance-none
                                        " />

                                                                        <button type="button" class="
                                          w-10
                                          h-10
                                          leading-10
                                          text-gray-600
                                          transition
                                          hover:opacity-75
                                        ">
                                                                            &plus;
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="flex justify-end mt-4">
                                                                <button type="button" class="
                                      font-medium
                                      text-indigo-600
                                      hover:text-indigo-500
                                    ">
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
                                        <div class="
                          flex
                          justify-between
                          text-base
                          font-medium
                          text-gray-900
                        ">
                                            <p>Subtotal</p>
                                            <p>$262.00</p>
                                        </div>
                                        <p class="mt-0.5 text-sm text-gray-500">
                                            Shipping and taxes calculated at checkout.
                                        </p>
                                        <div class="mt-6">
                                            <router-link to="" class="
                            flex
                            items-center
                            justify-center
                            rounded-md
                            border border-transparent
                            bg-indigo-600
                            px-6
                            py-3
                            text-base
                            font-medium
                            text-white
                            shadow-sm
                            hover:bg-indigo-700
                          ">Checkout</router-link>
                                        </div>
                                        <div class="
                          mt-6
                          flex
                          justify-center
                          text-center text-sm text-gray-500
                        ">
                                            <p>
                                                or
                                                <button type="button" class="
                              font-medium
                              text-indigo-600
                              hover:text-indigo-500
                            " @click="open = false">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
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
import { ref } from 'vue';
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        route: '',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        route: '',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    },
];

const open = ref(true);
const cartOpen = ref(false);
</script>