<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          :src="selectedImg">
        <p class="text-base font-medium text-green-500 absolute m-3">
          <span
            class="inline-flex items-center rounded-md bg-red-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10"
            v-if="productData?.discount !== null && productData?.discount  !== '' && productData?.discount  !== 0">{{ productData?.discount }}%</span>
        </p>
        <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
          <div class="flex items-start">
            <button type="button" @click="selectCard('imgFront')" v-if="productData?.imgFront != null"
              class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center mr-3">
              <img class="h-full w-full object-cover" :src="productData?.productImg" />
            </button>
            <button type="button" @click="selectCard('imgBack')" v-if="productData?.imgBack != null"
              class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2  border-gray-900 text-center ml-2">
              <img class="h-full w-full object-cover" :src="productData?.imgBack" />
            </button>
          </div>
        </div>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <div class="flex items-center">
            <h2 class="text-md title-font text-gray-500 tracking-widest inline" v-if="productData?.sku !== null && productData?.sku  !== ''">
              SKU:</h2>
            <h4 class="text-md title-font text-gray-500 tracking-widest inline ml-1">{{ productData?.sku }}</h4>
          </div>

          <div class="flex items-center justify-between my-5">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ productData?.title }}</h1>
            <div class="flex items-center">
              <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${{ productData?.price }}
              </p>
              <p class="text-lg font-medium text-gray-400 line-through dark:text-gray-300"
              v-if="productData?.originalPrice !== null && productData?.originalPrice !== '' && productData?.originalPrice !== 0">${{
                  productData?.originalPrice }}</p>
            </div>
          </div>
          <div class="flex items-center my-8">
            <h2 class="text-md title-font text-gray-500 tracking-widest inline">Availability:</h2>
            <h4 class="text-md title-font text-green-500 tracking-widest inline ml-1"
              :class="{ 'text-green-500': productData?.availability !== 'out of stock', 'text-red-500': productData?.availability === 'out of stock' }">
              {{ productData?.availability }}</h4>
          </div>
          <div class="flex mb-4">
            <Rating :rating="productData?.rating" />
          </div>

          <div class="mb-5" v-if="productData?.size != null">
            <h4 class="text-sm font-medium text-gray-900 mb-4">Size</h4>
            <fieldset class="grid grid-cols-5 gap-4">
              <div v-for="size in productData?.size" :key="size">
                <input type="radio" name="size" :value="size" class="peer hidden" v-model="selectedSize" />
                <label :for="size"
                  class="block cursor-pointer rounded-lg border bg-white p-2 text-sm font-medium shadow-sm hover:border-gray-700 text-center"
                  :class="{ 'border-blue-500': selectedSize === size }">
                  <p class="text-gray-700">{{ size }}</p>
                </label>
              </div>
            </fieldset>
          </div>

          <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
            taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
            Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra
            jean shorts keytar banjo tattooed umami cardigan.</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div class="flex flex-col items-center">
              <div class="flex items-center my-10">
                <input type="number" id="Quantity" value="1"
                  class="h-10 w-10 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />

                <button @click="addToCart" :class="{
                  'bg-green-500 hover:bg-green-600': isAddingToCart,
                  'bg-red-500': !isAddingToCart,
                }"
                  class="ml-3 flex items-center justify-center text-white border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded">
                  {{ buttonLabel }}
                </button>

                <AuthAlert :open="open" :message="message" />
              </div>

              <div class="flex items-center mt-2">
                <h2 class="text-md title-font text-gray-500 tracking-widest">Categories:</h2>
                <h4 class="text-md title-font text-gray-500 tracking-widest ml-1">{{ productData?.categories
                }}</h4>
              </div>
            </div>

          </div>
          <div class="flex">
            <button @click="addToWishList"
              :class="['rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center ml-4', { 'text-red-500': iconColor === 'red', 'text-gray-500 bg-gray-200': iconColor === 'black' }]">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
              @click="shareBtn">
              <i class="fa-solid fa-share-nodes"></i>
            </button>
            <div v-if="showShareButtons" class="mt-2 ml-3">
              <button
                class="rounded-full w-7 h-7 bg-blue-600 text-white p-0 border-0 inline-flex items-center justify-center ml-4">
                <i class="fa-brands fa-facebook-f"></i>
              </button>
              <button
                class="rounded-full w-7 h-7 bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white p-0 border-0 inline-flex items-center justify-center ml-4">
                <i class="fa-brands fa-instagram"></i>
              </button>
              <button
                class="rounded-full w-7 h-7 bg-blue-400 text-white p-0 border-0 inline-flex items-center justify-center ml-4">
                <i class="fa-brands fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DescriptionAndReviews />
  <MightLike />
