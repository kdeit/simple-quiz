<template>
  <div
    class="game__wrapper flex col-12 offset-sm-2 col-sm-8 offset-lg-0 col-lg-6 col-xl-6 col-xxxl-5"
  >
    <div v-if="finish" class="flex game__summary" v-bind:class="{'game__summary_open':finish}">
      <div class="order-1 order-lg-0 game__result_top">
        <div class="num">
          <div class="num__title">score</div>
          <div class="num__digit num__digit_bold">{{count}}</div>
        </div>
        <div class="num">
          <div class="num__title">steps</div>

          <div class="num__digit num__digit_bold">{{path.length-1}}</div>
        </div>
      </div>
      <div class="m--t__2 order-2 d-lg-none">
        <div class="button" @click="$store.commit('setIndex',2)">next</div>
      </div>

      <div class="game__result__txt order-0">
        <div class="game__car"></div>
        <div class="m--t__2"></div>
        <div
          class="m--t__4 riddle__answer__wrapper riddle__answer__wrapper_min-padding"
          v-if="finish"
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
            <div class="riddle__answer__ico riddle__answer__ico_right riddle__answer__ico_big"></div>
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
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua. :)</div>
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              class="riddle__answer__round riddle__answer__round_right"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
          <div class="m--t__4 order-2 d-none d-lg-block">
            <div class="button" @click="$store.commit('setIndex',2)">next</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="game order-1 order-lg-2"
      ref="game"
      v-if="!finish"
      v-bind:class="{'game_closed':!finish}"
    >
      <div
        class="game__move"
        ref="chip"
        v-bind:style="{ transform: 'translateX('+ currentTranslateXY[0]+'px) translateY('+currentTranslateXY[1]+'px)'}"
      ></div>
      <div class="game__item" ref="gameItem" @click="move(0)">
        <div
          class="game__item__inner game__item__inner_start game__item__inner_in-path"
          v-bind:class="{'game__item__inner_active': current==0,
          'game__item__inner_avaliable': avaliableMoves.find(i=>i == 0)
          }"
        ></div>
      </div>
      <div
        class="game__item"
        v-for="(item,index) in items"
        v-bind:key="index"
        @click="move(index+1)"
      >
        <div
          class="game__item__inner"
          v-bind:class="{'game__item__inner_active': current==index+1,
          'game__item__inner_avaliable': avaliableMoves.find(i=>i == index+1),
          'game__item__inner_in-path': path.find(i=>i == index+1)
          }"
        >
          <div v-if="item == 0"></div>
          <div class="game__item__digit" v-else>{{item}}</div>
        </div>
        <div
          class="game__item__left"
          v-if="(index+1)%5 !=0"
          v-bind:class="{'game__item__left_in-path':selectedPathLeft.includes(index) }"
        ></div>
        <div
          class="game__item__top"
          v-if="Math.floor((index+1) / 5) > 0"
          v-bind:class="{'game__item__top_in-path': selectedPathTop.includes(index) }"
        ></div>
      </div>
      <div class="game__item" @click="move(24)">
        <div
          class="game__item__inner game__item__inner_finish"
          v-bind:class="{'game__item__inner_active': current==24,
          'game__item__inner_avaliable': avaliableMoves.find(i=>i == 24)}
          "
        ></div>
        <div class="game__item__left"></div>
        <div class="game__item__top"></div>
      </div>
    </div>
    <div class="order-0 order-xl-2 game__result" v-if="!finish">
      <div class="num">
        <div class="num__title">score</div>
        <div class="num__digit num__digit_bold">{{count}}</div>
      </div>
      <div class="num">
        <div class="num__title">steps</div>
        <div class="num__digit num__digit_bold">{{path.length-1}}</div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "../sass/_variables.scss";
