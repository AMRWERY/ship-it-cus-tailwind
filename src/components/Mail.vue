<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/3 lg:w-1/2 mx-auto mt-14">
        <!-- Check if there are emails to display -->
        <div v-if="userEmail.length > 0">
            <!-- Email Content -->
            <div class="p-6" v-for="email in userEmail" :key="email.id">
                <!-- Sender Info -->
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img src="https://justfields.com/storage/projects/7M5rV059/p.jpg" class="w-12 h-12 rounded-full" />
                    </div>
                    <div>
                        <h2 class="text-xl font-semibold">Amr Mohamed (Ship-IT CEO)</h2>
                        <p class="text-gray-600">amrmounir2@gmail.com</p>
                    </div>
                </div>

                <!-- Email Subject -->
                <h3 class="text-2xl mt-4 font-semibold">{{ email.title }}</h3>

                <!-- Email Body -->
                <p class="mt-4 text-gray-800">{{ email.message }}</p>
            </div>
        </div>

        <div v-else class="p-6 text-center">
            <p class="text-2xl font-semibold text-gray-600">Your inbox is empty</p>
        </div>

        <!-- Email Footer -->
        <div v-if="userEmail.length > 0" class="p-4 float-right">
            <router-link to="/contact">
                <button
                    class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                    Reply
                </button>
            </router-link>
        </div>
    </div>
</template>
  
  
<script>
import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export default {
    name: 'Mail',

    data() {
        return {
            emails: [],
        }
    },

    computed: {
        userEmail() {
            return this.emails.filter((mail) => mail.userId == this.userId);
        }
    },

    methods: {
        async getMails() {
            const querySnap = await getDocs(query(collection(db, "replyMail")));

            querySnap.forEach((doc) => {
                let mail = {
                    id: doc.id,
                    ...doc.data(),
                };
                this.emails.push(mail);
            });
        }
    },

    watch: {
        userEmail(newVal) {
            console.log("userEmail changed:", newVal);
        }
    },

    mounted() {
        this.getMails();
    }
}
</script>