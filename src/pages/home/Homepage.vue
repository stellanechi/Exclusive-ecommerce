<script>
import HeroSection from "@/components/homefolder/HeroSection.vue";
import NavBar from "@/components/navbar/NavBar.vue";

export default {
  name: "Homepage",
  components: {
    NavBar,
    HeroSection,
  },
};
</script>

<template>
  <div class="mb-20">
    <NavBar />
    <HeroSection />
  </div>
</template>
