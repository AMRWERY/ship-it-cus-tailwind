<template>
    <div class="px-6 py-4 md:flex md:justify-center md:items-center dark:border-gray-700">
        <div class="w-full md:w-3/4 lg:w-2/3">
            <label for="hs-as-table-product-review-search" class="sr-only">Search</label>
            <div class="relative">
                <input type="text" id="hs-as-table-product-review-search" name="hs-as-table-product-review-search"
                    class="py-2 px-3 pl-11 w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="What are you looking for?" />
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>