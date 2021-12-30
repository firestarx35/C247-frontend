import router from '../router/index'
import { links } from '../asset'


const userdat = {
    namespaced: true,
    
    state() {
        return { isAuthenticated: false, token: null, ProfileData: null, isprofileAvailable: false,
                Transactions: null, TransactionAvailable: false, WalletTickets: null, WalletfetchStatus: false,
                errorData: { message: null, type: null, status: null }, Userdata:{ interestedroutes: null, specialTickets: null}, DataSent: false }
            },

    mutations: {
        authenticateUser(state, payload) {
            state.token = payload;
            state.isAuthenticated = true;
        },
        unauthenticateUser(state) {
            state.ProfileData = null; 
            state.isprofileAvailable = false
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('c247-token');
        },
        addRoutes(state, payload) {
            state.Userdata.interestedroutes = []
            state.Userdata.interestedroutes.push([payload.from, payload.to, payload.date]);
            state.DataSent = false;
        },
        addSpecialTickets(state, payload) {
            state.Userdata.specialTickets = []
            state.Userdata.specialTickets.push(payload) ///this payload is ticket id Flight id
        },
        fetchTransactions(state, payload) {
            state.Transactions = []
            state.Transactions = payload
            state.TransactionAvailable = true   
        },
        fetchWallet(state, payload) {
            state.WalletTickets = []
            state.WalletTickets = payload
            state.WalletfetchStatus = true
        },
        fetchProfile(state, payload) {
            state.ProfileData = []
            state.ProfileData = payload
            state.isprofileAvailable = true 
        },
        updateWallet(state, payload) {
            state.WalletTickets = []
            state.WalletTickets = payload
            state.WalletfetchStatus = true; 
        },
        updateProfile(state, payload) {
            state.ProfileData = []
            state.ProfileData = payload
            state.isprofileAvailable = true 
        },
        displayError(state, payload) {
            state.errorData = payload
        },
        postUserData(state) {
            state.DataSent = true; 
        },
    },

    actions: {
        authenticateUser(context, payload) {
            if (localStorage.getItem('c247-token')) {
                context.commit('authenticateUser', payload);
            } else { console.log("No token received") }
        }, 
        unauthenticateUser(context) {
            context.commit('unauthenticateUser', null)
        },
        addRoutes(context, payload) {
            context.commit('addRoutes', payload)
        },
        addSpecialTickets(context, payload) {
            context.commit('addSpecialTickets', payload)
        },
        async fetchWallet(context) {
            fetchData(links('get_wallet'), context.state.token)
            .then((data) => {
                context.commit('fetchWallet', data)
            })
        },
        async fetchTransactions(context) {
            fetchData(links('get_transactions'), context.state.token)
            .then((data) => {
                context.commit('fetchTransactions', data)
            })
        },
        async fetchProfile(context) {
            fetchData(links('get_profile'), context.state.token)
            .then((dat) => {
                context.commit('fetchProfile', dat)
            })
        },
        async updateWallet(context, payload) {
            if (payload[1] == true ) {
                let midform = context.rootState.bookingdat.cargodetails
                if (midform[midform.length -1]) {
                    midform = midform[midform.length - 1]
                    const data = { flight_id: payload[0], status: true, consignment_metric: midform.dimension, 
                                    consignment_length: midform.length, consignment_width: midform.width, 
                                    consignment_height: midform.height, consignment_quantity: midform.quantity, 
                                    consignment_weight: midform.weight, consignment_weighing: midform.weighing, 
                                    consignment_type: midform.type, stackable: midform.stacking, turnable: midform.turnable
                    }  
                    postData(links('update_wallet'), data, context.state.token)
                    .then((dat) => { 
                        context.commit('updateWallet', dat)
                    })
                } else { 
                    postData(links('update_wallet'), { flight_id: payload[0], status: true }, context.state.token)
                    .then((dat) => { 
                        context.commit('updateWallet', dat)
                    })
                }
            } else {
                postData(links('update_wallet'), { flight_id: payload[0], status: false }, context.state.token)
                .then((dat) => { 
                    context.commit('updateWallet', dat)
                })
            }
        },
        async updateProfile(context, payload) {
            postData(links('update_profile'), { data: payload }, context.state.token)
            .then((dat) => {
                context.commit('updateProfile', dat)
            })
        },
        displayError(context, payload) {
            context.commit('displayError', { message: payload.message, type: payload.type, status: true })
            setTimeout(function() { 
                context.commit('displayError', { message: null, type: null, status: false })}, 2000)
        },
        async postUserData(context) {
            postData(links('user_data'), { data: context.state.Userdata }, context.state.token)
            .then((response) => { 
                console.log(response);      ///Take decision on how to handle it
                context.commit('postUserData')
              })
        },
    },

    getters: {
        getToken(state) {
            return state.token
        },
        getAuthStatus(state) {
            return state.isAuthenticated
        },
        getErrorMessage(state) {
            return state.errorData
        },
        getWalletStatus(state) {
            return state.WalletfetchStatus
        },
        getWallet(state) {
            return state.WalletTickets
        },
        getProfileStatus(state) {                       ///use this for profile spinner
            return state.isprofileAvailable;
        },
        getProfile(state) {
            return state.ProfileData;
        },
        getName(state) {
            return state.ProfileData[0]
        },
        getTransactionsStatus(state) {
            return state.TransactionAvailable
        },
        getTransactions(state) {
            return state.Transactions
        },

    },
}

   
async function fetchData(url, token) {
    const response = await fetch(url, { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + token }})
                        if (response.ok) { return response.json() }
                        else if (response.status >= 400) { router.replace('/'); userdat.actions.unauthenticateUser() }
                        else { console.log("fetch failed")} 
}

async function postData(url = '', data, token) {
    const response = await fetch(url, { method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json', Authorization: "Bearer" + " " + token },
                                        body: JSON.stringify(data)} );
                    if (response.ok) { return response.json() }
                    else if (response.status >= 400) { router.replace('/'); userdat.actions.unauthenticateUser() }
                    else { console.log("fetch failed")}
}

// async postTest() {
//         postData('http://127.0.0.1:5000/login/login_user', { test: 'data' }, token)
//         .then((data) => { console.log(data) })
//          }

// async fetchTest() {
//      fetchData('http://127.0.0.1:5000/login/login_user', token)
//      .then((data) => { state.Test = data}
//}

export default userdat;
