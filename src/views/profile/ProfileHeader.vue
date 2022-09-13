<template>
    <b-card class="profile-header mb-2"
            :img-src="require('./backPhoto.png')"
            img-top
            alt="cover photo"
            body-class="p-0">
        <!-- profile picture -->
        <div class="position-relative">
            <div class="profile-img-container d-flex align-items-center">
                <div class="profile-img">
                    <b-img :src="require('./profilPhoto.jpg')"
                           rounded
                           fluid
                           alt="profile photo"
                           style="width:200px;height:100px;"/>
                </div>
                <!-- profile title -->
                <div class="profile-title ml-3">
                    <h2 style="color:white; font-size:45px;background-color:midnightblue">
                        <!--{{ headerData.username }}-->
                        {{ headerData.username }}
                    </h2>
                    
                </div>
                <!--/ profile title -->
            </div>
        </div>
        <!--/ profile picture -->
        <!-- profile navbar -->
        <div class="profile-header-nav">
            <b-navbar toggleable="md"
                      type="light">
                <!-- toggle button -->
                <b-navbar-toggle class="ml-auto"
                                 target="nav-text-collapse">
                    <feather-icon icon="AlignJustifyIcon"
                                  size="21" />
                </b-navbar-toggle>
                <!--/ toggle button -->
                <!-- collapse -->
                <b-collapse id="nav-text-collapse"
                            is-nav>
                    <b-tabs pills
                            class="profile-tabs mt-1 mt-md-0"
                            nav-class="mb-0">
                        <template #tabs-start>
                            <b-nav-item role="presentation"
                                        active
                                        class="font-weight-bold">
                                
                            </b-nav-item>
                            <b-nav-item role="presentation"
                                        class="font-weight-bold">
                              
                            </b-nav-item>
                            <b-nav-item role="presentation"
                                        class="font-weight-bold">
                              
                            </b-nav-item>
                            <b-nav-item role="presentation"
                                        class="font-weight-bold">
                               
                            </b-nav-item>
                        </template>

                        
                    </b-tabs>

                </b-collapse>
                <!--/ collapse -->
            </b-navbar>
        </div>
        <!--/ profile navbar -->
    </b-card>
</template>

<script>
import {
  BCard, BImg, BNavbar, BNavbarToggle, BCollapse, BTabs, BNavItem, BButton,
} from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import { BAvatar } from 'bootstrap-vue'


export default {
  components: {
    BCard,
    BNavItem,
    BNavbar,
    BNavbarToggle,
    BCollapse,
        BImg,
        BAvatar,
  },
  directives: {
    Ripple,
  },
  props: {
    headerData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
