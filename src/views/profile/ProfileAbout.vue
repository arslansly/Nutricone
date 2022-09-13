<template>
    <app-collapse>

        <app-collapse-item title="Personal Informations">
            Doktor Cloadia
        </app-collapse-item>
        

        <app-collapse-item title="Educations">
           <!--  {{aboutData.about}} -->
        </app-collapse-item>

        <app-collapse-item title="Experiences">
            Medipol Hospital(2020-)
        </app-collapse-item>

        <app-collapse-item title="Contact">
            Mail:  <!-- {{ aboutData.email }} -->  dr.clodaia@gmail.com
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
        props: {
    aboutData: {
      type: Object,
      default: () => {},
    },
  },
    }
</script>
