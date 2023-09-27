<template>
    <div class="px-6 py-24 sm:py-32 lg:px-8">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true">
            <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{{
                $t('contact.contact_us') }}</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-zinc-400">{{
                $t('contact.we_are_always_here_to_help') }}
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-3xl sm:mt-20">
            <FormKit type="form" id="my-form" :actions="false" @submit="submitForm">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <div class="mt-2.5">
                            <FormKit id="first-name" name="first-name" type="text" validation="required|first-name"
                                :label="$t('profile.first_name')" v-model.trim="firstName"
                                :validation-messages="{ required: $t('validation.firstname_is_required') }"
                                :placeholder="$t('profile.your_first_name')" message-class="text-red-600" outer-class="mb-5"
                                label-class="block text-sm font-medium leading-6 text-gray-700 dark:text-zinc-400 mb-1"
                                inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                        </div>
                    </div>
                    <div>
                        <div class="mt-2.5">
                            <FormKit id="last-name" name="last-name" type="text" validation="required|last-name"
                                :label="$t('profile.last_name')" v-model.trim="lastName"
                                :validation-messages="{ required: $t('validation.lastname_is_required') }"
                                :placeholder="$t('profile.your_last_name')" message-class="text-red-600" outer-class="mb-5"
                                label-class="block text-sm font-medium leading-6 text-gray-700 dark:text-zinc-400 mb-1"
                                inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <div class="mt-2.5">
                            <FormKit id="company" name="company" type="text" validation="required|company"
                                :label="$t('contact.company')" v-model.trim="company"
                                :validation-messages="{ required: $t('validation.company_is_required') }"
                                :placeholder="$t('contact.company')" message-class="text-red-600" outer-class="mb-5"
                                label-class="block text-sm font-medium leading-6 text-gray-700 dark:text-zinc-400 mb-1"
                                inner-class="border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />

                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <div class="mt-2.5">
                            <FormKit id="email" name="email" type="email" validation="required|email"
                                :label="$t('footer.email')" v-model.trim="email"
                                :validation-messages="{ required: $t('validation.email_address_is_required') }"
                                :placeholder="$t('footer.email')" message-class="text-red-600" outer-class="mb-5"
                                label-class="block text-sm font-medium leading-6 text-gray-700 dark:text-zinc-400 mb-1"
                                inner-class="border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="phone-number"
                            class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">{{
                                $t('footer.phone') }}</label>
                        <div class="relative mt-2.5">
                            <div class="flex flex-col sm:flex-row gap-2">
                                <div class="relative flex-shrink-0 w-1/2">
                                    <select id="country" name="select-country" v-model="selectedCountry"
                                        class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                        <option v-for="country in countriesData" :key="country.code" :value="country.code">
                                            {{ country.name }}</option>
                                    </select>
                                </div>

                                <div class="relative sm:w-5/12 mt-4 sm:mt-0">
                                    <input type="text" :value="selectedCountryDialCode" readonly
                                        class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500  cursor-pointer" />
                                </div>

                                <input type="text" :value="selectedCountryCode" readonly
                                    class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500  cursor-pointer" />

                                <input type="text" name="billing-zip" v-model="zip"
                                    class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="ZIP" />
                            </div>

                            <FormKit id="phone-number" name="phone-number" type="tel" validation="required|phone-number"
                                v-model.trim="phoneNumber"
                                :validation-messages="{ required: $t('validation.phone_is_required') }"
                                :placeholder="$t('footer.phone')" message-class="text-red-600" outer-class="mb-5"
                                inner-class="mt-4 border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <div class="mt-2.5">
                            <FormKit id="title" name="title" type="text" validation="required|title"
                                :label="$t('contact.title')" v-model.trim="title"
                                :validation-messages="{ required: $t('validation.title_is_required') }"
                                :placeholder="$t('contact.title')" message-class="text-red-600" outer-class="mb-5"
                                label-class="block text-sm font-medium leading-6 text-gray-700 dark:text-zinc-400 mb-1"
                                inner-class="border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <div class="mt-2.5">
                            <FormKit id="message" name="message" type="textarea" rows="4" validation="required|message"
                                :label="$t('contact.message')" v-model.trim="message"
                                :validation-messages="{ required: $t('validation.message_is_required') }"
                                :placeholder="$t('contact.message')" message-class="text-red-600" outer-class="mb-5"
                                label-class="block text-sm font-medium leading-6 text-gray-700 dark:text-zinc-400 mb-1"
                                inner-class="border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                                input-class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
                        <div class="flex h-6 items-center">
                            <Switch v-model="agreed"
                                :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
                                <span aria-hidden="true"
                                    :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
                            </Switch>
                        </div>
                        <SwitchLabel class="text-sm leading-6 text-gray-600">
                            {{ $t('contact.by_selecting_this_you_agree_to_our') }}
                            {{ ' ' }}
                            <router-link to="/privacy-policy" class="font-semibold text-indigo-600">{{
                                $t('footer.privacy_policy') }}</router-link>.
                        </SwitchLabel>
                    </SwitchGroup>
                </div>
                <div class="mt-10">
                    <button
                        class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                            $t('btn.lets_talk') }}</button>
                </div>
            </FormKit>
        </div>
    </div>
    <section class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div
            class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div
            class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
            <img class="mx-auto h-12" src="/shopping-bags-svgrepo-com.svg" />
            <figure class="mt-10">
                <blockquote
                    class="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-zinc-400 sm:text-2xl sm:leading-9">
                    <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                        molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                </blockquote>
                <figcaption class="mt-10">
                    <img class="mx-auto h-10 w-10 rounded-full"
                        src="https://justfields.com/storage/projects/7M5rV059/p.jpg" />
                    <div class="mt-4 flex items-center justify-center space-s-3 text-base">
                        <div class="font-semibold text-gray-900 dark:text-white">Amr Mohamed</div>
                        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <div class="text-gray-600 dark:text-zinc-300">CEO of Ship-IT</div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </section>
