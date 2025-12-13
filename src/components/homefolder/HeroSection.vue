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
    <div class="max-w-7xl mx-auto py-8">
      <div class="flex gap-8">
        <!-- Sidebar -->
        <div class="w-40 flex-shrink-0 divide-solid divide-indigo-500">
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
        <div>
          <!-- Right Image -->
          <div class="relative h-80">
            <div class="z-10">
              <img
                src="../../assets/images/hero-image.png"
                alt="hero-image"
                class="w-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
