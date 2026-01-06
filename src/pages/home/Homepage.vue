<script>
import CountDown from "@/components/homefolder/CountDown.vue";
import Heading from "@/components/homefolder/Heading.vue";
import HeroSection from "@/components/homefolder/HeroSection.vue";
import Product from "@/components/homefolder/Product.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import ViewAllButton from "@/components/ViewAllButton.vue";

export default {
  name: "Homepage",
  components: {
    NavBar,
    HeroSection,
    Heading,
    CountDown,
    Product,
    ViewAllButton,
  },
  methods: {
    handleViewAll() {
      console.log("View all clicked");
    },
  },
};
</script>

<template>
  <div class="mb-20 px-[80px]">
    <NavBar />
    <HeroSection />
    <div class="mt-14">
      <Heading />
    </div>
    <div class="mt-10">
      <CountDown :endTime="Date.now() + 86400000" />
    </div>
    <div class="mt-10">
      <Product />
    </div>
    <div class="mt-20">
      <ViewAllButton title="View All Products" @click="handleViewAll" />
    </div>
    <!-- <span class="border-b border-solid border-amber-600"></span> -->
  </div>
</template>
