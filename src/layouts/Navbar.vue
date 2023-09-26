<template>
    <Disclosure as="nav" class="bg-white dark:bg-cyan-900 text-black dark:text-white" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <i class="fa-solid fa-bars fa-xl" v-if="!open"></i>
                        <i class="fa-solid fa-xmark fa-xl" v-else></i>
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-s-4">
                                    <router-link v-for="item in navigation" :key="item.name" :to="item.route" :class="[
                                        $route.path === item.route
                                            ? 'bg-gray-600 text-white dark:text-white'
                                            : 'text-gray-500 hover:bg-gray-700 hover:text-white dark:text-white',
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
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-s-3">

                    <div v-if="isUserLoggedIn" class="flex space-s-3">
                        <WishlistDialog />

                        <CartDialog />
                    </div>

                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton
                                class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="absolute -inset-1.5" />
                                <i class="fa-solid fa-earth-africa fa-xl me-2"></i>
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                    @click="switchLanguage('ar')">
                                    <div class="inline-flex items-center">
                                        <img src="palestine-flag-circular.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                        {{ $t('lang.arabic') }}
                                    </div>
                                </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                    @click="switchLanguage('en')">
                                    <div class="inline-flex items-center">
                                        <img src="/en.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                        {{ $t('lang.english') }}
                                    </div>
                                </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                    @click="switchLanguage('ge')">
                                    <div class="inline-flex items-center">
                                        <img src="/ge.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                        {{ $t('lang.german') }}
                                    </div>
                                </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                    @click="switchLanguage('du')">
                                    <div class="inline-flex items-center">
                                        <img src="https://justfields.com/storage/projects/7M5rV059/ne.png"
                                            class="h-3.5 w-3.5 rounded-full me-2">
                                        {{ $t('lang.deutsch') }}
                                    </div>
                                </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                    @click="switchLanguage('it')">
                                    <div class="inline-flex items-center">
                                        <img src="/it.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                        {{ $t('lang.italian') }}
                                    </div>
                                </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                    @click="switchLanguage('fr')">
                                    <div class="inline-flex items-center">
                                        <img src="https://justfields.com/storage/projects/7M5rV059/fr.png"
                                            class="h-3.5 w-3.5 rounded-full me-2">
                                        {{ $t('lang.french') }}
                                    </div>
                                </a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>

                    <button type="button" @click="toggleTheme"
                        class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <i :class="theme === 'dark' ? 'fa-solid fa-sun fa-xl' : 'fa-solid fa-moon fa-xl'"></i>
                    </button>

                    <div v-if="isUserLoggedIn" class="space-s-3">
                        <router-link to="/profile">
                            <button type="button"
                                class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <i class="fa-solid fa-user fa-xl me-2"></i>
                            </button>
                        </router-link>
                        <router-link to="/mail">
                            <button type="button"
                                class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <i class="fa-solid fa-bell fa-xl ms-2"></i>
                            </button>
                        </router-link>
                        <router-link to="/login">
                            <button type="button" @click="logout"
                                class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <i class="fa-solid fa-right-from-bracket fa-xl"></i>
                            </button>
                        </router-link>
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
import { onMounted, watchEffect, ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue';
import WishlistDialog from '../reusable/dialogs/WishlistDialog.vue';
import CartDialog from '../reusable/dialogs/CartDialog.vue';

const { t } = useI18n();

const navigation = [
    { name: t('navbar.home'), route: '/', current: true },
    { name: t('navbar.products'), route: '/products', current: false },
    { name: t('navbar.categories'), route: '/categories', current: false },
    { name: t('navbar.Contact'), route: '/contact', current: false },
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
    const userToken = sessionStorage.getItem("userToken");
    isUserLoggedIn.value = userToken !== null && userToken !== undefined;
});

const userToken = ref(null);

watchEffect(userToken, () => {
    isUserLoggedIn.value = userToken.value !== null && userToken.value !== undefined;
});

const switchLanguage = (newLang) => {
    sessionStorage.setItem('currentLang', newLang);
    $i18n.locale.value = newLang;
    updateLanguageClassInBody(newLang);
};

const updateLanguageClassInBody = (lang) => {
    const body = document.querySelector("body");
    if (lang === "ar") {
        body.classList.remove("ltr");
        body.classList.add("rtl");
    } else {
        body.classList.remove("rtl");
        body.classList.add("ltr");
    }
};

const $i18n = useI18n()

const currentLang = computed(() => $i18n.locale.value);

watch(currentLang, (newLang) => {
    debugger
    sessionStorage.setItem("currentLang", newLang);
    updateLanguageClassInBody(newLang);
});

onMounted(() => {
    updateLanguageClassInBody(currentLang.value);
});

const theme = ref('light');

const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    sessionStorage.setItem('theme', theme.value);
    updateThemeClasses(theme.value);
};

const updateThemeClasses = (newTheme) => {
    const body = document.querySelector('body');
    if (newTheme === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
};

updateThemeClasses(sessionStorage.getItem('theme') || 'light');
</script>