@import "../sass/_typo.scss";
.game {
  max-width: 550px;
  @include flexbox;
  @include flex-wrap(wrap);
  @include align-self(flex-start);
  background: #fff;
  @include border-radius(40px);
  padding: 10px;
  position: relative;
  @include box-sizing;
  width: 100%;
  @include sizeByGridHor(margin-top, 2);
  @media all and (min-width: 1100px) {
    margin-top: 0;
  }

  @media all and (min-width: 992px) {
    @include border-radius(50px);
    padding: 20px;
  }

  &_close {
    display: none;
  }

  &__wrapper {
    @include flex-direction(column);
    @include sizeByGridHor(margin-top, 3);
    @media all and (min-width: 992px) {
      margin-top: 0;
    }
    @media all and (min-width: 1100px) {
      @include flex-direction(row);
    }
  }

  &__car {
    @include background-image(group-24);
    width: 91px;
    height: 56px;

    @media all and (min-width: 1200px) {
      width: 130px;
      height: 80px;
    }
  }
  &__move {
    width: 75px * 0.5;
    height: 49px * 0.5;
    @include background-image(group-24);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    @include transition;
    @media all and (min-width: 450px) {
      width: 75px * 0.7;
      height: 49px * 0.7;
    }

    @media all and (min-width: 1200px) {
      width: 75px;
      height: 49px;
    }
  }
  &__item {
    width: 20%;
    @include box-sizing;
    padding: 2px;
    position: relative;
    @media all and (min-width: 992px) {
      padding: 6px;
    }
    &__left {
      position: absolute;
      height: 5px;
      top: 50%;
      background: $colorGrey;
      z-index: 99;
      width: 4px;
      left: -2px;
      @include transform(translateY(-50%));
      z-index: 0;
      @media all and (min-width: 992px) {
        left: -6px;
        width: 12px;
      }
      &_in-path {
        background: $colorMain;
      }
    }
    &__top {
      position: absolute;
      width: 5px;
      left: 50%;
      background: $colorGrey;
      z-index: 99;
      height: 4px;
      top: -2px;
      @include transform(translateX(-50%));
      z-index: 0;
      @media all and (min-width: 992px) {
        top: -6px;
        height: 12px;
      }
      &_in-path {
        background: $colorMain;
      }
    }
    &__inner {
      padding-bottom: 100%;
      background: $colorGrey;
      @include border-radius(50%);
      color: #fff;
      position: relative;
      @include transition;
      @media all and (min-width: 992px) {
        @include border-radius(25px);
      }

      &_in-path {
        background: $colorMain;
      }

      &_active {
        background: $colorMain !important;
        box-shadow: 0 0 30px 0 #f1263a !important;
        > div {
          font-size: 0;
        }
      }
      &_avaliable {
        cursor: pointer;

        &:hover {
          @include box-shadow;
          > div {
            color: $colorMain;
          }
        }
      }
      &_start,
      &_finish {
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto 60% !important;
      }
      &_start {
        @include background-image(start-flag);
      }
      &_finish {
        background-image: url("../static/img/finish-flag-game.png");
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
  &__result {
    @include flexbox;

    > div {
      @include sizeByGridHor(margin-right, 2);
    }
    @media all and (min-width: 1100px) {
      width: 130px;
      @include flex(0, 0, 130px);
      order: 3 !important;
      @include flex-direction(column);
      @include sizeByGridHor(margin-left, 2);
    }
    &_top {
      @include flexbox;
      @include order(1);
      @include sizeByGridHor(margin-top, 2);
      > div {
        @include sizeByGridHor(margin-right, 2);
      }
      @media all and (min-width: 992px) {
        @include flex-direction(column);
        @include sizeByGridHor(margin-left, 2);
        @include sizeByGridHor(margin-top, 0);
      }
    }
    &__txt {
      @include order(0);
      @media all and (min-width: 992px) {
        @include sizeByGridHor(padding-left, 6);
      }
    }
  }
  &__summary {
    @include flexbox;
    @include flex-direction(column);
    @include transition;
    @include opacity(0);

    @media all and (min-width: 992px) {
      @include flex-direction(row);
      order: 0 !important;
    }
    &_open {
      @include opacity(1);
    }
  }
}
</style>
<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
export default {
  name: "game",
  components: {},
  data: function() {
    return {
      answerIndex: 0,
      current: 0,
      maxMoves: 8,
      path: [0],
      items: [
        29,
        11,
        27,
        13,
        12,
        7,
        18,
        28,
        15,
        9,
        1,
        7,
        11,
        27,
        10,
        27,
        16,
        4,
        9,
        21,
        9,
        9,
        3
      ],
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
    document.addEventListener("keydown", this.keyboardHandler);
  },
  destroyed() {
    document.removeEventListener("keydown", this.keyboardHandler);
  },
  computed: {
    ...mapGetters({ finishs: "getFinish", answers: "getAnswers" }),
    result() {
      return this.answers[this.answerIndex];
    },
    finish() {
      return this.finishs[this.answerIndex];
    },

    count() {
      var res = 0;
      res = this.path.reduce((sum, current) => {
        return current == 24
          ? sum
          : current != 0
          ? sum + this.items[current - 1]
          : 0;
      }, 0);
      return res;
    },
    avaliableMoves() {
      let result = [],
        row = Math.floor(this.current / 5),
        col = this.current % 5;
      if (row > 0) {
        result.push((row - 1) * 5 + col);
      }
      if (row < 4) {
        result.push((row + 1) * 5 + col);
      }
      if (col > 0) {
        result.push(row * 5 + col - 1);
      }
      if (col < 4) {
        result.push(row * 5 + col + 1);
      }
      return result.filter(i => !this.path.includes(i));
    },
    selectedPathLeft() {
      let res = [];
      for (let i = 0; i <= this.items.length; i++) {
        if (
          this.path.includes(i + 1) &&
          (this.path[this.path.indexOf(i + 1) - 1] == i ||
            this.path[this.path.indexOf(i + 1) + 1] == i)
        ) {
          res.push(i);
        }
      }
      return res;
    },
    selectedPathTop() {
      let res = [];
      for (let i = 0; i <= this.items.length; i++) {
        if (
          this.path.includes(i + 1) &&
          (this.path[this.path.indexOf(i + 1) - 1] == i - 4 ||
            this.path[this.path.indexOf(i + 1) + 1] == i - 4)
        ) {
          res.push(i);
        }
      }
      return res;
    },
    currentTranslateXY() {
      if (!this.isMounted) {
        return 0;
      }

      let itemWidth = this.$refs.gameItem.scrollWidth,
        chipWidth = this.$refs.chip.clientWidth,
        chipHeight = this.$refs.chip.clientHeight,
        wrapperPadding = window.innerWidth < 992 ? 10 : 20,
        xPos = this.current % 5,
        valueX =
          wrapperPadding + xPos * itemWidth + itemWidth / 2 - chipWidth / 2,
        valueY =
          wrapperPadding +
          Math.floor(this.current / 5) * itemWidth +
          itemWidth / 2 -
          chipHeight / 2;
      return [valueX, valueY];
    }
  },
  methods: {
    move(index) {
      if (!this.avaliableMoves.find(i => i == index) || this.finish) {
        return false;
      }
      this.current = index;
      this.path.push(this.current);
      this.checkResult();
    },
    checkResult() {
      if (this.path.length == this.maxMoves + 1 || this.current == 24) {
        let res = this.path.length == this.maxMoves + 1 && this.count == 100;
        this.$store.commit("addAnswer", {
          id: this.answerIndex,
          value: res
        });
        this.$store.commit("addFinish", { id: this.answerIndex, value: true });
      }
    },

    keyboardHandler(event) {
      switch (event.keyCode) {
        case 37:
          event.preventDefault();
          this.left();
          break;
        case 38:
          event.preventDefault();
          this.up();
          break;
        case 39:
          event.preventDefault();
          this.right();
          break;
        case 40:
          event.preventDefault();
          this.down();
          break;
      }
    },
    left() {
      let leftItem = this.current - 1;
      this.move(leftItem);
    },
    right() {
      let rightItem = this.current + 1;
      this.move(rightItem);
    },
    up() {
      let topItem = this.current - 5;
      this.move(topItem);
    },
    down() {
      let downItem = this.current + 5;
      this.move(downItem);
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