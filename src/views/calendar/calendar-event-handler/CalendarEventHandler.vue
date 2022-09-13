<template>
  <div>
    <b-sidebar
      id="sidebar-add-new-event"
      sidebar-class="sidebar-lg"
      :visible="isEventHandlerSidebarActive"
      bg-variant="white"
      shadow
      backdrop
      no-header
      right
      @change="(val) => $emit('update:is-event-handler-sidebar-active', val)"
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
          <h5 class="mb-0">
            {{ eventLocal.id ? 'Update': 'Add' }} Event
          </h5>
          <div>
            <feather-icon
              v-if="eventLocal.id"
              icon="TrashIcon"
              class="cursor-pointer"
              @click="$emit('remove-event'); hide();"
            />
            <feather-icon
              class="ml-1 cursor-pointer"
              icon="XIcon"
              size="16"
              @click="hide"
            />
          </div>
        </div>

        <!-- Body -->
        <validation-observer
          #default="{ handleSubmit }"
          ref="refFormObserver"
        >

          <!-- Form -->
          <b-form
            class="p-2"
            @submit.prevent="handleSubmit(onSubmit)"
            @reset.prevent="resetForm"
          >

            <!-- NAME -->
           <validation-provider
              #default="validationContext"
              name="Name"
              rules="required"
              
            >
              <b-form-group
                label="Name :"
                label-for="Name"
              >
                <b-form-input
                  id="name"
                  v-model="eventLocal.title"
                  autofocus
                  :state="getValidationState(validationContext)"
                  trim
                  placeholder="John"
                  
                />

                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- SURNAME -->
            <validation-provider
              #default="validationContext"
              name="Surname"
              rules="required"
            >
              <b-form-group
                label="Surname :"
                label-for="Surname"
              >
                <b-form-input
                  id="Surname"
                  v-model="eventLocal.Surname"
                  :state="getValidationState(validationContext)"          
                  trim
                  placeholder="Doe"
                  
                />

                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- PHONE NUMBER -->
            <validation-provider
              #default="validationContext"
              name="Phone Number"
              rules="required"       
            >

              <b-form-group
                label="Phone Number :"
                label-for="PhoneNumber"
              >
                <b-form-input
                  id="PhoneNumber"
                  v-model="eventLocal.PhoneNumber"
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  type="number"
                  :state="getValidationState(validationContext)"             
                  trim
                  placeholder="555-100-20-30"
                  maxLength="10"
                  
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- E-MAİL -->
            <validation-provider
              #default="validationContext"
              name="Email"
              rules="required|email"
            >
              <b-form-group
                label="E-mail :"
                label-for="Email"
              >
                <b-form-input
                  id="Email"
                  v-model="eventLocal.Email"
                  :state="getValidationState(validationContext)"          
                  trim
                  placeholder="john.doe@gmail.com"
                  
                />

                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- DATE OF BIRTH -->
            <validation-provider
              #default="validationContext"
              name="DateOfBirth"
              rules="required"
            >

              <b-form-group
                label="Date of Birth :"
                label-for="DateOfBirth"
              >
                <b-form-input
                  id="DateOfBirth"
                  v-model="eventLocal.DateOfBirth"
                  type="date"
                  :state="getValidationState(validationContext)"             
                  trim
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- HEIGHT -->
            <validation-provider
              #default="validationContext"
              name="Height"
              rules="required"
            >

              <b-form-group
                label="Height :"
                label-for="Height"
              >
                <b-form-input
                  id="Height"
                  v-model="eventLocal.Height"
                  type="number"
                  :state="getValidationState(validationContext)"             
                  trim
                  placeholder="160cm"
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- WEIGHT -->
            <validation-provider
              #default="validationContext"
              name="Weight"
              rules="required"
            >

              <b-form-group
                label="Weight :"
                label-for="Weight"
              >
                <b-form-input
                  id="Weight"
                  v-model="eventLocal.Weight"
                  type="number"
                  :state="getValidationState(validationContext)"             
                  trim
                  placeholder="75kg"
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            
            <!-- Start Date -->
            <validation-provider
              #default="validationContext"
              name="StartDate"
              rules="required"
            >

              <b-form-group
                label="Start Date :"
                label-for="StartDate"
                :state="getValidationState(validationContext)"
              >
                <flat-pickr
                  v-model="eventLocal.start"
                  class="form-control"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>


            <!-- Aim -->
            <validation-provider
              #default="validationContext"
              name="Aim"
              rules="required"
            >

              <b-form-group
                label="Aim :"
                label-for="Aim"
                :state="getValidationState(validationContext)"
              >
                <v-select
                  v-model="eventLocal.extendedProps.calendar"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="calendarOptions"
                  label="label"
                  :reduce="calendar => calendar.label"
                  input-id="calendar"
                >

                  <template #option="{ color, label }">
                    <div
                      class="rounded-circle d-inline-block mr-50"
                      :class="`bg-${color}`"
                      style="height:10px;width:10px"
                    />
                    <span> {{ label }}</span>
                  </template>

                  <template #selected-option="{ color, label }">
                    <div
                      class="rounded-circle d-inline-block mr-50"
                      :class="`bg-${color}`"
                      style="height:10px;width:10px"
                    />
                    <span> {{ label }}</span>
                  </template>
                </v-select>

                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- DESCRTIPTION -->
            <b-form-group
              label="Description :"
              label-for="Description"
            >
              <b-form-textarea
                id="Description"
                v-model="eventLocal.extendedProps.description"
                placeholder="Explain your reason for appointment..."
              />
            </b-form-group>

            <!-- Form Actions -->
            <div class="d-flex mt-2">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="mr-2"
                type="submit"
              >
                {{ eventLocal.id ? 'Update' : 'Add ' }}
              </b-button>
              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="reset"
                variant="outline-secondary"
              >
                Reset
              </b-button>
            </div>
          </b-form>
        </validation-observer>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormCheckbox, BAvatar, BFormTextarea, BButton, BFormInvalidFeedback,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email, url } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, toRefs } from '@vue/composition-api'
