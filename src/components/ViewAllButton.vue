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
    <div>
      <button
        type="button"
        class="py-2.5 px-6 text-sm border-none bg-[#DB4444] text-white cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-red-700"
        @click="$emit('click')"
      >
        {{ title }}
      </button>
    </div>
  </div>
</template>
