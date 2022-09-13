<template>
  <swiper
    class="swiper-coverflow"
    :options="swiperOptions"
    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
  >
    <swiper-slide
      v-for="(data,index) in swiperData"
      :key="index"
    >
      <b-img
        :src="data.img"
        fluid
      />
    </swiper-slide>
    <div
      slot="pagination"
      class="swiper-pagination"
    />
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg } from 'bootstrap-vue'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/banner/banner-35.jpg') },   
        { img: require('@/assets/images/banner/banner-38.jpg') },
        { img: require('@/assets/images/banner/banner-37.jpg') },
        { img: require('@/assets/images/banner/banner-36.png') },
        
        
        
        
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>
 



