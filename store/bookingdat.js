import { links } from '../asset'
import router from '../router/index'


const bookingdat = {
    namespaced: true,
    state() {
        return { Airports: [], isairportAvialable: false, topform: null, cargodetails: [], cargosummary: [], checkout: null, checkoutData: null }
    },

    mutations: {
        fetchAirports(state, payload) {
            state.Airports = payload; 
            state.isairportAvialable = true;
        },
        addtopForm(state, payload) { 
            state.topform = {from: payload.from, to: payload.to, date: payload.date };
        },
        addmidformData(state, payload) {
            state.cargodetails.push(payload);               ///Need to clear it in case of successfull transaction or cancel transaction.
        },
        makeSummary(state, payload) {
            var k = 1;
            if (state.cargodetails[0].dimension == true) { k = 0.000001; } 
            else { k = 0.000016387 };
            var volume = payload.length*payload.height*payload.width*payload.quantity*k;
            var weight = payload.weight;
            if (payload.weighing == true) { weight = payload.weight*payload.quantity; };
            const density = (weight/volume).toFixed(2);
            const summary = { TotalQuantity: payload.quantity, TotalVolume: volume.toFixed(2), TotalWeight: weight, Density: density, dimension: state.cargodetails[0].dimension};
            state.cargosummary.push(summary);
        },
        addCheckout(state, payload) {
            state.checkout = null;
            state.checkoutData = null;
            state.checkout = payload;
        },
        addCheckoutData(state, payload) {
            state.checkoutData = null;
            state.checkoutData = payload
        }
    },

    actions: {
        async fetchAirports(context) {
            await fetch(links('airports')).then((response)=> {
                if (response.ok) { return response.json() }
                else if (response.status >= 400) { router.replace('/'); context.commit('userdat/unauthenticateUser', null, { root: true });}
                else { console.log("fetch failed") } 
            }).then((dat)=> {
                context.commit('fetchAirports', dat)
            }); 
        },
        addtopform(context, payload) {
            if (context.state.topform) {
                if ( (context.state.topform.from != payload.from) ||  (context.state.topform.to != payload.to) || (context.state.topform.date != payload.date) ) {
                    context.commit('addtopForm', payload);
                    context.commit('ticketsdat/fetchTickets', payload, { root: true });
                    context.commit('userdat/addRoutes', payload, { root: true });
                }
            } else {
                context.commit('addtopForm', payload);
                context.commit('ticketsdat/fetchTickets', payload, { root: true });
                context.commit('userdat/addRoutes', payload, { root: true });  // send this top form data to userdat.js interestedtickets
            }
           
        },
        addmidformData(context, payload) {
            let i = context.state.cargodetails.findIndex(x => x.id == payload.id);
            if ( i > -1) { context.state.cargodetails.splice(i, 1); context.state.cargosummary.splice(i, 1); }
            context.commit('addmidformData', payload);
            context.commit('makeSummary', payload);
        },
        async addCheckout(context, payload) {
            context.commit('addCheckout', payload)
            const ticketData = context.rootState.ticketsdat.ticketsbytime.find(element => element[2] == payload)
            if (ticketData != undefined && ticketData != '') {
                context.commit('addCheckoutData', ticketData)
            }
            else {
                await fetch(links('flight') + new URLSearchParams({id: context.state.checkout}), { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + context.rootState.userdat.token }}).then((response)=> {
                    if (response.ok) { return response.json() }
                    else if (response.status >= 400) { router.replace('/'); context.commit('userdat/unauthenticateUser', null, { root: true });}
                    else { console.log("fetch failed") } 
                    }).then((dat)=> {
                        context.commit('addCheckoutData', dat)
                    });
                }      
         },
    },

    getters: {
        getAirports(state) {
            return state.Airports; 
        },
        getAirportstatus(state) {
            return state.isairportAvialable
        },
        getformSummary(state) {
            if (state.cargosummary.length > 0 ) { return state.cargosummary; } 
            else { return false }
        },
        getmidform(state) {
            return state.cargodetails
        },
        getWeight(state) {
            if (state.cargosummary[0]) { return state.cargosummary[0].TotalWeight }
            else { return null }
        },
        getTopform(state) {
            return state.topform
        },
        getCheckoutData(state) {
            return state.checkoutData
        }      
    },
};

export default bookingdat;