import useCalendarEventHandler from './useCalendarEventHandler'

export default {
  components: {
    BButton,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BFormTextarea,
    BAvatar,
    vSelect,
    flatPickr,
    ValidationProvider,
    BFormInvalidFeedback,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isEventHandlerSidebarActive',
    event: 'update:is-event-handler-sidebar-active',
  },
  props: {
    isEventHandlerSidebarActive: {
      type: Boolean,
      required: true,
    },
    event: {
      type: Object,
      required: true,
    },
    clearEventData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      required,
      email,
      url,
    }
  },
  setup(props, { emit }) {
    /*
     ? This is handled quite differently in SFC due to deadlock of `useFormValidation` and this composition function.
     ? If we don't handle it the way it is being handled then either of two composition function used by this SFC get undefined as one of it's argument.
     * The Trick:

     * We created reactive property `clearFormData` and set to null so we can get `resetEventLocal` from `useCalendarEventHandler` composition function.
     * Once we get `resetEventLocal` function which is required by `useFormValidation` we will pass it to `useFormValidation` and in return we will get `clearForm` function which shall be original value of `clearFormData`.
     * Later we just assign `clearForm` to `clearFormData` and can resolve the deadlock. 😎

     ? Behind The Scene
     ? When we passed it to `useCalendarEventHandler` for first time it will be null but right after it we are getting correct value (which is `clearForm`) and assigning that correct value.
     ? As `clearFormData` is reactive it is being changed from `null` to corrent value and thanks to reactivity it is also update in `useCalendarEventHandler` composition function and it is getting correct value in second time and can work w/o any issues.
    */
    const clearFormData = ref(null)

    const {
      eventLocal,
      resetEventLocal,
      calendarOptions,

      // UI
      onSubmit,
      guestsOptions,
    } = useCalendarEventHandler(toRefs(props), clearFormData, emit)

    const {
      refFormObserver,
      getValidationState,
      resetForm,
      clearForm,
    } = formValidation(resetEventLocal, props.clearEventData)

    clearFormData.value = clearForm

    return {
      // Add New Event
      eventLocal,
      calendarOptions,
      onSubmit,
      guestsOptions,

      // Form Validation
      resetForm,
      refFormObserver,
      getValidationState,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>