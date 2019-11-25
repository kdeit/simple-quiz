import Vue from "vue";
import "es6-promise/auto";
import "babel-polyfill";
import velocity from "velocity-animate";
import store from "./vue/store.js";
import screen1 from "./vue/screen1"
import screen2 from "./vue/screen2"
import screen3 from "./vue/screen3"
import screen4 from "./vue/screen4"
import screen5 from "./vue/screen5"
import screen6 from "./vue/screen6"
import screen7 from "./vue/screen7"
import screen8 from "./vue/screen8"
import pagination from "./vue/pagination"

require('velocity-animate/velocity.ui');
require("./sass/_app.scss");
Vue.prototype.$velocity = velocity;

const app = new Vue({
  el: "#app",
  store,
  components: { screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, pagination },
  data: function () {
    return {

    };
  },
  created() { },
  mounted() { },
  watch: {

  },
  methods: {
    leave(el, done) {
      el.style.display = "none";
      done();

    },
    beforeEnter(el) {
      this.$velocity(el, "fadeOut", { delay: 0, duration: 0 });

    },
    enter(el, done) {
      this.$velocity(el, "fadeIn", { delay: 0, duration: 500 });
      done();
    }
  }
});
