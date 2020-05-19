"use strict";

Vue.mixin({
    computed: {
        $viewModel() {
          return ui.view;
        }
      },
      methods: {
          doClick() {
            this.$emit("click");
          }
      }
});