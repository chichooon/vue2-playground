<template>
  <div>
    <a-component />
    <b-component />
  </div>
</template>

<script lang="ts">
import AComponent from "@/components/hoc/AComponent.vue";
import BComponent from "@/components/hoc/AComponent.vue";
import { withMessage } from "@/components/hoc/withMessage";

export default {
  name: "HOCView",
  components: {
    "a-component": withMessage("A Component")(AComponent),
    "b-component": withMessage("B Component")(BComponent),
  },
};
</script>
