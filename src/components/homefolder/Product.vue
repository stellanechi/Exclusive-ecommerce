<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "Product",
  components: { ProductCard },

  data() {
    return {
      baseUrl: "https://fakestoreapi.com/products",
      events: [],
    };
  },
  methods: {
    handleViewEvent(event) {
      this.$emit("event-selected", event);
    },
    async fetchEvents(limit = null) {
      try {
        const response = await fetch(this.baseUrl);
        const data = await response.json();

        // this.events = data.map((item) => ({
        this.events = (limit ? data.slice(0, limit) : data).map((item) => ({
          id: item.id,
          title: item.title,
          discount: item.discount,
          image: item.image,
          price: item.price,
          originalPrice: item.originalPrice,
          rating: item.rating,
          reviews: item.reviews,

          //   price: `$${item.price}`,
          //   category: item.category,
        }));
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
  },

  mounted() {
    this.fetchEvents(4);
  },
};
</script>

<template>
  <div>
    <div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <ProductCard
          v-for="(event, index) in events"
          :key="index"
          :id="event.id"
          :discount="40"
          :title="event.title"
          :date="event.date"
          :description="event.description"
          :image="event.image"
          :link="event.link"
          :price="event.price"
          :original-price="event.originalPrice"
          :rating="5"
          :reviews="88"
          @click="handleViewEvent(event)"
        />
      </div>
    </div>
  </div>
</template>
