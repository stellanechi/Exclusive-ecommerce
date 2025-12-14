<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
export default {
  name: "FlashSalesCountdown",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    endTime: {
      type: [String, Number, Date],
      required: true,
    },
  },
  data() {
    return {
      timeLeft: {
        days: "03",
        hours: "23",
        minutes: "19",
        seconds: "56",
      },
      timer: null,
    };
  },
  mounted() {
    this.startCountdown();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    startCountdown() {
      const end = new Date(this.endTime).getTime();

      this.timer = setInterval(() => {
        const now = new Date().getTime();
        const diff = end - now;

        if (diff <= 0) {
          clearInterval(this.timer);
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        this.timeLeft = {
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        };
      }, 1000);
    },
    prev() {
      this.$emit("prev");
    },
    next() {
      this.$emit("next");
    },
  },
};
</script>

<template>
  <div class="flex items-center justify-between w-full">
    <!-- Left -->
    <div class="flex items-center space-x-6">
      <h2 class="text-2xl font-semibold text-gray-900">Flash Sales</h2>

      <!-- Countdown -->
      <div class="flex items-center space-x-4">
        <div class="text-center">
          <p class="text-xs text-gray-500">Days</p>
          <p class="text-2xl font-bold">{{ timeLeft.days }}</p>
        </div>
        <div class="text-center">
          <p class="text-xs text-gray-500">Hours</p>
          <p class="text-2xl font-bold">{{ timeLeft.hours }}</p>
        </div>
        <div class="text-center">
          <p class="text-xs text-gray-500">Minutes</p>
          <p class="text-2xl font-bold">{{ timeLeft.minutes }}</p>
        </div>
        <div class="text-center">
          <p class="text-xs text-gray-500">Seconds</p>
          <p class="text-2xl font-bold text-red-500">
            {{ timeLeft.seconds }}
          </p>
        </div>
      </div>
    </div>

    <!-- Right -->
    <div class="flex items-center space-x-2">
      <button
        @click="prev"
        class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-100"
      >
        <ChevronLeftIcon class="w-5 h-5 text-gray-600" />
      </button>
      <button
        @click="next"
        class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-100"
      >
        › <ChevronRightIcon class="w-5 h-5 text-gray-600" />
      </button>
    </div>
  </div>
</template>
