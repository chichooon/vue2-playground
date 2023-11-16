<template>
  <div>
    <h1>{{ complexObject.title }}</h1>
    <h2>{{ complexObject.description }}</h2>
    <p>{{ complexObject.body }}</p>
    <button @click="handleClickAddBody">클릭</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  data: function () {
    return {
      complexObject: {
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet",
      },
    };
  },
  methods: {
    handleClickAddBody: function () {
      Vue.set(
        this.complexObject,
        "body",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique viverra interdum. Nullam a quam vel metus fringilla blandit. Praesent semper non neque at eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque porta est eu felis cursus finibus. Nullam tincidunt molestie dolor quis accumsan. Aliquam auctor viverra urna, a tincidunt tortor consectetur eget. Quisque turpis sem, viverra id lacinia in, sagittis id arcu. Maecenas tempor scelerisque mauris, vitae fermentum massa efficitur non. Proin commodo sodales risus, non sagittis quam commodo vitae. Curabitur nec risus vehicula, laoreet sem at, faucibus turpis. Proin id iaculis dui."
      );
    },
  },
};
</script>
