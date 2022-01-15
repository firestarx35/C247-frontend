import { fetchData } from '../asset'

const ticketsdat = {
    namespaced: true,
    
    state() {
        return { unsortedbytime: null, unsortedbycost: null, unsortedbyemission: null, 
                    sortedbytime: null, sortedbycost: null, sortedbyemission: null,
                    filterEarliest: true, filterCheapest: false, earliest: null, cheapest: null, 
                    filtergreenest: false, errorType: null, 
                } //send cheapest, earliest and other special cards for behaviour. As we can assess whether customer has bboked that ticket or not
    },

    mutations: {
        filterChange(state, payload) {
            state.filterEarliest= false;
            state.filterCheapest= false;
            state.filtergreenest= false
            if (payload == 'earliest') { state.filterEarliest= true }
            else if (payload == 'cheapest') { state.filterCheapest= true }
            else if (payload == 'greenest') { state.filtergreenest= true }
        },
        fetchTickets(state, payload) {
            state.unsortedbytime = []
            state.unsortedbytime = payload
            state.earliest = payload[0][12]         
            sortTickets(payload, state.sortedbytime = [])
            payload = payload.sort(function(a, b){ return a[2]-b[2] })
            state.unsortedbycost = []
            state.unsortedbycost = payload
            state.cheapest = payload[0][12]
            sortTickets(payload, state.sortedbycost = []);
        },
        clearTickets(state) {
            state.unsortedbytime = null
            state.unsortedbycost = null
            state.sortedbytime = null
            state.sortedbycost = null
            state.earliest = null
            state.cheapest = null
        },
    },

    actions: {
        async fetchTickets(context) {
            context.commit('clearTickets')
            const topform = context.rootGetters['bookingdat/getTopform']
            const status = await fetchData({ url: 'flights', query: {source: topform.source, destination: topform.destination, date: topform.date }, body: { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + context.rootState.userdat.token }}})
            if (status.status == 200) {
                if (status.message.length == 0) {
                    context.dispatch('userdat/displayError', { message: "No flights available", type: false }, { root: true })
                } else {
                    context.commit('clearTickets')
                    context.commit('fetchTickets', status.message) 
                }    
            }
        },
        filterChange(context, payload) {
            context.commit('filterChange', payload);
        },
        clearTickets(context) {
            context.commit('clearTickets')
        }
    },

    getters: {
        getTicketstatus(state) {
            if (state.unsortedbytime) {
                return true
            } else {
                return false
            }
        },
        getSorted(state) {
            if (state.filterCheapest == true) {
                return state.sortedbycost
            } else{
                return state.sortedbytime
            }
        },
        getUnsorted(state) {
            if (state.filterCheapest == true) {
                return state.unsortedbycost
            } else {
                return state.unsortedbytime
            }
        },
        getEarliest(state) {
            return state.earliest
        },
        getCheapest(state) {
            return state.cheapest
        },
      
    }
}  

function sortTickets(dat, ticket) { 
    let no_of_tickets = dat.length;
    var air1 = [], air2 = [], air3 = [], air4 = [], air5 = [], air6 = [], air7 = [], air8 = []
    var air1_rank = null, air2_rank = null, air3_rank = null, air4_rank = null, air5_rank = null, air6_rank = null, air7_rank = null, air1_rank = null, air8_rank = null 
    var order = []
    for (let i = 0; i < no_of_tickets; i++) {
        const air = dat[i][0]
        if ( air == 1 ) { air1.push(dat[i]); if (air1_rank == null) { air1_rank = true; order.push(1) } }
        else if ( air == 2 ) { air2.push(dat[i]); if (air2_rank == null) { air2_rank = true; order.push(2) } }
        else if ( air == 3 ) { air3.push(dat[i]); if (air3_rank == null) { air3_rank = true; order.push(3) } }
        else if ( air == 4 ) { air4.push(dat[i]); if (air4_rank == null) { air4_rank = true; order.push(4) } }
        else if ( air == 5 ) { air5.push(dat[i]); if (air5_rank == null) { air5_rank = true; order.push(5) } }
        else if ( air == 6 ) { air6.push(dat[i]); if (air6_rank == null) { air6_rank = true; order.push(6) } }
        else if ( air == 7 ) { air7.push(dat[i]); if (air7_rank == null) { air7_rank = true; order.push(7) } }
        else if ( air == 8 ) { air8.push(dat[i]); if (air8_rank == null) { air8_rank = true; order.push(8) } }
    }
    order.forEach(function(x) {
        if (x == 1) { ticket.push(air1) }
        else if (x == 2) { ticket.push(air2) }
        else if (x == 3) { ticket.push(air3) }
        else if (x == 4) { ticket.push(air4) }
        else if (x == 5) { ticket.push(air5) }
        else if (x == 6) { ticket.push(air6) }
        else if (x == 7) { ticket.push(air7) }
        else if (x == 8) { ticket.push(air8) }
    })

}
export default ticketsdat;