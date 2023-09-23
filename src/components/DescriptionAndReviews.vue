<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                    data-tabs-toggle="#myTabContent" role="tablist">
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="description-tab"
                            data-tabs-target="#description" type="button" role="tab" aria-controls="description"
                            aria-selected="false">{{ $t('description_reviews.description') }}</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="reviews-tab" data-tabs-target="#reviews" type="button" role="tab" aria-controls="reviews"
                            aria-selected="false">{{ $t('deal.reviews') }}</button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="description" role="tabpanel"
                    aria-labelledby="description-tab">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Fam locavore kickstarter distillery. Mixtape
                        chillwave tumeric sriracha taximy <br> <strong
                            class="font-medium text-gray-800 dark:text-white">chia
                            microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim. <br></strong>
                        forage brooklyn. Everyday carry +1 seitan poutine tumeric. <br> Gastropub blue bottle austin
                        listicle
                        pour-over, neutra jean shorts keytar banjo <br> tattooed umami cardigan.</p>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="reviews" role="tabpanel"
                    aria-labelledby="reviews-tab">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <h4 class="font-semibold text-sm text-gray-900 mb-4">{{ $t('description_reviews.no_reviews_yet')
                            }}.</h4>
                            <div class="flex items-center mb-2">
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p class="ms-2 text-sm font-medium text-gray-900 dark:text-white">4.95 {{
                                    $t('description_reviews.out_of') }} 5</p>
                            </div>
                            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 {{
                                $t('description_reviews.global_ratings') }}</p>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5
                                    {{ $t('description_reviews.star') }}</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 70%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4
                                    {{ $t('description_reviews.star') }}</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 17%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">3
                                    {{ $t('description_reviews.star') }}</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 8%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2
                                    {{ $t('description_reviews.star') }}</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 4%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1
                                    {{ $t('description_reviews.star') }}</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 1%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
                            </div>
                        </div>
                        <div>
                            <div class="mt-1 text-xl mb-2 text-gray-900">{{ $t('description_reviews.share_your_thoughts') }}
                            </div>
                            <div class="text-sm mb-4">{{
                                $t('description_reviews.if_you_have_used_this_product,_we_would_love_to_hear_about_your_experience')
                            }}.</div>
                            <form class="writeReview ease-in-out transform transition-all" @submit.prevent="submitForm">
                                <div class="w-full text-gray-500">
                                    <div class="p-5 mt-3 grid gap-2 border rounded-lg">
                                        <div class="block text-center mb-1.5">
                                            <label class="text-center text-sm block relative m-auto">{{
                                                $t('description_reviews.how_would_you_rate_your_experience_with_this_product?_we_strive_for_a_5_star_experience')
                                            }}
                                                <span class="text-red-500">*</span>
                                            </label>

                                            <div class="rating">
                                                <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400"
                                                    :checked="rating === '1'" @change="setRating(1)" />
                                                <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400"
                                                    :checked="rating === '2'" @change="setRating(2)" />
                                                <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400"
                                                    :checked="rating === '3'" @change="setRating(3)" />
                                                <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400"
                                                    :checked="rating === '4'" @change="setRating(4)" />
                                                <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400"
                                                    :checked="rating === '5'" @change="setRating(5)" />
                                            </div>
                                        </div>
                                        <div class="w-full col-span-full">
                                            <label for="content" class="text-sm mb-0.5">{{
                                                $t('description_reviews.how_was_your_experience?')
                                            }}
                                                <span class="text-red-500">*</span>
                                            </label>
                                            <textarea class="w-full" id="content"
                                                :placeholder="$t('description_reviews.great_quality')" required
                                                v-model.trim="comment">
                                            </textarea>
                                        </div>
                                        <div class="w-full col-span-full">
                                            <label for="author" class="text-sm mb-0.5">{{ $t('sign_in.your_email') }}<span
                                                    class="text-red-500">*</span>
                                            </label>
                                            <input class="w-full" id="author" type="email" required v-model="getUserEmail">
                                        </div>
                                        <div class="w-full col-span-full text-center mt-3">
                                            <button
                                                class="flex gap-4 font-bold justify-center items-center transition rounded-md w-full p-2 bg-amber-300 text-amber-900 hover:bg-amber-400"
                                                type="submit">
                                                <span>{{ $t('btn.submit') }}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex';
import { initTabs } from 'flowbite'
import { collection, addDoc } from 'firebase/firestore';
import { db } from "@/firebase/config";

const rating = ref('')
const comment = ref('')

const setRating = (value) => {
    rating.value = value;
};

const store = useStore()

const getUserEmail = computed(() => {
    return store.getters.getUserEmail;
});

onMounted(() => {
    const email = sessionStorage.getItem("email");
    store.commit("setUserEmail", email);
});

const submitForm = async () => {
    const colRef = collection(db, "userFeedback")

    const dataObj = {
        rating: rating.value,
        comment: comment.value,
    }

    const docRef = await addDoc(colRef, dataObj)
    console.log(docRef.id)

    clearForm();
};

const clearForm = () => {
    rating.value = "";
    comment.value = "";
};

onMounted(() => {
    initTabs()
});
</script>