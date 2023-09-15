<template>
    <section
        class="relative bg-[url(https://justfields.com/storage/projects/7M5rV059/cover.webp)] bg-cover bg-center bg-no-repeat">
        <div
            class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
        </div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 class="text-3xl font-extrabold sm:text-5xl">
                    Just landed
                    <strong class="block font-extrabold text-rose-700">
                        The Autumn Collection
                    </strong>
                </h1>
                <p class="mt-4 max-w-lg sm:text-xl/relaxed">
                    View the Autumn Collection and discover the latest trends in fashion
                    and accessories. We have everything you need to look your best this
                    season.
                </p>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                    <router-link to="/products"
                        class="rounded-xl font-bold bg-gray-800 text-white py-4 px-8 hover:bg-gray-800 ml-44 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        Shop Now
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
  