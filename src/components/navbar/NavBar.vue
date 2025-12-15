<script>
export default {
  name: "ECommerceNavbar",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="">
    <!-- Top Banner -->
    <div class="bg-black text-white text-xs py-2">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex-1"></div>
        <div class="text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="#" class="font-semibold underline ml-2">ShopNow</a>
        </div>
        <div class="flex-1 flex justify-end">
          <select class="bg-black text-white border-none outline-none text-xs">
            <option>English</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="text-2xl font-bold">Exclusive</div>

          <!-- Nav Links -->
          <div class="flex space-x-8">
            <a href="#" class="text-sm hover:underline">Home</a>
            <a href="#" class="text-sm hover:underline">Contact</a>
            <a href="#" class="text-sm hover:underline">About</a>
            <a href="#" class="text-sm hover:underline">Sign Up</a>
          </div>

          <!-- Right Section -->
          <div class="flex items-center space-x-4">
            <!-- Search Bar -->
            <div class="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                class="bg-gray-100 text-xs py-2 px-4 pr-10 rounded w-60 outline-none"
              />
              <svg
                class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <!-- Wishlist Icon -->
            <button class="p-1">
              <svg
                class="w-6 h-6"
                fill="none"
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

            <!-- Cart Icon -->
            <button class="p-1">
              <svg
                class="w-6 h-6"
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
