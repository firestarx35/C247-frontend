import store from './store/index'
import { imgs } from './asset'


function airportData(iata) {
    const airport = store.getters['bookingdat/getAirports'].find(element => element.airportCode == iata)
    return { code: iata, name: airport.airportName, address: airport.cityName }
}

function airlineData(airline_id) {
    const airline = store.getters['bookingdat/getAirlines'].find(element => element.number == airline_id)
    return { name: airline.name, logo: imgs(airline.logo), tail: imgs(airline.tail), iatacode: airline.code }
}

function customDate1(date) {
    const newDate = new Date(date)
    const month = newDate.toLocaleString('default', { month: 'long' });
    const dayName = newDate.toString().split(' ')[0];
    return  { date: newDate.getDate() + ' '+ month.toUpperCase() + ' | ' +  dayName.toUpperCase(),
              time: newDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })
            }
}

function customDate2(date) {
    const newDate = new Date(date)
    const month = newDate.toLocaleString('default', { month: 'short' });
    const dayName = newDate.toString().split(' ')[0];
    return  { date: newDate.getDate() + ' '+ month.toUpperCase() + ' | ' +  dayName.toUpperCase(),
              time: newDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })
            }
}

function currency() {
    var region ='in'
    if (region == 'in') { return 'INR '}
    else { return 'USD' }
}

function charges(ticket) {
    const chargeable_weight = store.getters['bookingdat/getWeight']
    if (chargeable_weight != null) { 
        const airline_cost = chargeable_weight*ticket
        return { available: true, rate: currency() + ticket + ' kg', airline_cost: currency() + airline_cost, surcharge: currency() + (airline_cost*0.02).toFixed(2) + ' @ 2%', total: currency() + (airline_cost*1.02).toFixed(1) } ////To be replaced by airline data
    } else { 
        return { available: false, rate: currency() + ticket + '/kg' } 
    }
}

function duration(time) {
    let hrs = Math.trunc(time/3600)
    if (hrs != 0) {
        return hrs + ' hrs '+ (time%3600)/60 + ' min'
    } else {
        return (time%3600)/60 + ' min'
    }
}

function ExpansionData(ticket) {
        return { 
            airline: airlineData(ticket[0]),
            
            source: airportData(ticket[7]),
            source_date: customDate2(ticket[4]),
            
            flightid: ticket[3],
            flightno: ticket[12],
            
            destination: airportData(ticket[8]),
            destination_date: customDate2(ticket[5]),          
        
            amount: charges(ticket[2]),
            duration: duration(parseInt(ticket[1]))
        }  
}

function sortedData(ticket) {
    return {
        source_code: ticket[7],
        source_date: customDate2(ticket[4]),
                
        destination_code: ticket[8],
        destination_date: customDate2(ticket[5]),          
        
        amount: charges(ticket[2]),
        duration: duration(parseInt(ticket[1]))
    }
}

function unsortedData(ticket) {
    return {
        airline: airlineData(ticket[0]),
        
        source_code: ticket[7],
        source_date: customDate2(ticket[4]),
                
        destination_code: ticket[8],
        destination_date: customDate2(ticket[5]),          
        
        amount: charges(ticket[2]),
        duration: duration(parseInt(ticket[1]))
    }

}

function walletData(ticket) {
    if (ticket[15] != null) {
        return {
            airline: airlineData(ticket[0]),
                
            source: airportData(ticket[7]),
            source_date: customDate1(ticket[4]),
            
            flightid: ticket[3],
            flightno: ticket[12],
            
            destination: airportData(ticket[8]),
            destination_date: customDate1(ticket[5]),
            
            cargodetails: { chargeable_weight: ticket[17]+' kg', type: ticket[21] },
        
            rate: currency() + ticket[2]* ticket[17],

            duration: duration(parseInt(ticket[1])),

            available: true
        }
    } else {
        return {
            airline: airlineData(ticket[0]),
                
            source: airportData(ticket[7]),
            source_date: customDate1(ticket[4]),
            
            flightid: ticket[3],
            flightno: ticket[12],
            
            destination: airportData(ticket[8]),
            destination_date: customDate1(ticket[5]),
            
            cargodetails: { chargeable_weight: '--', type: '--' },
        
            rate: currency() + ticket[2] + ' /kg',

            duration: duration(parseInt(ticket[1])),

            available: false
        }
    }
}

function transactionData(transaction) {
    return {
        airline: airlineData(transaction[4]),

        transaction_no: transaction[1],
        awb: transaction[2],
        
        source: airportData(transaction[6]),
        source_date: customDate2(transaction[7]),
            
        flightid: transaction[3],
        flightno: transaction[5],
            
        destination: airportData(transaction[8]),
        destination_date: customDate2(transaction[9]),

        rate: currency() + transaction[18],

        cargo: { metric: transaction[11], weight: transaction[12], length: transaction[13], 
            width: transaction[14], height: transaction[15], quantity: transaction[16], 
            cargo_type: transaction[19], stackable: transaction[20], turnable: transaction[21]
        },
        status: transaction[22]
    }
}

function quoteData(ticket) {
    return [ airlineData(ticket[0]).name, "007", ticket[1], ticket[2], 
            new Date(ticket[3]).toLocaleTimeString(), new Date(ticket[3]).toLocaleDateString(),
            new Date(ticket[4]).toLocaleTimeString(), new Date(ticket[4]).toLocaleDateString(),
            ticket[5] ]
}
export { airportData, airlineData, sortedData, unsortedData, ExpansionData, walletData, transactionData, quoteData, customDate1 }