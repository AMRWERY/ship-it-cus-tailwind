<template>
    <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
            <img src="../../public/shopping-bags-svgrepo-com.svg" width="50" height="50">
            <p>Ship-IT<br />Providing reliable tech since 2023</p>
        </div>
        <div>
            <span class="footer-title">Social</span>
            <div class="grid grid-flow-col gap-4">
                <router-link to=""><i class="fa-brands fa-github fa-2xl"></i></router-link>
                <router-link to=""><i class="fa-brands fa-x-twitter fa-2xl"></i></router-link>
                <router-link to=""><i class="fa-brands fa-facebook-f fa-2xl"></i></router-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>