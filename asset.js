// import router from './router/index'
import store from './store/index'

let heroku_server = 'https://c247-ver3.herokuapp.com'
let development_server = 'http://127.0.0.1:8000'

let backend_ends = {
    home: '',
    assets: '/static',
    airports: '/static/data/airportsFull.json',
    airlines: '/static/data/airlines.json',
    flights: '/api/flights?',
    flight: '/api/flight?',
    signup_user: '/signup_user',
    login_user: '/authenticate',
    auto_login: '/auto_login',
    logout_user: '/logout_user',
    get_transactions: '/get_transactions',
    transaction_quote: '/get_transaction_quote',
    submit_transactions: '/submit_transaction',
    get_wallet: '/api/wallet/get_wallet',
    update_wallet: '/api/wallet/update_wallet',
    get_profile: '/get_profile',
    update_profile: '/update_profile',
    user_data: '/user_data',
    reset_password: '/reset',
}


function links(link) {
    return development_server + backend_ends[link]
}

function imgs(img) {
    return development_server + backend_ends.assets + '/images/' + img;
}

// async function fetchData(link) {
//     const url = links(link.url)
//     if (link.query != null){
//         url += new URLSearchParams(link.query) 
//     }
//     await fetch(url, link.body)
//     .then(function(response) {
//     if (response.ok) { return response }
//     throw Error(response.status)
//     })
//     .then(function(response) { 
//         return {status: 200, message: response.json()}
//         })
//         .then(function(data) {
//             // console.log(data)
//             // return { status: 200, message: data }
//             return new Promise(function(resolve, reject) {
//                 resolve({status: 200, message: data})
//             })
//          })
//             .catch(function(error) {
//                 if (store.getters['userdat/getAuthStatus']) {
//                     router.replace('/')
//                     context.commit('userdat/unauthenticateUser', null, { root: true })
//                 } 
//                 return { status: error.message, message: null }
//             })
//         }



async function fetchData(link) {
    var url = links(link.url)
    if (link.query != null) {
        url += new URLSearchParams(link.query) 
    }
    try {
        //Open loading screen
        store.dispatch('userdat/loadingScreen', true)

        const response = await fetch(url, link.body)
        //Close loading screen
        store.dispatch('userdat/loadingScreen', false)
        return { status: response.status, message: await response.json() }
    } catch(error) {
        console.log(error)
    }
   
}
export { links, imgs, fetchData };