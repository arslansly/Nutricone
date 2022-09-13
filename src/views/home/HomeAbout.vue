<template>
  <app-collapse hover>

    

    <app-collapse-item title="Diyet Programları Hakkında">
      Vücudun ihtiyaç duyduğu kalori karşılanmadığında ya da başka bir deyişle düşük kalorili bir diyet uygulandığında vücut bu diyete adapte olarak kıtlık duygusuna kapılır. Vücut, metabolizma hızını düşürerek daha az enerji harcamaya başlar. Bu durum, diyet bırakıldığında çok kısa bir süre içinde verilen kilonun fazlasıyla geri alınmasına sebep olur. Sağlıklı bir zayıflama listesi ile kalıcı kilo verme sağlanır. Yaşam tarzında değişikliklere odaklı hazırlanan beslenme programları dengeli ve sağlıklı beslenmenin öğrenilmesini sağlar ve yaşam boyu fiziksel aktivite programı uygulanmasını destekler.
    </app-collapse-item>

    <app-collapse-item title="Doktorlarımız Hakkında">
      Alanında uzman kadromuz en kısa sürede sorunlarınıza çözüm bulacaktır.
    </app-collapse-item>

    <app-collapse-item title="Sizlere Özel Uygulamalar">
        
<template>
  <b-list-group>
    <b-list-group-item>Sağlıklı Kilo Verme</b-list-group-item>
    <b-list-group-item>Sağlıklı Kilo Alma</b-list-group-item>
    <b-list-group-item>Düzenli Beslenme</b-list-group-item>
    
  </b-list-group>
</template>


 
    </app-collapse-item>
  </app-collapse>
</template>

<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    
    BListGroup,
    BListGroupItem,
    AppCollapse,
    AppCollapseItem,
  },
  
}
</script>


 


