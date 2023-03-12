<!--  -->
<script setup>
import { ref, reactive } from "vue";
import searchIcon from "@/assets/images/search.png";
defineProps(["outer-bg", "inner-bg", "has-border"]);
</script>
<template>
  <div class='searchbar-wrapper' :style="{backgroundColor: outerBg}">
    <div :style="{backgroundColor: innerBg}" :class="{'hasborder': hasBorder}">
      <img :src="searchIcon" alt="">
      <p>想吃什么搜索这里</p>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import '@/assets/border.scss';
.searchbar-wrapper {
  padding: 10px 15px;
  //  background-color: #f5f5f5;
  > div {
    width: 100%;
    height: 40px;
    // background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.hasborder {
      // border: 1px solid red;
    @include border(1px, blue, solid, 4px);//$width, $color, $style, $radius
    }
    img {
      width: 20px;
    }
  }
}
</style>