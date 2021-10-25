
let heroku_server = 'https://c247feedbacktrial-ver1.herokuapp.com'
let development_server = 'http://127.0.0.1:5000'

let backend_ends = { home:'',
                     assets: '/api/assets/?name=',
                     airports: '/api/airports', 
                     flights: '/api/flights?', 
                     signup_user: '/login/signup_user',
                     login_user: '/login/login_user',
                     auto_login: '/login/auto_login',
                     logout_user: '/login/logout_user',
                     get_transactions: '/login/get_transactions',
                     submit_transactions: '/login/submit_transactions',
                     get_wallet: '/api/wallet/get_wallet',
                     update_wallet: '/api/wallet/update_wallet',
                     get_profile: '/login/get_profile',
                     update_profile: '/login/update_profile',
                     user_data: '/login/user_data',
                     }

    
function links(link) { 
    return development_server + backend_ends[link] 
}

function imgs(img) {
    return development_server + backend_ends.assets + img;
}

export { links, imgs };