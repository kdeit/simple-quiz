<template>
  <div class="row">
    <div
      class="screen col-12 col-sm-8 offset-sm-2 offset-lg-4 offset-xl-5 col-xl-5 offset-xxl-6 col-xxl-5"
    >
      <div class="head">
        Welcome
        <br />from CompanyName
        <br />Lorem ipsum dolor
        <br />Consectetur adipisicing
        <br />Quis nostrud!
      </div>
      <div class="txt m--t__2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit</p>
      </div>

      <div class="m--t__4"></div>
      <div class="button button_right" @click="$store.commit('setIndex',1)">Take the test</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "screen1",
  components: {},
  data: function() {
    return {};
  },
  mounted: function() {},
  computed: {},
  methods: {}
};
</script>