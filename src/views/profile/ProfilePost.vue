
<template>
    <b-row class="text-center">
        <b-col md="6"
               class="mt-1">

            <!-- calendar -->
            <b-calendar v-model="value"
                        locale="en-US"
                        @context="onContext" />
        </b-col>
        <b-col md="6">

            <!-- prism -->
            <div class="mt-1">
                <prism language="javascript"
                       class="rounded mb-0">
                    Context: {{ context }}
                </prism>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    import { BRow, BCol, BCalendar } from 'bootstrap-vue'
    import Prism from 'vue-prism-component'
    import 'prismjs'
    import 'prismjs/themes/prism-tomorrow.css'

    export default {
        components: {
            BRow,
            BCol,
            BCalendar,
            Prism,
        },
        data: () => ({
            value: '',
            context: null,
        }),
        methods: {
            onContext(ctx) {
                this.context = ctx
            },
        },
    }
</script>
