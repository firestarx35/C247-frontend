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
            state.topform = {source: payload.source, destination: payload.destination, date: payload.date };
        },
        addmidformData(state, payload) {
            state.cargodetails = []
            state.cargodetails.push(payload);   ///Need to clear it in case of successfull transaction or cancel transaction.
        },
        addCargoSummary(state, payload) {
            state.cargosummary = []
            state.cargosummary.push(payload)
        },
        clearMidForm(state) {
            state.cargodetails = []
            state.cargosummary = []
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
                if ( (context.state.topform.source != payload.source) ||  (context.state.topform.destination != payload.destination) || (context.state.topform.date != payload.date) ) {
                    context.commit('addtopForm', payload);
                    context.commit('userdat/addRoutes', payload, { root: true });
                }
            } else {
                context.commit('addtopForm', payload);
                context.commit('userdat/addRoutes', payload, { root: true });  // send this top form data to userdat.js interestedtickets
            }
           
        },
        addmidformData(context, payload) {
            let i = context.state.cargodetails.findIndex(element => element.id == payload.id);                 // checking form id
            if ( i > -1) { context.state.cargodetails.splice(i, 1); context.state.cargosummary.splice(i, 1); }
            context.commit('addmidformData', payload)
            context.dispatch('addCargoSummary', payload)
        },

        addCargoSummary(context, payload) {
            var k
            var volume_unit = 'cm³'
            var density_unit = 'cm³/kg'
            if (payload.dimension == true) { k = 0.000001 } 
            else {  k = 0.00001638; volume_unit = 'inch³'; density_unit = 'inch³/kg' }
            var volume = payload.length*payload.height*payload.width*payload.quantity*k;
            var weight = payload.weight;
            if (payload.weighing == true) { weight = payload.weight*payload.quantity; };
            const density = (weight/volume).toFixed(2);
            const data = { midform: payload, TotalVolume: volume.toFixed(2), TotalWeight: weight, Density: density, volume_unit: volume_unit, density_unit: density_unit }
            context.commit('addCargoSummary', data)
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
        clearMidForm(context) {
            context.commit('clearMidForm')
        }

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
        getMidForm(state) {
            if (state.cargodetails.length > 0 ) { return state.cargodetails }
            else { return false }
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
