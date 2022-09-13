<template>
  <div
    v-if="Object.keys(profileData).length"
    id="user-profile"
  >
    <profile-header :header-data="profileData.header" />
    <!-- profile info  -->
    <section id="profile-info">
      <b-row>
        <!-- about suggested page and twitter feed -->
        <b-col
          lg="2"
          cols="12"
          order="2"
          order-lg="1"
        >
          <profile-about :about-data="profileData.userAbout" />
        </b-col>
        <!--/ about suggested page and twitter feed -->

        <!-- post -->
        <b-col lg="10"
               cols="15"
               order="1"
               order-lg="2">
           
            <calendar />
        </b-col>
       

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
    import Calendar from './../calendar/Calendar.vue'
   import ProfileHeader from './ProfileHeader.vue'
    import ProfileAbout from './ProfileAbout.vue'
    import ProfilePost from './ProfilePost.vue'


/* eslint-disable global-require */
export default {
  components: {
   BRow,
    BCol,

    ProfileHeader,
        ProfileAbout,
        ProfilePost,
       Calendar,
  },
  data() {
    return {
      profileData: {},
    }
  },
        created() {
            this.$http.get('/profile/data').then(res => { this.profileData = res.data;console.log(res.data) })
            this.$store.commit('appConfig/UPDATE_NAV_MENU_HIDDEN', true)
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