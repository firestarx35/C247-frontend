import router from '../router/index'
import { links } from '../asset'


const userdat = {
    namespaced: true,
    
    state() {
        return { isAuthenticated: false, token: null, 
            ProfileData: null, isprofileAvailable: false,
            Transactions: [], TransactionAvailable: false, 
            WalletTickets: [], WalletfetchStatus: false, 
            Userdata:{ interestedroutes: [], specialTickets:[]}, DataSent: false, }
    },

    mutations: {
        authenticateUser(state, payload) {
            state.token = payload;
            state.isAuthenticated = true;
        },
        unauthenticateUser(state, payload) {
            state.ProfileData = null; 
            state.isprofileAvailable = false
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('c247-token');
        },
        addRoutes(state, payload) {
            state.Userdata.interestedroutes.push([payload.from, payload.to, payload.date]);
            state.DataSent = false;
        },
        addSpecialTickets(state, payload) {
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
            console.log(state.WalletTickets)
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
            console.log(state.WalletTickets)
            state.WalletfetchStatus = true; 
        },
        updateProfile(state, payload) {
            state.ProfileData = []
            state.ProfileData = payload
            state.isprofileAvailable = true 
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
                    const data = [payload[0], midform.dimension, midform.length, midform.width, midform.height, midform.quantity, midform.weight, midform.weighing, midform.type, midform.stacking, midform.turnable]
                    context.state.WalletfetchStatus = false
                    postData(links('update_wallet'), { data: data }, context.state.token)
                    .then((dat) => { 
                        context.commit('updateWallet', dat)
                    })
                } else { 
                    postData(links('update_wallet'), { data: [payload[0], null] }, context.state.token)
                    .then((dat) => { 
                        context.commit('updateWallet', dat)
                    })
                }
            } else {
                postData(links('update_wallet'), { data: [payload[0]] }, context.state.token)
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
        async postUserData(context) {
            postData(links('user_data'), { data: context.state.Userdata }, context.state.token)
            .then((response) => { 
                console.log(response);      ///Take decision to how to handndle it
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

async function postData(url = '', data = {}, token) {
    const response = await fetch(url, { method: 'POST', mode: 'cors',headers: {'Content-Type': 'application/json', Authorization: "Bearer" + " " + token },
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
