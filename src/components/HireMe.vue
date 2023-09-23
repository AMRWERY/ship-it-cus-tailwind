<template>
    <div class="m-auto max-w-[1500px] px-4 pt-28">
        <div class="max-w-[600px] m-auto flex justify-center items-center py-10">
            <div class="w-full py-8 px-6 shadow-xl rounded-md pt-20 bg-white border border-orange-400">
                <div class="flex justify-center items-center mt-[-150px] relative">
                    <img src="https://justfields.com/storage/projects/7M5rV059/p.jpg"
                        class="w-[150px] h-[150px] rounded-full shadow-xl p-1 border border-orange-400 bg-gray-50">
                </div>
                <h2 class="text-3xl pb-3 font-semibold pt-6">{{ $t('hire_me.do_not_be_shy') }}
                    <span class="animate-bounce inline-block">!</span>
                </h2>
                <div class="w-[30px] h-[3px] bg-[#ffb400] mb-2"></div>
                <p class="mb-5 text-lg text-gray-500">
                    {{
                        $t('hire_me.feel_free_to_get_in_touch_with_me_i_am_always_open_to_discussing_new_projects_creative_ideas_or_opportunities_to_be_part_of_your_visions')
                    }}.
                </p>
                <div class="flex justify-start items-center mb-2">
                    <span class="text-4xl text-red-500 inline-block w-14">
                        <i class="fa-solid fa-location-dot"></i>
                    </span>
                    <div>
                        <span class="text-lg block text-gray-500 font-semibold">{{ $t('hire_me.address_point') }}</span>
                        <span class="text-md block">Cairo, Egypt</span>
                    </div>
                </div>
                <div class="flex justify-start items-center my-4">
                    <span class="text-4xl text-blue-500 inline-block w-14">
                        <i class="fa-solid fa-envelope"></i>
                    </span>
                    <div>
                        <span class="text-lg block text-gray-500 font-semibold">{{ $t('footer.email') }}</span>
                        <span class="text-md block">amrmounir2@gmail.com</span>
                    </div>
                </div>
                <div class="flex justify-start items-center my-4">
                    <span class="text-4xl text-orange-400 inline-block w-14">
                        <i class="fa-solid fa-phone"></i>
                    </span>
                    <div>
                        <span class="text-lg block text-gray-500 font-semibold">{{ $t('hire_me.mobile_no') }}.</span>
                        <span class="text-md block">+20 1022655742</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
}
</script>