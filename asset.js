
let heroku_server = 'https://c247-ver3.herokuapp.com'
let development_server = 'http://127.0.0.1:8000'

let backend_ends = {
    home: '',
    assets: '/static',
    airports: '/static/data/airportsFull.json',
    flights: '/api/flights?',
    flight: '/api/flight?',
    signup_user: '/signup_user',
    login_user: '/authenticate',
    auto_login: '/auto_login',
    logout_user: '/logout_user',
    get_transactions: '/get_transactions',
    submit_transactions: '/submit_transactions',
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

export { links, imgs };