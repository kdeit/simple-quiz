<template>
  <div class="qst">
    <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 offset-lg-4 col-lg-2 offset-xl-5 col-xl-1">
        <div class="num d-none d-lg-block num_right">
          task
          <div class="num__digit">06</div>
        </div>
        <div class="d-lg-none num-mob flex flex--a__end p--b__3">
          <div class="num-mob__digit">06</div>
          <div class="m--l__1">task</div>
        </div>
      </div>
      <div class="qst__main flex flex--j__end col-12 col-sm-8 offset-sm-2 offset-lg-0 col-lg-6">
        <game2></game2>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import game2 from "./game2";
export default {
  name: "screen7",
  components: { game2 },
  data: function() {
    return {
      finish: true,
      result: true
    };
  }
};
</script>