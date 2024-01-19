<script setup lang="ts">
import { getHomeBannerApi, getHomeCategoryMutliApi, getHomeHotMutliApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CatergoryPanel from './components/CatergoryPanel.vue'
import HotPanel from './components/hotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'
// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCatergoryData = async () => {
  const res = await getHomeCategoryMutliApi()
  categoryList.value = res.result
}

// 获取热门推荐数据

const hotList = ref<HotItem[]>([])
const getHotData = async () => {
  const res = await getHomeHotMutliApi()
  hotList.value = res.result
}
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCatergoryData(), getHotData()])
  // getHomeBannerData()
  // getHomeCatergoryData()
  // getHotData()
  isLoading.value = false
})
const { guessRef, onScrolltolower } = useGuessList()
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // await getHomeBannerData()
  // await getHomeCatergoryData()
  // await getHotData()
  // 同时发送三个请求
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCatergoryData(),
    getHotData(),
    guessRef.value?.getMore(),
  ])
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CatergoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
