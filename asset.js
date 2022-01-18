
// let server = 'https://c247-ver3.herokuapp.com'
let server = 'http://127.0.0.1:8000'

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
    transaction_quote: '/get_transaction_quote?',
    submit_transaction: '/submit_transaction',
    get_wallet: '/api/wallet/get_wallet',
    update_wallet: '/api/wallet/update_wallet',
    get_profile: '/get_profile',
    update_profile: '/update_profile',
    user_data: '/user_data',
    reset_password: '/reset',
}


function links(link) {
    return server + backend_ends[link]
}

function imgs(img) {
    return server + backend_ends.assets + '/images/' + img;
}


async function fetchData(link) {
    var url = links(link.url)
    if (link.query != null) {
        url += new URLSearchParams(link.query) 
    }
    try {
        const response = await fetch(url, link.body)
        return { status: response.status, message: await response.json() }
    } catch(error) {
        console.log(error)
    }
   
}
export { links, imgs, fetchData };