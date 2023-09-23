<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <section class="text-gray-400 body-font">
            <h2 class="text-lg title-font text-gray-500 tracking-widest text-center mb-6">{{ $t('deal.latest_from_blogs') }}
            </h2>
            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3" v-for="card in cards" :key="card">
                        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="card.img">
                            <div class="p-6">
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 text-center">
                                    {{ card.title }}</h2>
                                <br>
                                <p class="leading-relaxed mb-3">{{ card.subtitle }}</p>
                                <div class="flex items-center flex-wrap ">
                                    <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">{{
                                        $t('deal.learn_more') }}
                                    </a>
                                    <span
                                        class="text-gray-500 me-3 inline-flex items-center lg:ms-auto md:ms-0 ml-auto leading-none text-sm pe-3 py-1 border-e-2 border-gray-800">
                                        <i class="fa-regular fa-eye"></i>
                                        <p class="ms-1">1.2K</p>
                                    </span>
                                    <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                        <i class="fa-regular fa-comment"></i>
                                        <p class="ms-1">8</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const cards = ref([
    { subtitle: t('deal.here_are_some_of_best_online_shopping_sites_for_you_in_the_world'), title: 'Billy Wade', img: 'https://justfields.com/storage/projects/7M5rV059/post-1.jpg' },
    { subtitle: t('deal.get_awesome_offers_on_new_collection_is_available_at_all_stores'), title: 'Demean Phil', img: 'https://justfields.com/storage/projects/7M5rV059/post-2.jpg' },
    { subtitle: t('deal.festival_sale_has_lots_of_amazing_offer_for_men_and_women'), title: 'Luke Hobbs', img: 'https://justfields.com/storage/projects/7M5rV059/post-3.jpg' },
]);
</script>

<!-- <script>
import { useI18n } from 'vue-i18n'

export default {
    name: 'Blogs',

    data() {
        return {
            cards: [
                { subtitle: 'Here are some of best online shopping sites for you in the world.', title: 'Billy Wade', img: 'https://justfields.com/storage/projects/7M5rV059/post-1.jpg' },
                { subtitle: 'Get awesome offers on new collection is available at all stores.', title: 'Demean Phil', img: 'https://justfields.com/storage/projects/7M5rV059/post-2.jpg' },
                { subtitle: 'Festival Sale has lots of amazing offer for men and women.', title: 'Luke Hobbs', img: 'https://justfields.com/storage/projects/7M5rV059/post-3.jpg' },
            ]
        }
    }
}
</script> -->