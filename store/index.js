import { createStore } from 'vuex';
import bookingdat from './bookingdat';
import userdat from './userdat';
import ticketsdat from './ticketsdat'

export default createStore({
  modules: {
    bookingdat,
    userdat,
    ticketsdat
  },
})
