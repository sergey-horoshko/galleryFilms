<template>
  <div v-if="!props.load" class="spinnerr">
    <div class="spinner-loading"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  load: {
    type: Boolean,
    default: false,
  },
});
</script>
