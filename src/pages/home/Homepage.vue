<script>
import CountDown from "@/components/homefolder/CountDown.vue";
import Heading from "@/components/homefolder/Heading.vue";
import HeroSection from "@/components/homefolder/HeroSection.vue";
import NavBar from "@/components/navbar/NavBar.vue";

export default {
  name: "Homepage",
  components: {
    NavBar,
    HeroSection,
    Heading,
    CountDown,
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
  </div>
</template>
