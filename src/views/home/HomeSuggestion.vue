

 
<template>
  <div class="media-list">
    <b-media vertical-align="top">
      <template #aside>
        <b-img
          :src="require('@/assets/images/portrait/small/avatar-s-1.jpg')"
          blank-color="#ccc"
          width="64"
          alt="placeholder"
        />
      </template>
      <h4 class="media-heading">
        Doktor SÜLEYMAN
      </h4>
      <b-card-text class="mb-0">
        Uzman doktor Süleyman ARSLAN, 1978 doğumlu, İstanbul Tıp Fakültesi'nden mezun diyetisyen uzmanımız. Uzmanlık alanı sağlıklı kilo vermek olup, kişiye özel diyet listesi yapmaktadır.
      </b-card-text>
    </b-media>
    <b-media vertical-align="top">
      <template #aside>
        <b-img
          :src="require('@/assets/images/portrait/small/avatar-s-6.jpg')"
          blank-color="#ccc"
          width="64"
          alt="placeholder"
        />
      </template>
      <h4 class="media-heading">
        Doktor DİLAN
      </h4>
      <b-card-text class="mb-0">
        Uzman doktor Dilan SOYLU, 1988 doğumlu, Üsküdar Üniversitesi Tıp Fakültesi'nden mezun diyetisyen uzmanımız. Uzmanlık alanı sağlıklı kilo almak olup, kişiye özel diyet listesi yapmaktadır.
      </b-card-text>
    </b-media>
    <b-media vertical-align="top">
      <template #aside>
        <b-img
          :src="require('@/assets/images/portrait/small/avatar-s-3.jpg')"
          blank-color="#ccc"
          width="64"
          alt="placeholder"
        />
      </template>
      <h4 class="media-heading">
        Doktor Clodia
      </h4>
      <b-card-text class="mb-0">
        Uzman doktor Clodia Z., 1978 doğumlu, Oxford'dan mezun diyetisyen uzmanımız. Uzmanlık alanı sağlıklı yaşam, kişiye özel diyet listesi yapmaktadır.
      </b-card-text>
    </b-media>
  </div>
</template>

<script>
import { BMedia, BImg } from 'bootstrap-vue'

export default {
  components: {
    BMedia,
    BImg,
  },
}
</script>
 
