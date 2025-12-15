<script>
export default {
  name: "ProductCard",
  props: {
    discount: {
      type: Number,
      default: null,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
      default: null,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isWishlisted: false,
    };
  },
  methods: {
    toggleWishlist() {
      this.isWishlisted = !this.isWishlisted;
    },
  },
};
</script>

<template>
  <div class="w-64 bg-white group">
    <!-- Image Container -->
    <div
      class="relative bg-gray-100 flex items-center justify-center h-48 mb-3"
    >
      <!-- Discount Badge -->
      <span
        v-if="discount"
        class="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded"
      >
        -{{ discount }}%
      </span>

      <!-- Product Image -->
      <img
        :src="image"
        :alt="title"
        class="max-h-32 max-w-full object-contain"
      />

      <!-- Action Buttons -->
      <div class="absolute top-3 right-3 flex flex-col gap-2">
        <button
          @click="toggleWishlist"
          class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
        >
          <svg
            class="w-5 h-5"
            :fill="isWishlisted ? 'currentColor' : 'none'"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <button
          class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>
      </div>

      <!-- Add to Cart Button -->
      <button
        class="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add To Cart
      </button>
    </div>

    <!-- Product Info -->
    <div>
      <h3 class="text-sm font-medium mb-2 line-clamp-1">{{ title }}</h3>

      <!-- Price -->
      <div class="flex items-center gap-3 mb-2">
        <span class="text-red-500 font-semibold">${{ price }}</span>
        <span v-if="originalPrice" class="text-gray-400 line-through text-sm">
          ${{ originalPrice }}
        </span>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-2">
        <div class="flex">
          <svg
            v-for="i in 5"
            :key="i"
            :class="[
              'w-4 h-4',
              i <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300',
            ]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        <span class="text-gray-500 text-sm">({{ reviews }})</span>
      </div>
    </div>
  </div>
</template>

<!-- 
USAGE EXAMPLE:

<product-card
  :discount="40"
  image="path/to/image.jpg"
  title="HAVIT HV-G92 Gamepad"
  :price="120"
  :original-price="160"
  :rating="5"
  :reviews="88"
/>
-->
