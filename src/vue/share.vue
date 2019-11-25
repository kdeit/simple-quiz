<template>
  <div class="share flex flex--a__center">
    <div class="share__txt t-reg">share result:</div>
    <a v-bind:href="linkVk" target="_blank" class="share__icon share__icon_vk m--l__1"></a>
    <a v-bind:href="linkFb" target="_blank" class="share__icon share__icon_fb m--l__1"></a>
  </div>
</template>


<style lang="scss">
@import "../sass/_variables.scss";
.share {
  &__txt {
    letter-spacing: 1.44px;
  }
  &__icon {
    width: 40px;
    height: 40px;
    display: block;
    &_vk {
      @include background-image(vk-logo);
    }
    &_fb {
      @include background-image(facebook-logo);
    }
    &:hover {
      box-shadow: 0 13px 29px 0 rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
<script type="text/ecmascript-6">
export default {
  name: "share",
  props: ["rightAnswersCount"],
  data() {
    return {
      links: [358, 1024, 2111, 35, 456, 888, 22]
    };
  },
  computed: {
    linkFb: function() {
      var val =
        "http://www.facebook.com/sharer.php?" +
        "u=" +
        encodeURIComponent(
          "https://sitename.com/?answer=" + this.links[this.rightAnswersCount]
        );

      return val;
    },
    linkVk: function() {
      console.warn(this.links[this.rightAnswersCount]);
      let val =
        "https://vk.com/share.php?url=https://sitename.com/?answer=" +
        this.links[this.rightAnswersCount];
      return val;
    }
  }
};
</script>