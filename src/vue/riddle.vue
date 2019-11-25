<template>
  <div class="riddle">
    <div class="riddle__txt" v-html="txt"></div>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <div v-if="!finish" class="m--t__4" v-bind:key="nextIndex">
        <div class="flex flex--d__column" v-if="!buttons">
          <div class="riddle__var" @click="select(1)" v-html="var1"></div>
          <div class="m--t__2"></div>
          <div class="riddle__var" @click="select(2) " v-html="var2"></div>
        </div>
        <div else class="flex flex--j__center" v-if="buttons == true">
          <div class="button" @click="select(1)" v-html="var1"></div>
          <div class="m--l__2"></div>
          <div class="button" @click="select(2) " v-html="var2"></div>
        </div>
      </div>

      <div
        v-if="finish"
        class="m--t__4 riddle__answer__wrapper"
        id="riddle__answer__wrapper"
        v-bind:class="{'riddle__answer__wrapper_big': right.length > 150 && result, 'riddle__answer__wrapper_big': wrong.length > 150 && !result}"
      >
        <div
          class="riddle__answer riddle__answer_right flex flex--a__center"
          v-if="result"
          id="riddle__answer"
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            class="riddle__answer__round"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>

          <div
            class="riddle__answer__ico riddle__answer__ico_right"
            v-bind:class="{'riddle__answer__ico_big': right.length > 150}"
          ></div>
          <div
            class="riddle__answer__txt flex flex--a__center p--l__1"
            v-html="right"
            v-bind:class="{'riddle__answer__txt_big': right.length > 150}"
          ></div>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            class="riddle__answer__round riddle__answer__round_right"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
        <div
          class="riddle__answer riddle__answer_wrong flex flex--a__center"
          v-else
          id="riddle__answer"
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            class="riddle__answer__round"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <div
            class="riddle__answer__ico riddle__answer__ico_wrong"
            v-bind:class="{'riddle__answer__ico_big': wrong.length > 150}"
          ></div>
          <div
            class="riddle__answer__txt flex flex--a__center p--l__1"
            v-html="wrong"
            v-bind:class="{'riddle__answer__txt_big': wrong.length > 150}"
          ></div>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            class="riddle__answer__round riddle__answer__round_right"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
        <div class="m--t__4"></div>
        <div class="t--a__right">
          <div class="button" @click="$store.commit('setIndex',nextIndex)">next</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
export default {
  name: "riddle",
  props: [
    "txt",
    "var1",
    "var2",
    "right",
    "wrong",
    "rightVar",
    "nextIndex",
    "buttons",
    "resultIndex"
  ],
  computed: {
    ...mapGetters({ finishs: "getFinish", answers: "getAnswers" }),
    result() {
      return this.answers[this.resultIndex];
    },
    finish() {
      return this.finishs[this.resultIndex];
    }
  },

  methods: {
    select: function(s) {
      this.$store.commit("addAnswer", {
        id: this.resultIndex,
        value: s == this.rightVar
      });
      this.$store.commit("addFinish", { id: this.resultIndex, value: true });
    },
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
};
</script>