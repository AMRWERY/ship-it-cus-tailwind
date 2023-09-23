<template>
  <Filters @apply-filters="updateFilters" />
  <div class="lg:col-span-3">

    <!-- search bar -->
    <div class="px-6 py-4 md:flex md:justify-center md:items-center dark:border-gray-700">
      <div class="w-full md:w-1/2 lg:w-1/3">
        <label for="hs-as-table-product-review-search" class="sr-only">Search</label>
        <div class="relative">
          <input type="text" id="hs-as-table-product-review-search" v-model="searchQuery"
            class="py-2 px-3 pe-11 w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            :placeholder="$t('products.what_are_you_looking_for')">
          <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- end of search bar -->

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl py-10 sm:py-8 lg:max-w-none lg:py-10">
        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <router-link v-for="prod in displayedProducts" :key="prod" :to="'/product/' + prod.id" class="group">
            <div
              class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg mb-4">
              <img class="h-48 w-full object-cover object-center" :src="prod.productImg" />
              <div class="p-4">
                <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900 truncate">{{
                  prod.title }}</h2>
                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                  <Rating :rating="prod.rating" />
                </p>
                <div class="flex items-center">
                  <p class="me-2 text-lg font-semibold text-gray-900 dark:text-white">
                    ${{ prod.price }}</p>
                  <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300"
                    v-if="prod?.originalPrice !== null && prod?.originalPrice !== '' && prod?.originalPrice !== 0">${{
                      prod.originalPrice }}</p>
                  <p class="ms-auto text-base font-medium text-green-500"
                    v-if="prod.discount !== null && prod.discount > 0">
                    {{ prod.discount }}% {{ $t('products.off') }}
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="flex justify-center mt-4">
        <vue-awesome-paginate :total-items="filterProducts.length" v-model="currentPage" :items-per-page="perPage"
          :max-pages-shown="5" paginate-buttons-class="btn" active-page-class="btn-active" back-button-class="back-btn"
          next-button-class="next-btn" />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from './Filters.vue'
import Rating from '../../reusable/Rating.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Filters,
    Rating,
  },

  data() {
    return {
      currentPage: 1,
      perPage: 10,
      discount: null,
      searchQuery: '',
      products: [],
      filterOptions: {
        categories: [],
        size: [],
        availability: [],
        priceRanges: [],
      },
    }
  },

  computed: {
    ...mapGetters(['getAllProducts']),
    filteredCategoryProducts() {
      if (this.$route.params.category) {
        return this.getAllProducts.filter(
          product => product.categories === this.$route.params.category
        );
      } else {
        return this.getAllProducts;
      }
    },
    filterProducts() {
      let filteredProducts = this.filteredCategoryProducts;
      if (this.searchQuery !== '') {
        filteredProducts = filteredProducts.filter((product) =>
          product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      if (this.filterOptions.categories.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          this.filterOptions.categories.includes(product.categories)
        );
      }
      if (this.filterOptions.size.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.size && product.size.length > 0 && product.size.some((item) => this.filterOptions.size.includes(item))
        );
      }
      if (this.filterOptions.availability.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          this.filterOptions.availability.includes(product.availability)
        );
      }
      if (this.filterOptions.priceRanges.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          this.filterOptions.priceRanges.some((priceRange) => {
            const price = parseFloat(product.price.replace('$', '').replace(',', ''));
            const [minPrice, maxPrice] = priceRange.split(' - ').map(str => parseFloat(str.replace('$', '').replace(',', '')));
            return price >= minPrice && price <= maxPrice;
          })
        );
      }
      return filteredProducts;
    },
    startIndex() {
      return (this.currentPage - 1) * this.perPage;
    },
    endIndex() {
      return this.currentPage * this.perPage;
    },
    displayedProducts() {
      return this.filterProducts.slice(this.startIndex, this.endIndex);
    },
  },

  watch: {
    getAllProducts(newProducts) {
      this.products = newProducts;
    },
  },

  methods: {
    ...mapActions(["fetchProducts"]),
    updateFilters(filterOptions) {
      this.filterOptions = filterOptions;
    },
  },

  mounted() {
    this.fetchProducts();
    this.products = this.getAllProducts
  },
}
</script>