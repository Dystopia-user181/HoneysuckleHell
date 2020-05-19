"use strict";

Vue.component("primary-button", {
    props: {
      enabled: {
        type: Boolean,
        default: true
      }
    },
    template:
      `<button :class="class" v-on="$listeners">
        <slot/>
      </button>`,
    computed: {
      class() {
        return {
          "o-primary-button": true,
          "o-primary-button--disabled": !this.enabled,
        };
      }
    }
  });