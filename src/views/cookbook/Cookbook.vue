<!--  -->
<script setup>
import { ref, reactive } from "vue";
import Swiper from './Swiper.vue'
import Searchbar from '@/components/Searchbar.vue'
import Hotcate from './Hotcate.vue'
</script>
<template>
  <div class=''>
    <Swiper></Swiper>
    <Searchbar
    outer-bg="#f5f5f5"
    inner-bg="#ffffff"
    :has-border="true"
    ></Searchbar>
    <Hotcate></Hotcate>
  </div>
</template>

<style lang='scss' scoped>
.swiper-container {
  height: 0;
  font-size: 0;
  padding-bottom: 66.6667%;
}
</style>