</template>
  
<script>
import Rating from '../../reusable/Rating.vue';
import MightLike from '../MightLike.vue';
import DescriptionAndReviews from '../DescriptionAndReviews.vue';
import AuthAlert from '../../reusable/alerts/AuthAlert.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { auth } from "@/firebase/config";

export default {
  name: 'ProductDetails',

  components: { Rating, MightLike, DescriptionAndReviews, AuthAlert },

  data() {
    return {
      tab: null,
      showShareButtons: false,
      selectedCardIndex: 0,
      selectedImg: null,
      selectedSize: null,
      productData: null,
      cart: [],
      totalItems: null,
      chosenItems: 1,
      wishList: [],
      open: false,
      message: "",
      iconColor: 'black',
      isAddingToCart: false,
      buttonLabel: 'Buy Now',
    }
  },

  computed: {
    ...mapGetters(['getSelectedProduct']),
    ...mapMutations(['wishlistItems'])
  },

  methods: {
    shareBtn() {
      this.showShareButtons = !this.showShareButtons
    },
    selectCard(imgProperty) {
      this.selectedImg = this.productData[imgProperty];
    },
    addToCart() {
      if (!auth.currentUser) {
        this.open = true;
        this.$route.push('/login');
      } else {
        let index = this.cart.indexOf(this.productData);

        if (index != -1) {
          this.cart[index]["totalPrice"] =
            Number(this.cart[index].cartQty) * Number(this.cart[index].price);
          this.cart[index].cartQty =
            Number(this.chosenItems) + Number(this.cart[index].cartQty);
          Number(this.cart[index]["cart"]) * Number(this.cart[index]["price"]);
        } else {
          this.productData["cartQty"] = Number(this.chosenItems);
          this.productData["totalPrice"] =
            Number(this.productData.cartQty) *
            Number(this.productData.price);
          this.productData["date"] = new Date().toISOString();
          this.cart.push(this.productData);
        }
        sessionStorage.setItem("cartData", JSON.stringify(this.cart));
        this.$store.commit("cartItems", this.cart);
        this.$store.commit("cartItemsCount", this.cart.length);
        this.isAddingToCart = true;
        this.buttonLabel = 'Adding...';
        setTimeout(() => {
          this.isAddingToCart = false;
          this.buttonLabel = 'Buy Now';
        }, 3000);
      }
    },
    addToWishList() {
      if (!auth.currentUser) {
        this.open = true;
        this.$route.push('/login');
      } else {
        let index = this.$store.getters.getWishlistItems.findIndex(item => item.id === this.productData.id);

        if (index !== -1) {
          this.$store.getters.getWishlistItems[index].wishlistQty += 1;
        } else {
          this.$store.commit('wishlistItems', [...this.$store.getters.getWishlistItems, this.productData]);
        }
        this.$store.commit('wishlistItemsCount', this.$store.getters.getWishlistItems.length);
        sessionStorage.setItem('wishListData', JSON.stringify(this.$store.getters.getWishlistItems));
        this.iconColor = 'red';
        setTimeout(() => {
          this.iconColor = 'black';
        }, 3000);
      }
    },
    resetIconColor() {
      this.iconColor = 'black';
    },
    ...mapActions(['getProductById']),
  },

  watch: {
    getSelectedProduct(data) {
      if (data) {
        this.productData = data
        this.selectedImg = this.productData['productImg']
      }
    },
  },

  mounted() {
    const productId = this.$route.params.id;
    this.getProductById(productId);

    if (sessionStorage.getItem("cartData")) {
      this.cart = JSON.parse(sessionStorage.getItem("cartData"));
    }
  },
};
</script>