<!--  -->
<script setup>
import {ref,reactive} from 'vue'
import cookbook from '@/assets/images/cookbook.png'
import cookbookActive from '@/assets/images/cookbook-active.png'
const active = ref(0);
</script>
<template>
<div class=''>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="search">
    <span>菜谱大全</span>
    <template #icon="props">
      <img :src="props.active ? cookbookActive : cookbook" alt="">
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
</div>
</template>

<style lang='scss' scoped>

</style>