<template>
  <div class="qst">
    <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 offset-lg-4 col-lg-2 offset-xl-5 col-xl-1">
        <div class="num num_right">
          <div class="num__title">result</div>
          <div class="num__digit num__digit_bold">{{$store.getters.rightAnswers}}/6</div>
        </div>
      </div>

      <div
        class="screen flex flex--j__end col-12 col-sm-8 offset-sm-2 offset-lg-0 col-lg-5 offset-xl-1 col-xl-4 offset-xxl-1"
      >
        <div class="screen__inner">
          <div
            class="head"
            v-if="$store.getters.rightAnswers < 6"
          >Mission not completed, Lorem ipsum dolor sit amet!</div>

          <div
            class="head"
            v-if="$store.getters.rightAnswers == 6"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.!</div>

          <div
            v-if="$store.getters.rightAnswers < 6"
            class="txt m--t__2"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.</div>
          <div
            v-if="$store.getters.rightAnswers == 6"
            class="txt m--t__2"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.</div>
          <div class="m--t__4"></div>
          <a href="/" class="button button_right">Register</a>
          <div class="m--t__4"></div>
          <share :right-answers-count="$store.getters.rightAnswers"></share>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import share from "./share";
export default {
  name: "screen8",
  components: { share }
};
</script>