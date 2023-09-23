<template>
    <div class="py-12 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">{{
                $t('banner.trusted_by_the_world’s_most_innovative_teams') }}</h2>
            <div
                class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" v-for="brand in logo" :key="brand"
                    :src="brand.img" width="158" height="48" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Logo',

    data() {
        return {
            logo: [
                { img: 'https://justfields.com/storage/projects/7M5rV059/chaka.png' },
                { img: 'https://justfields.com/storage/projects/7M5rV059/orange.png' },
                { img: 'https://justfields.com/storage/projects/7M5rV059/weber.png' },
                { img: 'https://justfields.com/storage/projects/7M5rV059/singer.png' },
                { img: 'https://justfields.com/storage/projects/7M5rV059/daelmans.png' },
            ]
        }
    }
}
</script>