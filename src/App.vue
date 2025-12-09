<script>
import Footer from "./components/footer/Footer.vue";

export default {
  name: "App",

  components: {
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>
