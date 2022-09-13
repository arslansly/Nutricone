<template>
  <div
    v-if="Object.keys(profileData).length"
    id="user-profile"
  >
    <home-header :header-data="profileData.header" />
    <!-- profile info  -->
    <section id="profile-info">
      <b-row>
        <!-- about suggested page and twitter feed -->
        <b-col
          lg="3"
          cols="12"
          order="2"
          order-lg="1"
        >
          <home-about :about-data="profileData.userAbout" />
          <home-suggested-pages :pages-data="profileData.suggestedPages" />
          <home-twitter-feed :twitter-feed="profileData.twitterFeeds" />
        </b-col>
        <!--/ about suggested page and twitter feed -->

        <!-- post -->
        <b-col
          lg="6"
          cols="12"
          order="1"
          order-lg="2"
        >
          <home-post :posts="profileData.post" />
        </b-col>
        <!-- post -->

        <!-- latest photos suggestion and polls -->
        <b-col
          lg="3"
          cols="12"
          order="3"
        >
          <profile-latest-photos :latest-images="profileData.latestPhotos" />
          <home-suggestion :suggestions="profileData.suggestions" />
          <profile-polls :polls-data="profileData.polls" />
        </b-col>
        <!--/ latest photos suggestion and polls -->

        <!-- load more  -->
        <b-col
          cols="12"
          order="4"
        >
          <profile-bottom />
        </b-col>
        <!--/ load more  -->
      </b-row>
    </section>
    <!--/ profile info  -->
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import HomeHeader from './HomeHeader.vue'
import HomeAbout from './HomeAbout.vue'

import HomeTwitterFeed from './HomeTwitterFeed.vue'
import HomePost from './HomePost.vue'

import HomeSuggestion from './HomeSuggestion.vue'


/* eslint-disable global-require */
export default {
  components: {
    BRow,
    BCol,

    HomeHeader,
    HomeAbout,
    
    HomeTwitterFeed,
    HomePost,
    
    HomeSuggestion,
    
    
  },
  data() {
    return {
      profileData: { },
    }
  },
  
   created() {
            this.$store.commit('appConfig/UPDATE_NAV_MENU_HIDDEN', true)
            this.$http.get('/profile/data').then(res => { this.profileData = res.data })
        },
        destroyed() {
            this.$store.commit('appConfig/UPDATE_NAV_MENU_HIDDEN', this.menuHidden)
        },
}
/* eslint-disable global-require */
</script>

<style lang="scss" >
@import '@core/scss/vue/pages/page-profile.scss';
</style>
