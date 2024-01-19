<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator class="navigator XtxSwiper--navigator" hover-class="none">
            <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator XtxSwiper--indicator">
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CatergoryPanel">
    <view class="category CatergoryPanel--category">
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-912 sk-text"
          >居家</text
        >
      </navigator>
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-31 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-794 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-544 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-340 sk-text"
          >个护</text
        >
      </navigator>
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-754 sk-text"
          >严选</text
        >
      </navigator>
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-366 sk-text"
          >数码</text
        >
      </navigator>
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-370 sk-text"
          >运动</text
        >
      </navigator>
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-671 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator class="category-item CatergoryPanel--category-item" hover-class="none">
        <image class="icon CatergoryPanel--icon sk-image"></image>
        <text class="text CatergoryPanel--text sk-transparent sk-text-14-2857-341 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/hotPanel">
    <view class="panel hotPanel--panel hot hotPanel--hot">
      <view class="item hotPanel--item">
        <view class="title hotPanel--title">
          <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-701 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-309 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards hotPanel--cards" hover-class="none">
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item hotPanel--item">
        <view class="title hotPanel--title">
          <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-156 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-913 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards hotPanel--cards" hover-class="none">
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item hotPanel--item">
        <view class="title hotPanel--title">
          <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-969 sk-text"
            >一站买全</text
          >
          <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-584 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards hotPanel--cards" hover-class="none">
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item hotPanel--item">
        <view class="title hotPanel--title">
          <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-856 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-552 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards hotPanel--cards" hover-class="none">
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r r">
    <view class="caption XtxGuess--caption">
      <text
        class="text XtxGuess--text sk-transparent sk-text-0-0000-414 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-6-2500-800 {
  background-image: linear-gradient(
    transparent 6.25%,
    #eeeeee 0%,
    #eeeeee 93.75%,
    transparent 0%
  ) !important;
  background-size: 100% 27.907rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-851 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}
.sk-text-14-2857-912 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-31 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-794 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-544 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-340 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-754 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-366 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-370 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-671 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-341 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-701 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-309 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-156 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-913 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-969 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-584 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-14-2857-856 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-552 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}
.sk-text-0-0000-414 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 31.3953rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
