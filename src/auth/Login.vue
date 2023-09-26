<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                {{ $t('sign_in.sign_in_to_your_account') }}
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormKit type="form" id="my-form" class="space-y-6" :actions="false" @submit="signIn">
                <div>
                    <div class="mt-2">
                        <FormKit id="email" name="email" type="email" validation="required|email"
                            :label="$t('sign_in.email_address')" v-model.trim="email"
                            :validation-messages="{ required: $t('validation.email_address_is_required') }"
                            :placeholder="$t('sign_in.your_email')" message-class="text-red-600" outer-class="mb-5"
                            label-class="block text-sm font-medium leading-6 text-gray-700 dark:text-zinc-400 mb-1"
                            inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                            input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password"
                            class="block text-sm font-medium leading-6 text-gray-700 dark:text-zinc-400">{{
                                $t('sign_in.password') }}</label>
                        <div class="text-sm">
                            <router-link to="/reset-password"
                                class="font-semibold text-indigo-600 dark:text-zinc-400 hover:text-indigo-500">{{
                                    $t('sign_in.forgot_password?') }}</router-link>
                        </div>
                    </div>

                    <div class="mt-2 relative">
                        <FormKit id="password" name="password" type="password" validation="required|password"
                            v-model.trim="password" :validation-messages="{
                                required: $t('validation.password_is_required')
                            }
                                " :placeholder="$t('sign_in.your_password')" message-class="text-red-600"
                            outer-class="mb-5"
                            inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                            input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                        <span
                            class="absolute inset-y-0 end-0 grid place-content-center me-5 mb-1-5 cursor-pointer text-green-600"
                            @click="togglePasswordVisibility">
                            <i class="far fa-eye" v-if="!passwordVisible"></i>
                            <i class="far fa-eye-slash" v-else></i>
                        </span>
                    </div>
                </div>

                <div>
                    <button @click="signIn"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ $t('btn.sign_in') }}
                    </button>
                </div>
            </FormKit>

            <p class="mt-10 text-center text-sm text-gray-700 dark:text-gray-300">
                {{ $t('sign_in.not_a_member?') }}
                {{ ' ' }}
                <router-link to="/sign-up"
                    class="font-semibold leading-6 text-indigo-600 dark:text-zinc-400 hover:text-indigo-500">{{
                        $t('sign_in.please_sign_up') }}</router-link>
            </p>
        </div>
    </div>
</template>

  
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const passwordVisible = ref(false);

const store = useStore();
const router = useRouter();

const signIn = () => {
    store.dispatch('userSignIn', {
        email: email.value,
        password: password.value,
        router: router
    });
};

const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
};
</script>