import axios from '@axios'

export default {
  namespaced: true,
  state: {
    calendarOptions: [
      {
        color: 'danger',
        label: 'LoseWeight',
      },
      {
        color: 'primary',
        label: 'GainingWeight',
      },
      {
        color: 'warning',
        label: 'BalancedDiet',
      },
     
    ],
    selectedCalendars: ['LoseWeight', 'GainingWeight', 'BalancedDiet'],
  },
  getters: {},
  mutations: {
    SET_SELECTED_EVENTS(state, val) {
      state.selectedCalendars = val
    },
  },
  actions: {
    fetchEvents(ctx, { calendars }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/calendar/events', {
            params: {
              calendars: calendars.join(','),
            },
          })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addEvent(ctx, { event }) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/calendar/events', { event })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateEvent(ctx, { event }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/apps/calendar/events/${event.id}`, { event })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeEvent(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/apps/calendar/events/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
