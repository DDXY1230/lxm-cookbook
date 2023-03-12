<!--  -->
<script setup>
import {ref,reactive,onMounted} from 'vue'
import axios from 'axios'
const hotcate = ref([])
onMounted(async () => {
  const result = await axios.get('http://localhost:9000/cookbook-hotcate')
  console.log('0000=>', result)
});
</script>
<template>
<div class=''>
<van-grid>
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
</van-grid>
</div>
</template>

<style lang='scss' scoped>

</style>