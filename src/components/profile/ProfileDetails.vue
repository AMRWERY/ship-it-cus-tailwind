<template>
    <div class="space-y-12">
        <form>
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">{{ $t('profile.personal_information') }}</h2>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.first_name') }}</label>
                        <div class="mt-2">
                            <input v-model="getUsername" type="text" name="first-name" id="first-name"
                                autocomplete="given-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.last_name') }}</label>
                        <div class="mt-2">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                :placeholder="$t('profile.your_last_name')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('sign_in.email_address') }}</label>
                        <div class="mt-2">
                            <input v-model="getUserEmail" id="email" name="email" type="email" autocomplete="email"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                            $t('btn.update') }}</button>
                </div>
            </div>
        </form>

        <form>
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">{{ $t('profile.change_password') }}</h2>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                        <label for="current-password" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.current_password') }}</label>
                        <div class="mt-2">
                            <input v-model="getUserPassword" id="current-password" name="current-password" type="password"
                                autocomplete="current-password"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>

                    </div>
                    <div class="sm:col-span-3">
                        <label for="new-password" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.new_password') }}</label>
                        <div class="mt-2">
                            <input type="password" name="new-password" id="new-password" autocomplete="new-password"
                                :placeholder="$t('profile.new_password')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.confirm_new_password') }}</label>
                        <div class="mt-2">
                            <input type="password" name="confirm-password" id="confirm-password"
                                autocomplete="confirm-password" :placeholder="$t('profile.confirm_new_password')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                            $t('btn.update_password') }}</button>
                </div>
            </div>
        </form>

        <form>
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">{{ $t('profile.billing') }}</h2>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="address-one" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.address_1') }}</label>
                        <div class="mt-2">
                            <input type="text" name="address-one" id="address-one" autocomplete="address-one"
                                :placeholder="$t('profile.address_1')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="address-two" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.address_2') }}</label>
                        <div class="mt-2">
                            <input type="text" name="address-two" id="last-name" autocomplete="address-two"
                                :placeholder="$t('profile.address_2')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('checkout.city')
                        }}</label>
                        <div class="mt-2">
                            <input type="text" name="city" id="city" autocomplete="city" :placeholder="$t('checkout.city')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="country-code" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.country_code') }}</label>
                        <div class="mt-2">
                            <input type="number" name="country-code" id="country-code" autocomplete="country-code"
                                :placeholder="$t('profile.country_code')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="zip" class="block text-sm font-medium leading-6 text-gray-900">Zip</label>
                        <div class="mt-2">
                            <input type="number" name="zip" id="zip" autocomplete="zip" placeholder="zip"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('footer.phone')
                        }}</label>
                        <div class="mt-2">
                            <input type="number" name="phone" id="phone" autocomplete="phone"
                                :placeholder="$t('footer.phone')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                            $t('btn.update') }}</button>
                </div>
            </div>
        </form>

        <form>
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">{{ $t('checkout.shipping') }}</h2>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="address-one" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.address_1') }}</label>
                        <div class="mt-2">
                            <input type="text" name="address-one" id="address-one" autocomplete="address-one"
                                :placeholder="$t('profile.address_1')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="address-two" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.address_2') }}</label>
                        <div class="mt-2">
                            <input type="text" name="address-two" id="last-name" autocomplete="address-two"
                                :placeholder="$t('profile.address_2')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('checkout.city')
                        }}</label>
                        <div class="mt-2">
                            <input type="text" name="city" id="city" autocomplete="city" :placeholder="$t('checkout.city')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">{{
                            $t('profile.country') }}</label>
                        <div class="mt-2">
                            <input type="text" name="country" id="country" autocomplete="country"
                                :placeholder="$t('profile.country')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="zip" class="block text-sm font-medium leading-6 text-gray-900">Zip</label>
                        <div class="mt-2">
                            <input type="number" name="zip" id="zip" autocomplete="zip" placeholder="zip"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('footer.phone')
                        }}</label>
                        <div class="mt-2">
                            <input type="number" name="phone" id="phone" autocomplete="phone"
                                :placeholder="$t('footer.phone')"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                            $t('btn.update') }}</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'ProfileDetails',

    computed: {
        ...mapGetters(["getUsername", 'getUserEmail', 'getUserPassword']),
    },

    mounted() {
        const username = sessionStorage.getItem("username");
        this.$store.commit("setUsername", username);

        const email = sessionStorage.getItem("email");
        this.$store.commit("setUserEmail", email);

        const password = sessionStorage.getItem("password");
        this.$store.commit("setUserPassword", password);
    },
}
</script>