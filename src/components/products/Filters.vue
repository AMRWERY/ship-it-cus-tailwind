<template>
    <div class="flex justify-center my-10">
        <div class="flex gap-8">
            <div class="relative">
                <details class="group" id="availabilityDetails">
                    <summary
                        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                        <span class="text-sm font-medium">Categories</span>

                        <span class="transition group-open:-rotate-180">
                            <i class="fa-solid fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                        <div class="w-44 rounded border border-gray-200 bg-white">

                            <ul class="space-y-1 border-t border-gray-200 p-4">
                                <li v-for="cat in categories" :key="cat">
                                    <label :for="cat" class="inline-flex items-center gap-2">
                                        <input type="checkbox" :id="cat" class="h-5 w-5 rounded border-gray-300"
                                            v-model="selectedCategories" :value="cat" />
                                        <span class="text-sm font-medium text-gray-700">{{ cat }}</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </details>
            </div>

            <div class="relative">
                <details class="group" id="priceDetails">
                    <summary
                        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                        <span class="text-sm font-medium">Size</span>

                        <span class="transition group-open:-rotate-180">
                            <i class="fa-solid fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                        <div class="w-44 rounded border border-gray-200 bg-white">

                            <ul class="space-y-1 border-t border-gray-200 p-4">
                                <li v-for="type in size" :key="type">
                                    <label :for="type" class="inline-flex items-center gap-2">
                                        <input type="checkbox" :id="type" class="h-5 w-5 rounded border-gray-300"
                                            v-model="selectedSize" :value="type" />

                                        <span class="text-sm font-medium text-gray-700">
                                            {{ type }}
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </details>
            </div>

            <div class="relative">
                <details class="group" id="priceDetails">
                    <summary
                        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                        <span class="text-sm font-medium">Availability</span>

                        <span class="transition group-open:-rotate-180">
                            <i class="fa-solid fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                        <div class="w-44 rounded border border-gray-200 bg-white">

                            <ul class="space-y-1 border-t border-gray-200 p-4">
                                <li v-for="type in availability" :key="type">
                                    <label :for="type" class="inline-flex items-center gap-2">
                                        <input type="checkbox" :id="type" class="h-5 w-5 rounded border-gray-300"
                                            v-model="selectedAvailability" :value="type" />

                                        <span class="text-sm font-medium text-gray-700">
                                            {{ type }}
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    name: 'Filters',

    setup(props, { emit }) {
        const categories = ['Hoodies', 'T-shirts', 'Music', 'Accessories', 'Posters', 'Decor', 'Clothing'];
        const selectedCategories = ref([]);
        const size = ['XXL', 'XL', 'Large', 'Medium', 'Small'];
        const selectedSize = ref([]);
        const availability = ['in stock', 'out of stock'];
        const selectedAvailability = ref([]);

        const updateFilter = () => {
            const filterOptions = {
                categories: selectedCategories.value,
                size: selectedSize.value,
                availability: selectedAvailability.value,
            };
            emit('apply-filters', filterOptions);
        };

        watch(selectedCategories, updateFilter);
        watch(selectedSize, updateFilter);
        watch(selectedAvailability, updateFilter);

        return {
            categories,
            selectedCategories,
            size,
            selectedSize,
            availability,
            selectedAvailability,
            updateFilter,
        };
    },
};
</script>