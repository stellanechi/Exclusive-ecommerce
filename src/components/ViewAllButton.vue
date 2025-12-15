<script>
export default {
  name: "ViewAllButton",
  props: {
    Title: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div class="flex items-center">
    <button
      type="button"
      class="py-2.5 px-6 text-sm rounded-lg bg-red-500 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-700"
      @click="$emit('click')"
    >
      {{ Title }}
    </button>
  </div>
</template>
