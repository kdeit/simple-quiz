<template>
  <div class="flex flex--d__column w100">
    <div class="flex game2__wrapper order-1 order-lg-0">
      <div class="game2__txt m--r__1">
        <div
          class="qst__main p--l__1 p--r__1"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.</div>
        <form class="game2__form m--t__3" v-on:submit.prevent="check">
          <input
            type="text"
            v-model="answer"
            @keyup="valid"
            @change="valid"
            :disabled="finish"
            class="game2__input"
            placeholder="Enter answer"
            v-bind:class="{'game2__input_finish':finish}"
          />
        </form>
      </div>
      <div class="game2" ref="game2">
        <div class="game2__item" v-for="(item,index) in items" v-bind:key="index">
          <div class="game2__item__inner" v-bind:class="{'game2__item__inner_question': item==0}">
            <div v-if="item == 0" class="game2__item__digit">?</div>
            <div class="game2__item__digit" v-else>{{item}}</div>
          </div>
        </div>
      </div>
    </div>

    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <div
        class="m--b__4 riddle__answer__wrapper order-0 order-lg-1 game2__answer-wrapper"
        v-if="finish"
        v-bind:class="{'riddle__answer__wrapper_big': !result}"
      >
        <div
          class="riddle__answer riddle__answer_right flex flex--a__center"
          id="riddle__answer"
          v-if="result"
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            class="riddle__answer__round"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <div class="riddle__answer__ico riddle__answer__ico_right"></div>
          <div
            class="riddle__answer__txt flex flex--a__center p--l__1"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.</div>
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
          <div class="riddle__answer__ico riddle__answer__ico_wrong riddle__answer__ico_big"></div>
          <div
            class="riddle__answer__txt flex flex--a__center p--l__1 riddle__answer__txt_big"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.</div>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            class="riddle__answer__round riddle__answer__round_right"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
        <div class="m--t__4 flex flex--j__center">
          <div class="button" @click="$store.commit('setIndex',$store.getters.getGameNext)">next</div>
        </div>
      </div>
    </transition>
  </div>
</template>


<style lang="scss">
@import "../sass/_variables.scss";
@import "../sass/_typo.scss";
.game2 {
  width: 100%;
  max-width: 345px;
  @include flexbox;
  @include flex-wrap(wrap);
  @include align-self(flex-start);
  background: #fff;
  @include border-radius(50px);
  padding: 20px;
  position: relative;
  @include box-sizing;
  @include sizeByGridHor(margin-top, 4);
  box-shadow: 0 22px 44px 20px rgba(0, 0, 0, 0.2);
  @media all and (min-width: 1200px) {
    @include align-self(center);
    margin-top: 0;
  }
  &__txt {
    padding-left: 15px;
    padding-right: 15px;
    @media all and (min-width: 1200px) {
      width: 300px;
      @include flex(0, 1, 300px);
    }
  }
  &__wrapper {
    @include flex-direction(column);
    @media all and (min-width: 1200px) {
      @include flex-direction(row);
    }
  }

  &__item {
    width: 33.33333%;
    padding: 6px;
    @include box-sizing;
    &__inner {
      padding-bottom: 100%;
      background: $colorGrey;
      @include border-radius(25px);
      color: #fff;
      position: relative;
      @include transition;
      &_question {
        background: $colorMainLigth;
      }
    }
    &__digit {
      width: 100%;
      position: absolute;
      left: 0;
      top: 50%;
      text-align: center;
      @include transform(translateY(-50%));
      @include t-head-2;
    }
  }
  &__input {
    display: block;
    outline: none;
    background: none;
    @include box-sizing;
    border: 2px solid #fff;
    border-radius: 25px;
    line-height: 46px;
    height: 50px;
    letter-spacing: 5px;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    @include t-reg;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    &::placeholder {
      letter-spacing: 0px;
      @include opacity(0.56);
      color: #fff;
    }
    &_finish {
      background: #fff;
      color: $colorMain;
    }
  }
  &__answer-wrapper {
    @media all and (min-width: 992px) {
      @include sizeByGridHor(margin-top, 2);
    }
  }
}
</style>
<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
export default {
  name: "game2",
  components: {},
  data: function() {
    return {
      answerIndex: 5,
      answer: "",
      items: [7, 16, 9, 5, 21, 16, 9, 0, 4]
    };
  },
  created() {
    this.answer = this.$store.getters.getGame2;
  },
  computed: {
    ...mapGetters({ finishs: "getFinish", answers: "getAnswers" }),
    result() {
      return this.answers[this.answerIndex];
    },
    finish() {
      return this.finishs[this.answerIndex];
    }
  },

  methods: {
    valid() {
      this.answer = this.answer ? this.answer.replace(/^\D+/g, "") : "";
    },
    check(e) {
      e.preventDefault();
      this.$store.commit("addAnswer", {
        id: this.answerIndex,
        value: this.answer == 13
      });
      this.$store.commit("addFinish", { id: this.answerIndex, value: true });
      this.$store.commit("addGame2", this.answer);
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