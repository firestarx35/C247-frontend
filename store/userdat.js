import { fetchData } from '../asset'


const userdat = {
    namespaced: true,
    
    state() {
        return { isLoading: false, isAuthenticated: false, token: null, ProfileData: null, isprofileAvailable: false,
                Transactions: null, Transaction_no: null, WalletTickets: null, walletStatus: false, errorData: { message: null, type: null, status: null }, 
                Userdata:{ interestedroutes: null, specialTickets: null}, DataSent: false }
            },

    mutations: {
        loadingScreen(state, payload) {
            state.isLoading = payload
        },

        authenticateUser(state, payload) {
            state.token = payload
            state.isAuthenticated = true
        },
        unauthenticateUser(state) {
            state.ProfileData = null
            state.isprofileAvailable = false
            state.token = null
            state.isAuthenticated = false
            localStorage.removeItem('c247-token')
        },
        addRoutes(state, payload) {
            state.Userdata.interestedroutes = []
            state.Userdata.interestedroutes.push([payload.from, payload.to, payload.date])
            state.DataSent = false
        },
        addSpecialTickets(state, payload) {
            state.Userdata.specialTickets = []
            state.Userdata.specialTickets.push(payload) ///this payload is ticket id Flight id
        },
        fetchTransactions(state, payload) {
            state.Transactions = []
            state.Transactions = payload  
        },
        fetchWallet(state, payload) {
            state.WalletTickets = []
            state.WalletTickets = payload
            state.walletStatus = true
        },
        fetchProfile(state, payload) {
            state.ProfileData = []
            state.ProfileData = payload
            state.isprofileAvailable = true 
        },
        updateWallet(state, payload) {
            state.WalletTickets = []
            state.WalletTickets = payload
            state.walletStatus = true
        },
        walletfetchStatus(state, payload) {
            state.walletStatus = payload
        },
        updateProfile(state, payload) {
            state.ProfileData = []
            state.ProfileData = payload
            state.isprofileAvailable = true 
        },
        updateTransactionId(state, payload) {
            state.Transaction_no = payload
        },
        displayError(state, payload) {
            state.errorData = payload
        },
        postUserData(state) {
            state.DataSent = true; 
        },
    },

    actions: {
        loadingScreen(context, payload) {
            console.log("Loading: ", payload)
            context.commit('loadingScreen', payload)
        },

        authenticateUser(context, payload) {
            if (localStorage.getItem('c247-token')) {
                context.commit('authenticateUser', payload)
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
            const status = await fetchData({ url: 'get_wallet', query: null, body: { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + context.state.token }}})
            if ( status.status == 200 ) {
                context.commit('fetchWallet', status.message)
            }
        },

        async fetchTransactions(context) {
            const status = await fetchData({ url: 'get_transactions', query: null, body: { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + context.state.token }}})
            if ( status.status == 200 ) {
                context.commit('fetchTransactions', status.message)
            }
        },

        async fetchProfile(context) {
            const status = await fetchData({ url: 'get_profile', query: null, body: { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + context.state.token }}})
            if ( status.status == 200 ) {
                context.commit('fetchProfile', status.message)
            }
        },

        async updateWallet(context, payload) {
            context.commit('walletfetchStatus', false)

            if (payload[1] == true ) {
                let midform = context.rootState.bookingdat.midform
                if (midform[midform.length -1]) {
                    midform = midform[midform.length - 1]
                    const data = { flight_id: payload[0], status: true, consignment_metric: midform.dimension, 
                                    consignment_length: midform.length, consignment_width: midform.width, 
                                    consignment_height: midform.height, consignment_quantity: midform.quantity, 
                                    consignment_weight: midform.weight, consignment_weighing: midform.weighing, 
                                    consignment_type: midform.type, stackable: midform.stacking, turnable: midform.turnable
                    } 
                    const status = await fetchData({ url: 'update_wallet', query: null, body: { method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json', Authorization: "Bearer" + " " + context.state.token },
                                                                                                body: JSON.stringify(data) } })
                    if ( status.status == 200 ) { 
                        context.commit('updateWallet', status.message)
                        context.commit('displayError', { message: 'Successfully frozen', type: true, status: true })
                        setTimeout(function() { 
                            context.commit('displayError', { message: null, type: null, status: false })}, 2000)
                    }
                } else {
                    const status = await fetchData({ url: 'update_wallet', query: null, body: { method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json', Authorization: "Bearer" + " " + context.state.token },
                                                                                                body: JSON.stringify({ flight_id: payload[0], status: true }) } })
                    if ( status.status == 200 ) { 
                        context.commit('updateWallet', status.message)
                        context.commit('displayError', { message: 'Successfully frozen', type: true, status: true })
                        setTimeout(function() {
                            context.commit('displayError', { message: null, type: null, status: false })}, 2000)
                    }
                }
            } else {
                const status = await fetchData({ url: 'update_wallet', query: null, body: { method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json', Authorization: "Bearer" + " " + context.state.token },
                                                                                                body: JSON.stringify({ flight_id: payload[0], status: false }) } })
                if ( status.status == 200 ) { 
                    context.commit('updateWallet', status.message)
                }
            }
        },

        async updateProfile(context, payload) {
            const status = await fetchData({ url: 'update_profile', query: null, body: { method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json', Authorization: "Bearer" + " " + context.state.token },
                                                                                                body: JSON.stringify({ data: payload }) } })
                if ( status.status == 200 ) { 
                    context.commit('updateProfile', status.message)
                }
         
        },

        updateTransactionId(context, payload) {
            context.commit('updateTransactionId', payload)
        },

        async postUserData(context) {
            const status = await fetchData({ url: 'user_data', query: null, body: { method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json', Authorization: "Bearer" + " " + context.state.token },
                                                                                    body: JSON.stringify({ data: context.state.Userdata  }) } })
            if ( status.status == 200 ) { 
                console.log(status.message);      ///Take decision on how to handle it
                context.commit('postUserData')
            }
        },

        displayError(context, payload) {
            context.commit('displayError', { message: payload.message, type: payload.type, status: true })
            setTimeout(function() { 
                context.commit('displayError', { message: null, type: null, status: false })}, 2000)
        },
    },

    getters: {
        loadingState(state) {
            return state.isLoading
        },
        getToken(state) {
            return state.token
        },
        getAuthStatus(state) {
            return state.isAuthenticated
        },
        getErrorMessage(state) {
            return state.errorData
        },
        getWallet(state) {
            if (state.WalletTickets != null) {
                return state.WalletTickets
            } else {
                return false
            }
        },
        getWalletfetchStatus(state) {
            return state.walletStatus
        },
        getProfileStatus(state) {                       ///use this for profile spinner
            return state.isprofileAvailable;
        },
        getProfile(state) {
            return state.ProfileData
        },
        getName(state) {
            return state.ProfileData[0]
        },
        getTransactions(state) {
            if (state.Transactions != null) {
                return state.Transactions
            } else {
                return false
            }
        },
        getTransactionId(state) {
            return state.Transaction_no
        }

    },
}

export default userdat
