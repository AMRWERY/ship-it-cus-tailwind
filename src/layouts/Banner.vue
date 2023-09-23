<template>
    <section
        class="relative bg-[url(https://justfields.com/storage/projects/7M5rV059/cover.webp)] bg-cover bg-center bg-no-repeat">
        <div
            class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
        </div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 class="text-3xl font-extrabold sm:text-5xl">
                    {{ $t('banner.just_landed') }}
                    <strong class="block font-extrabold text-rose-700">
                        {{ $t('banner.the_autumn_collection') }}
                    </strong>
                </h1>
                <div class="mt-4 max-w-lg sm:text-xl/relaxed">
                    <p>{{ $t('banner.view_the_autumn_collection_and_discover_the_latest') }}</p>
                    <p>{{ $t('banner.trends_in_fashion_and_accessories_we_have_everything') }}</p>
                    <p>{{ $t('banner.you_need_to_look_your_best_this_season') }}</p>
                </div>
                <div class="mt-8 flex flex-wrap gap-4 text-center">
                    <router-link to="/products"
                        class="rounded-xl font-bold bg-gray-800 text-white py-4 px-8 hover:bg-gray-800 ms-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        {{ $t('btn.shop_now') }}
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Banner',
};
</script>