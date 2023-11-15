<template>
  <span>{{ message }}</span>
</template>

<script lang="ts">
export default {
  name: "BComponent",
  props: {
    message: String,
  },
};
</script>
