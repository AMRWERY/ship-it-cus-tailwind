<template>
  <section class="text-gray-700 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full h-[630px] object-cover object-center rounded border border-gray-200">
          <img class="w-full h-full object-cover object-center" :src="selectedImg">
        </div>

        <p class="text-base font-medium text-green-500 absolute m-3">
          <span
            class="inline-flex items-center rounded-md bg-red-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10"
            v-if="productData?.discount !== null && productData?.discount !== '' && productData?.discount !== 0">{{
              productData?.discount }}%</span>
        </p>
        <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
          <div class="flex items-start">
            <button type="button" @click="selectCard('imgFront')" v-if="productData?.imgFront != null"
              class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center me-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img class="h-full w-full object-cover" :src="productData?.productImg" />
            </button>
            <button type="button" @click="selectCard('imgBack')" v-if="productData?.imgBack != null"
              class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center ms-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img class="h-full w-full object-cover" :src="productData?.imgBack" />
            </button>
          </div>
        </div>
        <div class="lg:w-1/2 w-full lg:ps-10 lg:py-6 mt-6 lg:mt-0">
          <div class="flex items-center">
            <h2 class="text-md title-font text-gray-500 tracking-widest inline"
              v-if="productData?.sku !== null && productData?.sku !== ''">
              SKU:</h2>
            <h4 class="text-md title-font text-gray-500 dark:text-zinc-400 tracking-widest inline ml-1">{{
              productData?.sku }}</h4>
          </div>

          <div class="flex items-center justify-between my-5">
            <h1 class="text-gray-900 dark:text-white text-3xl title-font font-medium mb-1">{{ productData?.title }}</h1>
            <div class="flex items-center">
              <p class="me-2 text-lg font-semibold text-gray-900 dark:text-white">${{ productData?.price }}
              </p>
              <p class="text-lg font-medium text-gray-400 line-through dark:text-gray-300"
                v-if="productData?.originalPrice !== null && productData?.originalPrice !== '' && productData?.originalPrice !== 0">
                ${{ productData?.originalPrice }}</p>
            </div>
          </div>
          <div class="flex items-center my-8">
            <h2 class="text-md title-font text-gray-500 dark:text-zinc-400 tracking-widest inline">{{
              $t('products.availability') }}:</h2>
            <h4 class="text-md title-font text-green-500 tracking-widest inline ms-1"
              :class="{ 'text-green-500 dark:text-green-300': productData?.availability !== 'out of stock', 'text-red-500 dark:text-red-300': productData?.availability === 'out of stock' }">
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

          <p class="leading-relaxed dark:text-zinc-400">Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha
            taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
            Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra
            jean shorts keytar banjo tattooed umami cardigan.</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div class="flex flex-col items-center">
              <div class="flex items-center my-10">
                <input type="number" id="Quantity" v-model="chosenItems" min="1"
                  class="h-10 w-16 rounded border-gray-200 text-center sm:text-sm" />


                <button @click="addToCart" :class="{
                  'bg-green-500 hover:bg-green-600': isAddingToCart,
                  'bg-red-500': !isAddingToCart,
                }"
                  class="ms-3 flex items-center justify-center text-white border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <i class="fa-solid fa-cart-arrow-down me-3"></i>
                  {{ buttonLabel }}
                </button>

                <AuthAlert :open="open" :message="message" />

              </div>

              <div class="flex items-center mt-2">
                <h2 class="text-md title-font text-gray-500 dark:text-zinc-400 tracking-widest">{{ $t('navbar.categories')
                }}:</h2>
                <h4 class="text-md title-font text-gray-500 dark:text-zinc-300 tracking-widest ml-1">{{
                  productData?.categories }}</h4>
              </div>
            </div>

          </div>
          <div class="flex">
            <button @click="addToWishList"
              :class="['rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center ml-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300', { 'text-red-500': iconColor === 'red', 'text-gray-500 bg-gray-200': iconColor === 'black' }]">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              @click="shareBtn">
              <i class="fa-solid fa-share-nodes"></i>
            </button>
            <div v-if="showShareButtons" class="mt-2 ml-3">
              <button
                class="rounded-full w-7 h-7 bg-blue-600 text-white p-0 border-0 inline-flex items-center justify-center ml-4  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <i class="fa-brands fa-facebook-f"></i>
              </button>
              <button
                class="rounded-full w-7 h-7 bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white p-0 border-0 inline-flex items-center justify-center ml-4  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <i class="fa-brands fa-instagram"></i>
              </button>
              <button
                class="rounded-full w-7 h-7 bg-blue-400 text-white p-0 border-0 inline-flex items-center justify-center ml-4  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
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
import { ref, watch, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Rating from '../../reusable/Rating.vue';
import MightLike from '../MightLike.vue';
import DescriptionAndReviews from '../DescriptionAndReviews.vue';
import AuthAlert from '../../reusable/alerts/AuthAlert.vue';
import { auth } from "@/firebase/config";

export default {
  name: 'ProductDetails',

  components: { Rating, MightLike, DescriptionAndReviews, AuthAlert },

  setup() {
    const { t } = useI18n();

    const tab = ref(null);
    const showShareButtons = ref(false);
    const selectedCardIndex = ref(0);
    const selectedImg = ref(null);
    const selectedSize = ref(null);
    const productData = ref(null);
    const cart = ref([]);
    const totalItems = ref(null);
    const chosenItems = ref(1);
    const wishlist = ref([]);
    const open = ref(false);
    const message = ref("");
    const iconColor = ref('black');
    const isAddingToCart = ref(false);
    const buttonLabel = ref(t('btn.buy_now'));
    const productId = ref('');

    const store = useStore();
    const router = useRouter();

    const shareBtn = () => {
      showShareButtons.value = !showShareButtons.value;
    };

    const selectCard = (imgProperty) => {
      selectedImg.value = productData.value[imgProperty];
    };

    const addToCart = () => {
      if (!auth.currentUser) {
        open.value = true;
      } else {
        const cartData = JSON.parse(sessionStorage.getItem("cartData"))?.cartData || [];

        let isItem = cartData.find((item) => item.id == productData.value.id)
        let index = cartData.indexOf(isItem);

        if (isItem) {
          cart.value[index]["totalPrice"] =
            Number(cart.value[index].cartQty) * Number(cart.value[index].price);
          cart.value[index].cartQty = Number(chosenItems.value);
          Number(cart.value[index]["cart"]) * Number(cart.value[index]["price"]);
        } else {
          productData.value["cartQty"] = Number(chosenItems.value);
          productData.value["totalPrice"] =
            Number(productData.value.cartQty) *
            Number(productData.value.price);
          productData.value["date"] = new Date().toISOString();
          productData.value.id = productId.value
          cart.value.push(productData.value);
        }
        let obj = {
          userId: auth.currentUser.uid,
          cartData: cart.value
        }
        sessionStorage.setItem("cartData", JSON.stringify(obj));
        store.commit("cartItems", cart.value);
        store.commit("cartItemsCount", cart.value.length);
        isAddingToCart.value = true;
        buttonLabel.value = 'Adding...';
        setTimeout(() => {
          isAddingToCart.value = false;
          buttonLabel.value = 'Buy Now';
        }, 3000);
      }
    };

    const addToWishList = () => {
      if (!auth.currentUser) {
        open.value = true;
      } else {
        let index = store.getters.getWishlistItems.findIndex(item => item.id === productData.value.id);

        if (index == -1) {
          store.commit('addToWishlist', productData.value);
          wishlist.value.push(productData.value);
          sessionStorage.setItem('wishListData', JSON.stringify(store.getters.getWishlistItems));
        }
        store.commit('wishlistItemsCount', store.getters.getWishlistItems.length);
        iconColor.value = 'red';
        setTimeout(() => {
          iconColor.value = 'black';
        }, 3000);
      }
    };

    const cartTotalPrice = computed(() => {
      return cart.value.reduce((total, item) => {
        return total + item.cartQty * item.price;
      }, 0);
    });

    const resetIconColor = () => {
      iconColor.value = 'black';
    };

    watch(
      () => store.getters.getSelectedProduct,
      (data) => {
        if (data) {
          productData.value = data;
          selectedImg.value = productData.value['productImg'];
        }
      }
    );

    onMounted(() => {
      productId.value = router.currentRoute.value.params.id;

      store.dispatch("getProductById", productId.value);

      if (sessionStorage.getItem("cartData")) {
        cart.value = JSON.parse(sessionStorage.getItem("cartData"))['cartData'];
      }
    });

    return {
      tab,
      showShareButtons,
      selectedCardIndex,
      selectedImg,
      selectedSize,
      productData,
      cart,
      totalItems,
      chosenItems,
      wishlist,
      open,
      message,
      iconColor,
      isAddingToCart,
      buttonLabel,
      shareBtn,
      selectCard,
      addToCart,
      addToWishList,
      resetIconColor,
    };
  },
};
</script>
