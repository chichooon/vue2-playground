import Vue, { type Component } from "vue";

export const withMessage = (message: string) => (component: Component) => {
  return Vue.component("withMessage", {
    render: function (createElement) {
      return createElement(component, {
        props: {
          message: message,
        },
      });
    },
    mounted: function () {
      console.log(message + " mounted");
    },
  });
};
