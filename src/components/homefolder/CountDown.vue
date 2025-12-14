<script>
export default {
  name: "FlashSalesCountdown",
  props: {
    endTime: {
      type: [String, Number, Date],
      required: true,
    },
  },
  data() {
    return {
      timeLeft: {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
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
      <h2 class="text-lg font-semibold text-gray-900">Flash Sales</h2>

      <!-- Countdown -->
      <div class="flex items-center space-x-4">
        <div class="text-center">
          <p class="text-xs text-gray-500">Days</p>
          <p class="text-lg font-bold">{{ timeLeft.days }}</p>
        </div>
        <div class="text-center">
          <p class="text-xs text-gray-500">Hours</p>
          <p class="text-lg font-bold">{{ timeLeft.hours }}</p>
        </div>
        <div class="text-center">
          <p class="text-xs text-gray-500">Minutes</p>
          <p class="text-lg font-bold">{{ timeLeft.minutes }}</p>
        </div>
        <div class="text-center">
          <p class="text-xs text-gray-500">Seconds</p>
          <p class="text-lg font-bold text-red-500">
            {{ timeLeft.seconds }}
          </p>
        </div>
      </div>
    </div>

    <!-- Right -->
    <div class="flex items-center space-x-2">
      <button
        @click="prev"
        class="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-gray-100"
      >
        ‹
      </button>
      <button
        @click="next"
        class="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-gray-100"
      >
        ›
      </button>
    </div>
  </div>
</template>
