<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center justify-center" id="myTab"
                data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile"
                        type="button" role="tab" aria-controls="profile" aria-selected="false">My Details</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="orders-tab" data-tabs-target="#orders" type="button" role="tab" aria-controls="orders"
                        aria-selected="false">Orders</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="tracking-tab" data-tabs-target="#tracking" type="button" role="tab" aria-controls="tracking"
                        aria-selected="false">Order Tracking</button>
                </li>
            </ul>
        </div>

        <div id="myTabContent">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel"
                aria-labelledby="profile-tab">
                <ProfileDetails />
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="orders" role="tabpanel"
                aria-labelledby="orders-tab">
                <Orders />
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="tracking" role="tabpanel"
                aria-labelledby="tracking-tab">
                <OrderTracking />
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import ProfileDetails from './ProfileDetails.vue';
import Orders from './Orders.vue';
import OrderTracking from './OrderTracking.vue';

export default {
    name: 'Profile',

    components: { ProfileDetails, Orders, OrderTracking },

    setup() {
        onMounted(() => {
            initFlowbite();
        });
    }
}
</script>