<script>
export default {
  name: "HeroSection",
  data() {
    return {
      currentSlide: 3,
    };
  },
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex gap-8">
        <!-- Sidebar -->
        <div class="w-64 flex-shrink-0">
          <ul class="space-y-4 text-sm">
            <li
              class="flex justify-between items-center cursor-pointer hover:text-gray-600"
            >
              <span>Woman's Fashion</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li
              class="flex justify-between items-center cursor-pointer hover:text-gray-600"
            >
              <span>Men's Fashion</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li class="cursor-pointer hover:text-gray-600">Electronics</li>
            <li class="cursor-pointer hover:text-gray-600">Home & Lifestyle</li>
            <li class="cursor-pointer hover:text-gray-600">Medicine</li>
            <li class="cursor-pointer hover:text-gray-600">Sports & Outdoor</li>
            <li class="cursor-pointer hover:text-gray-600">Baby's & Toys</li>
            <li class="cursor-pointer hover:text-gray-600">Groceries & Pets</li>
            <li class="cursor-pointer hover:text-gray-600">Health & Beauty</li>
          </ul>
        </div>

        <!-- Main Banner -->
        <div class="flex-1 relative">
          <div class="bg-black rounded overflow-hidden relative h-80">
            <div
              class="absolute inset-0 flex items-center justify-between px-12"
            >
              <!-- Left Content -->
              <div class="text-white z-10">
                <div class="flex items-center gap-4 mb-4">
                  <svg
                    class="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                    />
                  </svg>
                  <span class="text-sm">iPhone 14 Series</span>
                </div>
                <h1 class="text-5xl font-semibold mb-6 leading-tight">
                  Up to 10%<br />off Voucher
                </h1>
                <a
                  href="#"
                  class="inline-flex items-center gap-2 text-white underline hover:no-underline"
                >
                  <span>Shop Now</span>
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              <!-- Right Image -->
              <div class="z-10">
                <img
                  src="../../assets/images/hero-image.png"
                  alt="hero-image"
                  class="w-96 h-auto object-contain"
                />
              </div>
            </div>

            <!-- Carousel Dots -->
            <div
              class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
            >
              <button
                v-for="dot in 5"
                :key="dot"
                :class="[
                  'w-3 h-3 rounded-full transition-all',
                  dot === 3 ? 'bg-red-500 w-3' : 'bg-white bg-opacity-50',
                ]"
                @click="currentSlide = dot"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
