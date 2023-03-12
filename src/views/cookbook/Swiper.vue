<!--  -->
<script setup>
import { ref, reactive,onMounted } from "vue";
import axios from 'axios'
import swiper1 from "@/assets/images/swiper-1.png";
import swiper2 from "@/assets/images/swiper-2.jpeg";
import swiper3 from "@/assets/images/swiper-3.jpeg";
import useListStore from "@/store/listStore";
const listStore = useListStore()
const list = ref([])
onMounted(async () => {
  const result = await axios.get('http://localhost:9000/data')
  console.log('result', result)
});

</script>
<template>
  <div class=''>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img :src="swiper1" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img :src="swiper2" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img :src="swiper3" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang='scss' scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
  }
}
</style>