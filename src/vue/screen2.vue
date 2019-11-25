<template>
  <div class="qst">
    <div class="row">
      <div class="col-12 offset-sm-2 col-sm-8 offset-lg-4 col-lg-2 offset-xl-4 t--a__right">
        <div class="num num_right d-none d-lg-block">
          task
          <div class="num__digit">01</div>
        </div>
        <div class="d-lg-none num-mob flex flex--a__end">
          <div class="num-mob__digit">01</div>
          <div class="m--l__1">task</div>
        </div>

        <div class="qst__add-txt" v-if="!$store.getters.getGame">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p>Only 8 steps && 100 score</p>
        </div>
      </div>

      <game></game>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import game from "./game";
export default {
  name: "screen2",
  components: { game },
  data: function() {
    return {};
  },
  mounted: function() {},
  computed: {},
  methods: {}
};
</script>