import router from '../router/index'
import { links } from '../asset'

const ticketsdat = {
    namespaced: true,
    
    state() {
        return { tickets: null, ticketsbytime: null, earliest: null, ticketsbycost: null, cheapest: null, filterEarliest: true, filterCheapest: false, filterSameday: false, filterbest: false, filtergreenest: false, errorType: null}     //send cheapest, earliest and other special cards for behaviour. As we can assess whether customer has bboked that ticket or not
    },

    mutations: {
        filterChange(state, payload) {
            if (payload == 'earliest') { state.filterEarliest= true; state.filterCheapest= false; state.filterSameday= false; state.filterbest= false; state.filtergreenest= false }
            else if (payload == 'cheapest') {state.filterEarliest= false; state.filterCheapest= true; state.filterSameday= false; state.filterbest= false; state.filtergreenest= false }
            else if (payload == 'same-day') {state.filterEarliest= false; state.filterCheapest= false; state.filterSameday= true; state.filterbest= false; state.filtergreenest= false }
            else if (payload == 'best') {state.filterEarliest= false; state.filterCheapest= false; state.filterSameday= false; state.filterbest= true; state.filtergreenest= false }
            else if (payload == 'greenest') {state.filterEarliest= false; state.filterCheapest= false; state.filterSameday= false; state.filterbest= false; state.filtergreenest= true}
        },
        fetchTickets(state, payload) {
            state.tickets = []
            state.ticketsbytime = []
            state.ticketsbycost = []
            state.tickets = payload
            state.earliest = payload[0][12]         
            sortTickets(payload, state.ticketsbytime);
            payload.sort(function(a, b){return a[2]-b[2]});  
            state.cheapest = payload[0][12]             
            sortTickets(payload, state.ticketsbycost);
        },
        clearTickets(state) {
            state.tickets = null
            state.ticketsbycost = null
            state.ticketsbytime = null
            state.earliest = null
            state.cheapest = null
        },
        errorReport(state, payload) {
            state.errorType = payload
        }
    },

    actions: {
        async fetchTickets(context) {
            context.commit('clearTickets')
            const topform = context.rootGetters['bookingdat/getTopform']
            await fetch(links('flights') + new URLSearchParams({source: topform.source, destination: topform.destination, date: topform.date }), { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + context.rootState.userdat.token }}).then((response)=> {
                if (response.ok) { return response.json() }
                else if (response.status >= 400) { router.replace('/'); context.commit('userdat/unauthenticateUser', null, { root: true }) }
                else { console.log("fetch failed")}     
                }).then((dat)=> {
                    if (dat.length == 0) { context.commit('errorReport', "No Flights Available!") }
                    else {
                        context.commit('fetchTickets', dat) 
                    } 
                }
            );
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
            if (state.ticketsbycost) { return true }
            else { return false}
        },
        getTickets(state) {
            if (state.filterCheapest == true) {  return state.ticketsbycost }
            else {return state.ticketsbytime }
        },
        getUnsortedTickets(state) {
            return state.tickets
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