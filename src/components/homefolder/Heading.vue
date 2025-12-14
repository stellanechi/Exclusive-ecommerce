<script>
export default {
  name: "Headings",
  props: {
    label: {
      type: String,
      default: "Today's",
    },
    color: {
      type: String,
      default: "bg-red-500",
    },
  },
};
</script>

<template>
  <div class="flex items-center space-x-2">
    <span class="w-5 h-12 rounded-sm" :class="color"></span>
    <span class="text-sm font-medium text-red-500">
      {{ label }}
    </span>
  </div>
</template>
