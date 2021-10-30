import { links } from '../asset'

const bookingdat = {
    namespaced: true,
    state() {
        return { Airports: [], isairportAvialable: false, topform: null, cargodetails: [], cargosummary: [], checkout: null }
    },

    mutations: {
        async fetchAirports(state) {
            await fetch(links('airports')) //'https://c247feedbacktrial-ver1.herokuapp.com/api/Airports'
            .then((response)=> {
                if (response.ok) { return response.json();} 
                else { console.log('fetch failed'); }
            }).then((dat)=> {
                    state.Airports = dat; 
                    state.isairportAvialable = true;
                    }); 
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
        addChechoutData(state, payload) {
            state.checkout = {};
            state.checkout = payload
        }
    
    },

    actions: {
        fetchAirports(context) {
            context.commit('fetchAirports');
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
                context.commit('userdat/addRoutes', payload, { root: true });  // send this top form data to dynamicdat.js interestedtickets
            }
           
        },
        addmidformData(context, payload) {
            let i = context.state.cargodetails.findIndex(x => x.id == payload.id);
            if ( i > -1) { context.state.cargodetails.splice(i, 1); context.state.cargosummary.splice(i, 1); }
            context.commit('addmidformData', payload);
            context.commit('makeSummary', payload);
        },
        addCheckoutData(context, payload) {
            context.commit('addCheckoutData', payload)
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
        getCheckoutdata(state) {
            return state.checkout
        }
    }
};

export default bookingdat;
