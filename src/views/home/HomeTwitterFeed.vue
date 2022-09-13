<template>

 <div class="demo-inline-spacing">
    
    <b-button size="df" variant="relief-primary" router-link to="/profile-suleyman">  
      Doktor SÜLEYMAN
      
    </b-button>
    
    <b-button size="df" variant="relief-secondary" router-link to="/profile2">
      Doktor DİLAN
    </b-button>
    
    <b-button size="df" variant="relief-success" router-link to="/profile-clodia">
      Doktor Clodia
    </b-button>
    
    
    
  </div> 
</template>

<script>
import { BButton } from 'bootstrap-vue'
import ButtonGroupSize from '@/views/components/button-group/ButtonGroupSize.vue';

export default {
  components: {
    BButton,
    ButtonGroupSize
},
}
</script>