<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                    data-tabs-toggle="#myTabContent" role="tablist">
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="description-tab"
                            data-tabs-target="#description" type="button" role="tab" aria-controls="description"
                            aria-selected="false">Description</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="reviews-tab" data-tabs-target="#reviews" type="button" role="tab" aria-controls="reviews"
                            aria-selected="false">Reviews (0)</button>
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
                            <h4 class="font-semibold text-sm text-gray-900 mb-4">No reviews yet.</h4>
                            <div class="flex items-center mb-2">
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p class="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
                            </div>
                            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5
                                    star</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 70%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4
                                    star</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 17%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">3
                                    star</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 8%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2
                                    star</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 4%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1
                                    star</a>
                                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-yellow-300 rounded" style="width: 1%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
                            </div>
                        </div>
                        <div>
                            <div class="mt-1 text-xl mb-2 text-gray-900">Share your thoughts</div>
                            <div class="text-sm mb-4">If you have used this product, we would love to hear about your
                                experience.</div>
                            <form class="writeReview ease-in-out transform transition-all">
                                <div class="w-full text-gray-500">
                                    <div class="p-5 mt-3 grid gap-2 border rounded-lg">
                                        <div class="block text-center mb-1.5">
                                            <label class="text-center text-sm block relative m-auto">How would you rate your
                                                experience with this product? We strive for a 5 star experience
                                                <span class="text-red-500">*</span>
                                            </label>
                                            <div class="gap-1 flex justify-center mt-2 relative">
                                                <label class="grid p-1 rounded disable-star">
                                                    <input type="radio"
                                                        class="overflow-hidden appearance-none opacity-0 absolute"
                                                        name="rating" required value="1">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" class="icon" width="21px" height="21px"
                                                        viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480Z">
                                                        </path>
                                                    </svg>
                                                </label>
                                                <label class="grid p-1 rounded disable-star">
                                                    <input type="radio"
                                                        class="overflow-hidden appearance-none opacity-0 absolute"
                                                        name="rating" required value="2">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" class="icon" width="21px" height="21px"
                                                        viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480Z">
                                                        </path>
                                                    </svg>
                                                </label>
                                                <label class="grid p-1 rounded disable-star">
                                                    <input type="radio"
                                                        class="overflow-hidden appearance-none opacity-0 absolute"
                                                        name="rating" required value="3">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" class="icon" width="21px" height="21px"
                                                        viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480Z">
                                                        </path>
                                                    </svg>
                                                </label>
                                                <label class="grid p-1 rounded disable-star">
                                                    <input type="radio"
                                                        class="overflow-hidden appearance-none opacity-0 absolute"
                                                        name="rating" required value="4">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" class="icon" width="21px" height="21px"
                                                        viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480Z">
                                                        </path>
                                                    </svg>
                                                </label>
                                                <label class="grid p-1 rounded disable-star">
                                                    <input type="radio"
                                                        class="overflow-hidden appearance-none opacity-0 absolute"
                                                        name="rating" required value="5">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" class="icon" width="21px" height="21px"
                                                        viewBox="0 0 512 512">
                                                        <path fill="currentColor"
                                                            d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480Z">
                                                        </path>
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="w-full col-span-full">
                                            <label for="content" class="text-sm mb-0.5">How was your experience?
                                                <span class="text-red-500">*</span>
                                            </label>
                                            <textarea class="w-full" id="content" placeholder="Great Quality" required>
                                            </textarea>
                                        </div>
                                        <div class="w-full col-span-full">
                                            <label for="author" class="text-sm mb-0.5">Your email <span
                                                    class="text-red-500">*</span>
                                            </label>
                                            <input class="w-full" id="author" placeholder="example@example.com" type="email"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
                                        </div>
                                        <div class="w-full col-span-full text-center mt-3">
                                            <button
                                                class="flex gap-4 font-bold justify-center items-center transition rounded-md w-full p-2 bg-amber-300 text-amber-900 hover:bg-amber-400"
                                                type="submit">
                                                <span>Submit</span>
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

<script>
import { initTabs } from 'flowbite'

export default {
    name: 'DescriptionAndReviews',

    mounted() {
        initTabs()
    }
}
</script>