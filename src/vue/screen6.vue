<template>
  <div class="qst">
    <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 offset-lg-4 col-lg-2 offset-xl-5 col-xl-1">
        <div class="num d-none d-lg-block num_right">
          task
          <div class="num__digit">05</div>
        </div>
        <div class="d-lg-none num-mob flex flex--a__end p--b__3">
          <div class="num-mob__digit">05</div>
          <div class="m--l__1">task</div>
        </div>
      </div>
      <div
        class="qst__main flex flex--j__end col-12 col-sm-8 offset-sm-2 offset-lg-0 col-lg-5 offset-xl-1 col-xl-4 offset-xxl-0"
      >
        <riddle
          :txt="txt"
          :var1="var1"
          :var2="var2"
          :wrong="wrong"
          :right="right"
          :rightVar="rightVar"
          :nextIndex="6"
          :buttons="true"
          :resultIndex="4"
        ></riddle>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import riddle from "./riddle";
export default {
  name: "screen6",
  components: { riddle },
  data: function() {
    return {
      txt:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.</p>",
      var1: "Answer 1",
      var2: "Answer 2",
      wrong:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.",
      right:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.",
      rightVar: 2
    };
  }
};
</script>