<template>
  <b-card-code title="Internationalization">
    <b-card-text>
      <span>By default </span>
      <code>&lt;b-calendar&gt;</code>
      <span> will use the browser's default locale, but you can specify the locale (or locales) to use via the </span>
      <code>locale</code>
      <span>
        prop. The prop accepts either a single locale string, or an array of locale strings (listed in order of
        preferred locale).
      </span>
    </b-card-text>

    <b-row>
      <b-col cols="12">

        <!-- select locale-->
        <label for="example-locales">Locale:</label>
        <b-form-select
          id="example-locales"
          v-model="locale"
          :options="locales"
        />

        <!-- select weekday-->
        <label
          for="example-weekdays"
          class="mt-2"
        >Start weekday:</label>
        <b-form-select
          id="example-weekdays"
          v-model="weekday"
          :options="weekdays"
        />

        <!-- switch -->
        <div class="demo-inline-spacing">
          <div class="d-flex align-items-center">
            <b-form-checkbox
              v-model="showDecadeNav"
              switch
              inline
            >
              Show decade navigation buttons
            </b-form-checkbox>
          </div>

          <div class="d-flex align-items-center">
            <b-form-checkbox
              v-model="hideHeader"
              switch
              inline
            >
              Hide the date header
            </b-form-checkbox>
          </div>
        </div>
      </b-col>

      <!-- calendar -->
      <b-col
        md="6"
        class="text-center"
      >
        <b-calendar
          v-model="value"
          v-bind="labels[locale] || {}"
          :locale="locale"
          :start-weekday="weekday"
          :hide-header="hideHeader"
          :show-decade-nav="showDecadeNav"
          class="mt-1"
          @context="onContext"
        />
      </b-col>

      <!-- prism -->
      <b-col md="6">
        <prism
          language="javascript"
          class="rounded mt-1 mb-0"
        >
          Context: {{ context }}
        </prism>
      </b-col>
    </b-row>

    <template #code>
      {{ codeInternationalization }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BCalendar, BRow, BCol, BFormCheckbox, BFormSelect, BCardText,
} from 'bootstrap-vue'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { codeInternationalization } from './code'

export default {
  components: {
    BCardCode,
    BCalendar,
    BCardText,
    BRow,
    BCol,
    BFormCheckbox,
    BFormSelect,
    Prism,
  },
  data() {
    return {
      value: '',
      codeInternationalization,
      context: null,
      showDecadeNav: false,
      hideHeader: false,
      locale: 'en-US',
      locales: [
        { value: 'en-US', text: 'English US (en-US)' },
        { value: 'de', text: 'German (de)' },
        { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },
        { value: 'zh', text: 'Chinese (zh)' },
      ],
      weekday: 0,
      weekdays: [
        { value: 0, text: 'Sunday' },
        { value: 1, text: 'Monday' },
        { value: 6, text: 'Saturday' },
      ],
      labels: {
        de: {
          labelPrevDecade: 'Vorheriges Jahrzehnt',
          labelPrevYear: 'Vorheriges Jahr',
          labelPrevMonth: 'Vorheriger Monat',
          labelCurrentMonth: 'Aktueller Monat',
          labelNextMonth: 'N??chster Monat',
          labelNextYear: 'N??chstes Jahr',
          labelNextDecade: 'N??chstes Jahrzehnt',
          labelToday: 'Heute',
          labelSelected: 'Ausgew??hltes Datum',
          labelNoDateSelected: 'Kein Datum gew??hlt',
          labelCalendar: 'Kalender',
          labelNav: 'Kalendernavigation',
          labelHelp: 'Mit den Pfeiltasten durch den Kalender navigieren',
        },
        'ar-EG': {
          labelPrevDecade: '?????????? ????????????',
          labelPrevYear: '?????????? ????????????',
          labelPrevMonth: '?????????? ????????????',
          labelCurrentMonth: '?????????? ????????????',
          labelNextMonth: '?????????? ????????????',
          labelNextYear: '?????????? ????????????',
          labelNextDecade: '?????????? ????????????',
          labelToday: '??????????',
          labelSelected: '?????????????? ????????????',
          labelNoDateSelected: '???? ?????? ???????????? ??????????',
          labelCalendar: '??????????????',
          labelNav: '?????????????? ??????????????',
          labelHelp: '???????????? ???????????? ???????????? ???????????? ???? ????????????????',
        },
        zh: {
          labelPrevDecade: '????????????',
          labelPrevYear: '?????????',
          labelPrevMonth: '?????????',
          labelCurrentMonth: '????????????',
          labelNextMonth: '?????????',
          labelNextYear: '??????',
          labelNextDecade: '???????????????',
          labelToday: '??????',
          labelSelected: '????????????',
          labelNoDateSelected: '???????????????',
          labelCalendar: '??????',
          labelNav: '????????????',
          labelHelp: '???????????????????????????',
        },
      },
    }
  },
  methods: {
    onContext(ctx) {
      this.context = ctx
    },
  },
}
</script>
