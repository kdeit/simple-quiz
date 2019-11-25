<template>
  <div class="pagin flex flex--j__spaceB flex--a__center">
    <div
      class="pagin__start pagin__round"
      v-bind:class="{'pagin__round_active': $store.getters.index==0}"
    >
      <div
        class="pagin__item__link"
        @click="$store.commit('setIndex',0)"
        v-if="$store.getters.index!==0"
      ></div>
    </div>
    <div
      class="pagin__item pagin__round"
      v-bind:class="{'pagin__round_active': $store.getters.index==1}"
    >
      <div
        class="pagin__item__link"
        @click="$store.commit('setIndex',1)"
        v-if="$store.getters.index!==1"
      ></div>
    </div>
    <div
      class="pagin__item pagin__round"
      v-bind:class="{'pagin__round_active': $store.getters.index==2}"
    >
      <div
        class="pagin__item__link"
        @click="$store.commit('setIndex',2)"
        v-if="$store.getters.index!==2"
      ></div>
    </div>
    <div
      class="pagin__item pagin__round"
      v-bind:class="{'pagin__round_active': $store.getters.index==3}"
    >
      <div
        class="pagin__item__link"
        @click="$store.commit('setIndex',3)"
        v-if="$store.getters.index!==3"
      ></div>
    </div>
    <div
      class="pagin__item pagin__round"
      v-bind:class="{'pagin__round_active': $store.getters.index==4}"
    >
      <div
        class="pagin__item__link"
        @click="$store.commit('setIndex',4)"
        v-if="$store.getters.index!==4"
      ></div>
    </div>
    <div
      class="pagin__item pagin__round"
      v-bind:class="{'pagin__round_active': $store.getters.index==5}"
    >
      <div
        class="pagin__item__link"
        @click="$store.commit('setIndex',5)"
        v-if="$store.getters.index!==5"
      ></div>
    </div>
    <div
      class="pagin__item pagin__round"
      v-bind:class="{'pagin__round_active': $store.getters.index==6}"
    >
      <div
        class="pagin__item__link"
        @click="$store.commit('setIndex',6)"
        v-if="$store.getters.index!==6"
      ></div>
    </div>
    <div
      class="pagin__finish pagin__round"
      v-bind:class="{'pagin__round_active': $store.getters.index==7}"
    ></div>
    <div class="pagin__line">
      <div class="pagin__line__inner"></div>
    </div>
  </div>
</template>


<style lang="scss">
@import "../sass/_variables.scss";
.pagin {
  width: 100%;
  max-width: 600px;
  height: 40px;
  position: relative;

  &__start {
    @include background-image(start-flag);
    width: 14px;
    height: 15px;
  }
  &__finish {
    @include background-image(finish-flag);
    width: 14px;
    height: 15px;
  }

  &__item {
    width: 10px;
    height: 10px;
    @include border-radius(50%);
    background: #fff;
    position: relative;
    z-index: 1;
    &__link {
      cursor: pointer;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 30px;
      height: 30px;
      @include transform(translateX(-50%) translateY(-50%));
      z-index: 2;
      @media all and (min-width: 400px) {
        width: 40px;
        height: 40px;
      }
      &:after {
        display: block;
        @include box-sizing;
        width: 80%;
        height: 80%;
        border: 1px solid #fff;
        content: "";
        position: absolute;
        left: 10%;
        top: 10%;
        @include border-radius(50%);
        @include transition;
        @include scale(0);
      }
      &:hover:after {
        @include scale(1);
      }
    }
  }

  &__round {
    position: relative;
    &:after {
      display: block;
      content: "";
      position: absolute;
      border: 1px solid #fff;
      @include border-radius(50%);
      left: 50%;
      top: 50%;
      @include transition;
      @include transform(translateX(-50%) translateY(-50%) scale(0));
      width: 30px;
      height: 30px;
      @media all and(min-width: 800px) {
        width: 40px;
        height: 40px;
      }
    }
    &_active {
      &:after {
        @include transform(translateX(-50%) translateY(-50%) scale(1));
      }
    }
  }
  &__line {
    &__inner {
      background: #fff;
      height: 1px;
      width: 100%;
    }
    width: 100%;
    padding: 0 40px;
    display: block;
    left: 0;
    position: absolute;
    top: 19px;
  }
}
</style>
<script type="text/ecmascript-6">
export default {
  name: "pagination",
  components: {},
  data: function() {
    return {};
  },
  mounted: function() {},
  computed: {},
  methods: {}
};
</script>