<template>
    <app-collapse>

        <app-collapse-item title="Personal Informations">
            Doktor Dilan
        </app-collapse-item>

        <app-collapse-item title="Educations">
          Uzman doktor Süleyman ARSLAN, 1978 doğumlu, İstanbul Tıp Fakültesi'nden mezun diyetisyen uzmanımız. Uzmanlık alanı sağlıklı kilo vermek olup, kişiye özel diyet listesi yapmaktadır.

        </app-collapse-item>

        <app-collapse-item title="Experiences">
            Medipol Hospital(2020-)
        </app-collapse-item>

        <app-collapse-item title="Contact">
            Mail: me@suleymanarslan.com.tr
        </app-collapse-item>

        <app-collapse-item title="Licenses and Certificates">
            Nutrition Control,
            Sress eating disorder.
        </app-collapse-item>
    </app-collapse>
</template>

<script>
    import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
    import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

    export default {
        components: {
            AppCollapse,
            AppCollapseItem,
        },
    }
</script>
