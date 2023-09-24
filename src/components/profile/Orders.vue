<template>
    <div class="max-w-full mx-auto">
        <div class="flex flex-col">
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" class="p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-all" type="checkbox"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        </div>
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400">
                                        {{ $t('order_summary.image') }}
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400">
                                        {{ $t('order_summary.product') }}
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400">
                                        {{ $t('order_summary.date') }}
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400">
                                        {{ $t('order_summary.payment_method') }}
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400">
                                        {{ $t('products.price') }}
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400">
                                        {{ $t('order_summary.status') }}
                                    </th>
                                    <th scope="col" class="p-4" />
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                v-for="item in userOrders" :key="item">
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" v-for="prod in item.cartItems"
                                    :key="prod">
                                    <td class="p-4 w-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img :src="prod.imgFront" class="h-12 w-12">
                                    </td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ prod.title }}</td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        {{ new Date(prod.date).toLocaleDateString() }}</td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ prod.paymentMethod }}</td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        ${{ prod.price }}</td>
                                    <td
                                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <span
                                            class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">{{ $t('order_summary.processing') }}</span>
                                    </td>
                                    <td class="py-4 px-16 text-sm font-medium text-end whitespace-nowrap">
                                        <router-link to="/order-summary"
                                            class="text-blue-600 dark:text-blue-500 hover:underline">
                                            <i class="fa-solid fa-eye fa-lg" data-tooltip-target="tooltip-right"
                                                data-tooltip-placement="right"></i>
                                            <div id="tooltip-right" role="tooltip"
                                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                                Order Summary
                                                <div class="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
    name: 'Orders',

    data() {
        return {
            date: Date.now(),
            orders: [],
            price: 0,
            ordersQty: 0,
            total: 0,
            userOrders: [],
            allOrders: [],
            userId: sessionStorage.getItem('userId')
        }
    },

    methods: {
        calculateTotal() {
            let total = 0;
            this.orders.forEach((item) => {
                total += item.price * item.ordersQty;
            });
            this.total = total.toFixed(2);
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

    mounted() {
        this.getOrders();
    },
}
</script>