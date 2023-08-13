<template>
  <div>
    <WelcomeAlert />
    <Banner />
    <Logo />
    <ShopCategory />
    <FeaturedProducts />
    <TodayDeals />
    <Blogs />
  </div>
</template>

<script>
import Banner from '../layouts/Banner.vue';
import WelcomeAlert from '../layouts/WelcomeAlert.vue';
import Logo from '../layouts/Logo.vue';
import ShopCategory from '../components/ShopCategory.vue'
import FeaturedProducts from '../components/FeaturedProducts.vue'
import TodayDeals from '../components/TodayDeals.vue'
import Blogs from '../components/Blogs.vue'

export default {
  name: 'Home',

  components: { Banner, WelcomeAlert, Logo, ShopCategory, FeaturedProducts, TodayDeals, Blogs }
}
</script>