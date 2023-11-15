<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
export default {
  name: "AComponent",
  props: {
    message: String,
  },
};
</script>