</template>
  

<script setup>
import { ref, computed } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import dataBase from '../assets/CountryCodes.json';
import { collection, addDoc } from 'firebase/firestore';
import { auth } from '@/firebase/config';
import { db } from "@/firebase/config";

const countriesData = ref(dataBase);
const selectedCountry = ref(null);

const firstName = ref("");
const lastName = ref("");
const company = ref("");
const email = ref("");
const zip = ref("");
const phoneNumber = ref("");
const title = ref("");
const message = ref("");
const agreed = ref(false);

const selectedCountryData = computed(() => {
    return countriesData.value.find((country) => country.code === selectedCountry.value) || {};
});

const selectedCountryDialCode = computed(() => {
    return selectedCountryData.value.dial_code || '';
});

const selectedCountryCode = computed(() => {
    return selectedCountryData.value.code || [];
});

const submitForm = async () => {
    const currentDate = new Date();
    const colRef = collection(db, "contactMessages")

    const user = auth.currentUser;

    const dataObj = {
        userId: user ? user.uid : null,
        firstName: firstName.value,
        lastName: lastName.value,
        company: company.value,
        email: email.value,
        selectedCountry: selectedCountryData.value.name,
        zip: zip.value,
        phoneNumber: phoneNumber.value,
        title: title.value,
        message: message.value,
        agreedToPolicy: agreed.value,
        date: currentDate.toISOString(),
    }

    const docRef = await addDoc(colRef, dataObj)
    console.log(docRef.id)

    clearForm();
};

const clearForm = () => {
    firstName.value = "";
    lastName.value = "";
    company.value = "";
    email.value = "";
    selectedCountry.value = "";
    zip.value = "";
    phoneNumber.value = "";
    title.value = "";
    message.value = "";
    agreed.value = false;
};
</script>
