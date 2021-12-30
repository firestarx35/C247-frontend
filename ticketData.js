import store from './store/index'
import { imgs } from './asset'

function airportData(iata) {
    const airport = store.getters['bookingdat/getAirports'].find(element => element.airportCode == iata)
    return { code: iata, name: airport.airportName, address: airport.cityName }
}

function airlineData(airline_id) {
    if (airline_id == 1) { return { name: 'Spice jet', logo: imgs('spice-jet-logo.png')} }
    else if (airline_id == 2) { return { name: 'Air India', logo: imgs('Air-India-Express-logo.svg')} }
    else if (airline_id == 3) { return { name: 'Indigo', logo: imgs('indigo-logo.png')} }
    else if (airline_id == 4) { return { name: 'Lufthansa', logo: imgs('lufthansa-logo.png')} }
    else if (airline_id == 5) { return { name: 'Vistara', logo: imgs('Vistara-logo.svg')} }
    else if (airline_id == 6) { return { name: 'DHL', logo: imgs('DHL-Express-logo.png')} }
    else if (airline_id == 7) { return { name: 'Blue Dart', logo: imgs('Blue-Dart-logo.png')} }
    else if (airline_id == 8) { return { name: 'Turkish Airways', logo: imgs('turkish-airlines-logo.png')} }
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

function currency(type) {
    if (type == 'in') { return '₹'}
    else { return '$' }
}

function charges(ticket) {
    const weight = store.getters['bookingdat/getWeight']
    if ( weight != null ) { 
        const airline_cost = weight*ticket; 
        const gst = Math.round(airline_cost*0.18);
        return { available: true, rate: currency('in') + ticket + '/kg', airline_cost: currency('in') + airline_cost, gst: currency('in') + gst +' @18% ', Total: currency('in') + (airline_cost + gst + 120 + 5), fuel_surcharge: currency('in') + 120, cargo247_charge: currency('in')+ 5 } ////To be replaced by airline data
    } else { 
        return { available: false, rate: currency('in') + ticket + '/kg', Total: 'Cargo details required' } 
    }
}

function walletCargo(ticket) {
    if (ticket[12]) {
        return { weight: ticket[17]+' kg', type: ticket[19] }
    } else { return { weight: 'NA', type: 'NA'}}
}

function duration(arrival, departure) {
    const minutes = ((new Date(arrival) -  new Date(departure))/60000);
    const hours = Math.floor(minutes/60);
    const remainingminutes = minutes%60;
    return  hours + ':'+ remainingminutes
}

function detailedData(ticket) {

        return { 
            airline: airlineData(ticket[0]),
            
            source: airportData(ticket[7]),
            source_date: customDate1(ticket[4]),
            
            flightid: ticket[3],
            flightno: ticket[12],
            
            destination: airportData(ticket[8]),
            destination_date: customDate1(ticket[5]),          
        
            amount: charges(ticket[2]),
            duration: duration(ticket[5], ticket[4])
        }  
}

function ticketData(ticket) {
    return {
        source_code: ticket[7],
        source_date: customDate2(ticket[4]),
                
        destination_code: ticket[8],
        destination_date: customDate2(ticket[5]),          
        
        amount: 'Rate:' + currency('in') + ticket[2] + '/kg',
        duration: duration(ticket[5], ticket[4])
    }
}

function walletData(ticket) {
    return {
        airline: airlineData(ticket[0]),
            
        source: airportData(ticket[7]),
        source_date: customDate1(ticket[4]),
        
        flightid: ticket[3],
        flightno: ticket[12],
        
        destination: airportData(ticket[8]),
        destination_date: customDate1(ticket[5]),
        
        cargodetails: walletCargo(ticket),
    
        rate: currency('in') + ticket[2] + '/kg',
        duration: duration(ticket[5], ticket[4]),
    }
}

function quoteData(ticket) {
    return [ airlineData(ticket[0]).name, "007", ticket[1], ticket[2], 
            new Date(ticket[3]).toLocaleTimeString(), new Date(ticket[3]).toLocaleDateString(),
            new Date(ticket[4]).toLocaleTimeString(), new Date(ticket[4]).toLocaleDateString(),
            ticket[5] ]
}
export { airlineData, ticketData, detailedData, walletData, quoteData };