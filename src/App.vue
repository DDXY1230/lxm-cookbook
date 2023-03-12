<!--  -->
<script setup>
import { ref, reactive, watch } from "vue";
import {useRoute} from 'vue-router'
import cookbook from "@/assets/images/cookbook.png";
import cookbookActive from "@/assets/images/cookbook-active.png";
import menu from "@/assets/images/menu.png";
import menuActive from "@/assets/images/menu-active.png";
import more from "@/assets/images/more.png";
import moreActive from "@/assets/images/more-active.png";
const active = ref(0);
const title = ref('');
const route = useRoute()
watch(
  () => route.meta,
  (val) => {
    title.value = val.title
  }
);
</script>
<template>
  <div class="">
    <van-nav-bar :title="title" safe-area-inset-top>
    </van-nav-bar>
    <main>
      <router-view></router-view>
    </main>
    <van-tabbar v-model="active" active-color="#000" inactive-color="#ccc" route safe-area-inset-bottom>
      <van-tabbar-item icon="search" to="/cookbook">
        <span>菜谱</span>
        <template #icon="props">
          <img :src="props.active ? cookbookActive : cookbook" alt="" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/category">
        <span>分类</span>
        <template #icon="props">
          <img :src="props.active ? menuActive : menu" alt="" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="more">
        <span>更多</span>
        <template #icon="props">
          <img :src="props.active ? moreActive : more" alt="" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.van-nav_content {
  background: #ee7530;
}
.van-nav_title {
  color: #fff;
}
</style>
