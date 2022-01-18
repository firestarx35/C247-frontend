import { fetchData } from '../asset'

const bookingdat = {
    namespaced: true,
    state() {
        return { Airports: null, Airlines: [], topform: null, midform: [], cargosummary: [], checkout: null, checkoutData: null }
    },

    mutations: {
        fetchAirports(state, payload) {
            state.Airports = payload; 
            state.isairportAvialable = true
        },
        fetchAirlines(state, payload) {
            state.Airlines = payload
        },
        addtopForm(state, payload) { 
            state.topform = { source: payload.source, destination: payload.destination, date: payload.date }
        },
        clearTopForm(state) {
            state.topform = null
        },
        addmidformData(state, payload) {
            state.midform = []
            state.midform.push(payload)   ///Need to clear it in case of successfull transaction or cancel transaction.
        },
        addCargoSummary(state, payload) {
            state.cargosummary = []
            state.cargosummary.push(payload)
        },
        clearMidForm(state) {
            state.midform = []
            state.cargosummary = []
        },
        addCheckout(state, payload) {
            state.checkout = null
            state.checkoutData = null
            state.checkout = payload
        },
        addCheckoutData(state, payload) {
            state.checkoutData = payload
        }
    },

    actions: {
        async fetchAirports(context) {
            const status = await fetchData({ url: 'airports', query: null, body: null })
                if (status.status == 200) {
                    context.commit('fetchAirports', status.message)
                }
        },
        async fetchAirlines(context) {
            const status = await fetchData({ url: 'airlines', query: null, body: null })
                if (status.status == 200) {
                    context.commit('fetchAirlines', status.message)
                }
        },
        addtopform(context, payload) {
            context.commit('clearTopForm')
            if (context.state.topform) {
                if ( (context.state.topform.source != payload.source) ||  (context.state.topform.destination != payload.destination) || (context.state.topform.date != payload.date) ) {
                    context.commit('addtopForm', payload)
                    context.commit('userdat/addRoutes', payload, { root: true })
                }
            } else {
                context.commit('addtopForm', payload);
                context.commit('userdat/addRoutes', payload, { root: true }) // send this top form data to userdat.js interestedtickets
            }
           
        },
        addmidformData(context, payload) {
            let i = context.state.midform.findIndex(element => element.id == payload.id)               // checking form id
            if ( i > -1) { 
                context.state.midform.splice(i, 1)
                context.state.cargosummary.splice(i, 1)
            }
            context.commit('addmidformData', payload)
            context.dispatch('addCargoSummary', payload)
        },

        addCargoSummary(context, payload) {
            var volumetric_weight
            var unit_factor = 0.000001
            var volume_conversion = 6000    ///Taking chargeable weight factor 6000
            var unit_system = 'cm'
            var volume_unit = 'cm³'
            var density_unit = 'cm³/kg'
            if (payload.dimension == false) { 
                unit_factor = 0.00001638 
                volume_conversion = 366
                unit_system = 'inch'
                volume_unit = 'inch³'
                density_unit = 'inch³/kg'
            } 
            var volume = payload.length*payload.height*payload.width*payload.quantity*unit_factor
            var weight = payload.weight
            if (payload.weighing == true) { 
                weight = weight*payload.quantity
            }
            var density = (weight/volume).toFixed(2);
            volumetric_weight = (volume/volume_conversion).toFixed(2)
            var chargeable_weight = (volumetric_weight >= weight) ? volumetric_weight : weight
            const data = { 
                midform: payload, TotalVolume: volume.toFixed(2), TotalWeight: weight,
                Density: density, Chargeable: chargeable_weight, unit_system: unit_system, 
                volume_unit: volume_unit, density_unit: density_unit, currency: 'INR'
            }
            context.commit('addCargoSummary', data)
        },

        async addCheckout(context, payload) {
            context.commit('addCheckout', payload)
            const status = await fetchData({ url: 'flight', query: { id: context.state.checkout }, body: { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + context.rootState.userdat.token }}})
            if (status.status == 200) {
                context.commit('addCheckoutData', status.message)
            } else {
                 console.log("Checkout failed")
            }
        },
        clearMidForm(context) {
            context.commit('clearMidForm')
        }
    },

    getters: {
        getAirports(state) {
            return state.Airports 
        },
        getAirportstatus(state) {
            if (state.Airports != null) {
                return true
            } else { 
                return false 
            }
        },
        getAirlines(state) {
            return state.Airlines
        },
        getAirlinesstatus(state) {
            if (state.Airlines != null) { 
                return true
            } else { 
                return false 
            }
        },
        
        getformSummary(state) {
            if (state.cargosummary.length > 0 ) { 
                return state.cargosummary
            } else {
                return false
            }
        },
        getMidForm(state) {
            if (state.midform.length > 0 ) { 
                return state.midform
            } else { 
                return false 
            }
        },
        getWeight(state) {
            if (state.cargosummary[0]) { 
                return state.cargosummary[0].Chargeable 
            } else { 
                return null 
            }
        },
        getTopform(state) {
            if (state.topform != null) {
                return state.topform
            } else {
                return false
            }
        },
        getCheckoutData(state) {
            return state.checkoutData
        }      
    },
};

export default bookingdat;
