<template>
    <Disclosure as="nav" class="bg-white text-black" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <i class="fa-solid fa-bars fa-xl" v-if="!open"></i>
                        <i class="fa-solid fa-xmark fa-xl" v-else></i>
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    <router-link v-for="item in navigation" :key="item.name" :to="item.route" :class="[
                                        $route.path === item.route
                                            ? 'bg-gray-600 text-white'
                                            : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium',
                                    ]" :aria-current="$route.path === item.route ? 'page' : undefined" exact>
                                        {{ item.name }}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
                    <WishlistDialog />

                    <CartDialog />

                    <button type="button"
                        class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <i class="fa-solid fa-sun fa-xl"></i>
                    </button>

                    <!-- don't delete it -->

                    <!-- <button
              type="button"
              class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
            <i class="fa-solid fa-moon fa-xl"></i>
            </button> -->


                    <div v-if="isUserLoggedIn">
                        <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal"
                            class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            type="button">
                            <i class="fa-solid fa-caret-down fa-2xl"></i>
                        </button>

                        <!-- Dropdown menu -->
                        <div id="dropdownDotsHorizontal"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 text-center"
                                aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <router-link to=""
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</router-link>
                                </li>
                                <li>
                                    <router-link to="/profile"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</router-link>
                                </li>
                            </ul>
                            <div class="py-2 text-center" @click="logout">
                                <router-link to="/login"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</router-link>
                            </div>
                        </div>
                    </div>

                    <div v-if="!isUserLoggedIn">
                        <router-link to="/login">
                            <button type="submit"
                                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.route" :class="[
                    $route.path === item.route
                        ? 'bg-gray-600 text-white'
                        : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-sm font-medium',
                ]" :aria-current="$route.path === item.route ? 'page' : undefined" exact>{{ item.name }}
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>


<script setup>
import { onMounted, watchEffect, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { initDropdowns } from 'flowbite';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
} from '@headlessui/vue';
import WishlistDialog from '../reusable/dialogs/WishlistDialog.vue';
import CartDialog from '../reusable/dialogs/CartDialog.vue';

const navigation = [
    { name: 'Home', route: '/', current: true },
    { name: 'Products', route: '/products', current: false },
    { name: 'Categories', route: '/categories', current: false },
    { name: 'Contact', route: '/contact', current: false },
];

const store = useStore();

const logout = async () => {
    try {
        await store.dispatch('logout');
        store.commit('setIsAuthenticated', false);
        sessionStorage.removeItem("userToken");
        isUserLoggedIn.value = false;
    } catch (error) {
        console.log(error);
    }
}

const isUserLoggedIn = computed(() => store.state.auth.isUserLoggedIn);

store.dispatch('initAuthentication');

onMounted(() => {
    initDropdowns();
});

onMounted(() => {
    const userToken = sessionStorage.getItem("userToken");
    isUserLoggedIn.value = userToken !== null && userToken !== undefined;
});

const userToken = ref(null);

watchEffect(userToken, () => {
    isUserLoggedIn.value = userToken.value !== null && userToken.value !== undefined;
});
</script>