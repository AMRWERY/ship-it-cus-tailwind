<template>
    <div class="bg-white">
        <div>
            <!-- Mobile filter dialog -->
            <TransitionRoot as="template" :show="mobileFiltersOpen">
                <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
                    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                        enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                        leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black bg-opacity-25" />
                    </TransitionChild>

                    <div class="fixed inset-0 z-40 flex">
                        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                            leave-to="translate-x-full">
                            <DialogPanel
                                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div class="flex items-center justify-between px-4">
                                    <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                    <button type="button"
                                        class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        @click="mobileFiltersOpen = false">
                                        <span class="sr-only">Close menu</span>
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                <!-- Filters -->
                                <form class="mt-4 border-t border-gray-200">

                                    <Disclosure as="div" v-for="section in filters" :key="section.id"
                                        class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                                        <h3 class="-mx-2 -my-3 flow-root">
                                            <DisclosureButton
                                                class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span class="font-medium text-gray-900">{{ section.name }}</span>
                                                <span class="ml-6 flex items-center">
                                                    <div v-if="!open" class="h-5 w-5" aria-hidden="true">
                                                        <i class="fa-solid fa-plus"></i>
                                                    </div>
                                                    <div v-else class="h-5 w-5" aria-hidden="true">
                                                        <i class="fa-solid fa-minus"></i>
                                                    </div>
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel class="pt-6">
                                            <div class="space-y-6">
                                                <div v-for="(option, optionIdx) in section.options" :key="option.value"
                                                    class="flex items-center">
                                                    <input :id="`filter-mobile-${section.id}-${optionIdx}`"
                                                        :name="`${section.id}[]`" :value="option.value" type="checkbox"
                                                        :checked="option.checked"
                                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label :for="`filter-mobile-${section.id}-${optionIdx}`"
                                                        class="ml-3 min-w-0 flex-1 text-gray-500">{{ option.label }}</label>
                                                </div>
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </TransitionRoot>

            <main class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                <div class="flex items-baseline justify-between pb-6 pt-12">
                    <div class="flex items-center">
                        <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            @click="mobileFiltersOpen = true">
                            <span class="sr-only">Filters</span>
                            <div class="h-5 w-5">
                                <i class="fa-solid fa-filter"></i>
                            </div>
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" class="pb-24">
                    <h2 id="products-heading" class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        <!-- Filters -->
                        <form class="hidden lg:block">

                            <Disclosure as="div" v-for="section in filters" :key="section.id"
                                class="border-b border-gray-200 py-6" v-slot="{ open }">
                                <h3 class="-my-3 flow-root">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                        <span class="font-medium text-gray-900">{{ section.name }}</span>
                                        <span class="ml-6 flex items-center">
                                            <div v-if="!open" class="h-5 w-5" aria-hidden="true">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                            <div v-else class="h-5 w-5" aria-hidden="true">
                                                <i class="fa-solid fa-minus"></i>
                                            </div>
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <div v-for="(option, optionIdx) in section.options" :key="option.value"
                                            class="flex items-center">
                                            <input :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                                                :value="option.value" type="checkbox" :checked="option.checked"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                            <label :for="`filter-${section.id}-${optionIdx}`"
                                                class="ml-3 text-sm text-gray-600">{{ option.label }}</label>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                        </form>

                        <!-- Product grid -->
                        <div class="lg:col-span-3">
                            <!-- Your content -->
                            <Products />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>
  
<script setup>
import Products from './Products.vue'
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

const filters = [
    {
        id: 'categories',
        name: 'Categories',
        options: [
            { value: 'hoodies', label: 'Hoodies', checked: false },
            { value: 't-shirts', label: 'T-Shirts', checked: false },
            { value: 'music', label: 'Music', checked: true },
            { value: 'accessories', label: 'Accessories', checked: false },
            { value: 'posters', label: 'Posters', checked: false },
            { value: 'decor', label: 'Decor', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'small', label: 'Small', checked: false },
            { value: 'medium', label: 'Medium', checked: false },
            { value: 'large', label: 'Large', checked: false },
            { value: 'xl', label: 'XL', checked: false },
            { value: 'xxl', label: 'XXL', checked: true },
        ],
    },
    {
        id: 'availability',
        name: 'Availability',
        options: [
            { value: 'in stock', label: 'In Stock', checked: true },
            { value: 'out of stock', label: 'Out of Stock', checked: false },
        ],
    },
]

const mobileFiltersOpen = ref(false)
</script>