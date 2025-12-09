<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      email: "",
      accountLinks: [
        { text: "My Account", href: "#" },
        { text: "Login / Register", href: "#" },
        { text: "Cart", href: "#" },
        { text: "Wishlist", href: "#" },
        { text: "Shop", href: "#" },
      ],
      quickLinks: [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms Of Use", href: "#" },
        { text: "FAQ", href: "#" },
        { text: "Contact", href: "#" },
      ],
      socialLinks: [
        {
          name: "Facebook",
          icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
          href: "#",
        },
        {
          name: "Twitter",
          icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
          href: "#",
        },
        {
          name: "Instagram",
          icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11v11h-11z M21 6.5a2 2 0 00-2-2h-14a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2v-11z",
          href: "#",
        },
        {
          name: "LinkedIn",
          icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
          href: "#",
        },
      ],
    };
  },
  methods: {
    handleSubscribe() {
      if (this.email) {
        console.log("Subscribing:", this.email);
        // Add your subscription logic here
      }
    },
  },
};
</script>

<template>
  <footer class="bg-black text-white">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
      >
        <!-- Exclusive Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Exclusive</h3>
          <div class="space-y-3">
            <p class="text-sm">Subscribe</p>
            <p class="text-sm">Get 10% off your first order</p>
            <div class="relative">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="w-full bg-transparent border border-white rounded px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white pr-10"
                @keyup.enter="handleSubscribe"
              />
              <button
                @click="handleSubscribe"
                class="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Support Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Support</h3>
          <div class="space-y-3 text-sm">
            <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        <!-- Account Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Account</h3>
          <ul class="space-y-3 text-sm">
            <li v-for="(link, index) in accountLinks" :key="index">
              <a :href="link.href" class="hover:underline">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Quick Link Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Quick Link</h3>
          <ul class="space-y-3 text-sm">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a :href="link.href" class="hover:underline">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Download App Section -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Download App</h3>
          <div class="space-y-3">
            <p class="text-xs text-gray-400">Save $3 with App New User Only</p>

            <div class="flex gap-2">
              <!-- QR Code Placeholder -->
              <div
                class="w-20 h-20 bg-white rounded flex-shrink-0 flex items-center justify-center"
              >
                <img src="../../assets/images/qrcode.jpg" alt="qrcode" />
              </div>

              <!-- App Store Buttons -->
              <div class="flex flex-col gap-2">
                <a
                  href="#"
                  class="bg-black border border-white rounded px-3 py-1.5 text-xs flex items-center gap-1 cursor-pointer hover:bg-gray-900"
                >
                  <span class="text-lg">▶</span>
                  <div>
                    <div class="text-[8px] text-gray-400">GET IT ON</div>
                    <div class="font-semibold text-[11px]">Google Play</div>
                  </div>
                </a>
                <a
                  href="#"
                  class="bg-black border border-white rounded px-3 py-1.5 text-xs flex items-center gap-1 cursor-pointer hover:bg-gray-900"
                >
                  <span class="text-lg"></span>
                  <div>
                    <div class="text-[8px] text-gray-400">Download on the</div>
                    <div class="font-semibold text-[11px]">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            <!-- Social Media Icons -->
            <div class="flex gap-4 pt-2">
              <a
                v-for="(social, index) in socialLinks"
                :key="index"
                :href="social.href"
                :aria-label="social.name"
                class="hover:text-gray-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p class="text-center text-sm text-gray-500">
          © Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  </footer>
</template>
