<template>
    <div class="lds-hourglass-container" v-if="showSpinner">
        <div class="lds-hourglass"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showSpinner = ref(true);

onMounted(() => {
    setTimeout(() => {
        showSpinner.value = false;
    }, 3000);
});
</script>

<style scoped>
.lds-hourglass-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust as needed */
}

.lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #ff0000; /* Change this color code to red (#ff0000) */
    border-color: #ff0000 transparent #ff0000 transparent; /* Change this color code to red (#ff0000) */
    animation: lds-hourglass 1.2s infinite;
}

@keyframes lds-hourglass {
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    100% {
        transform: rotate(1800deg);
    }
}
</style>
