<script>
export default {
  name: "ViewAllButton",
  props: {
    title: {
      type: String,
      default: "View All",
    },
  },
};
</script>

<template>
  <div class="flex items-center">
    <button
      type="button"
      class="py-2.5 px-6 text-sm rounded-lg bg-[#DB4444] text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-700"
      @click="$emit('click')"
    >
      {{ title }}
    </button>
  </div>
</template>
