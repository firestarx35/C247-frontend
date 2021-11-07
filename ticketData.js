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
    return  { date: newDate.getDate() + ' '+ month.toUpperCase() + ' ' +  dayName.toUpperCase(),
              time: newDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit'})
            }
}

function customDate2(date) {
    const newDate = new Date(date)
    const month = newDate.toLocaleString('default', { month: 'short' });
    const dayName = newDate.toString().split(' ')[0];
    return  { date: newDate.getDate() + ' '+ month.toUpperCase() + ' | ' +  dayName.toUpperCase(),
              time: newDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit'})
            }
}

function currency(type) {
    if (type == 'in') { return '₹'}
    else { return '$' }
}

function charges(ticket) {
    const weight = store.getters['bookingdat/getWeight']
    console.log(weight)
    if ( weight != null ) { 
        const airline_cost = weight*ticket; 
        const gst = Math.round(airline_cost*0.18);
        console.log(typeof gst, typeof airline_cost)
        return { available: true, rate: currency('in') + ticket + '/kg', airline_cost: currency('in') + airline_cost, gst: currency('in') + gst +'@18%', Total: currency('in') + (airline_cost + gst + 120 + 5), fuel_surcharge: currency('in') + 120, cargo247_charge: currency('in')+ 5 } ////To be replaced by airline data
    } else { 
        return { available: false, rate: currency('in') + ticket + '/kg', Total: 'Cargo details required'} 
    }
}

function duration(arrival, departure) {
    const minutes = ((new Date(arrival) -  new Date(departure))/60000);
    const hours = Math.floor(minutes/60);
    const remainingminutes = minutes%60;
    return  hours + ':'+ remainingminutes
}

function normalisedData(ticket) {
    return { 
        airline: airlineData(ticket[0]),
        
        source: airportData(ticket[4]),
        source_date: customDate1(ticket[1]),
        
        flightid: ticket[3],
        
        destination: airportData(ticket[5]),
        destination_date: customDate1(ticket[6]),          
        
        amount: charges(ticket[11]),
        duration: duration(ticket[6], ticket[1])
    }
}

function detailedData(ticket) {
    return { 
        airline: airlineData(ticket[0]),
        
        source: airportData(ticket[4]),
        source_date: customDate1(ticket[1]),
        
        flightid: ticket[3],
        
        destination: airportData(ticket[5]),
        destination_date: customDate1(ticket[6]),          
    
        amount: charges(ticket[11]),
        duration: duration(ticket[6], ticket[1])
    }
}

function ticketData(ticket) {
    return {
        source_code: ticket[4],
        source_date: customDate2(ticket[1]),
                
        destination_code: ticket[5],
        destination_date: customDate2(ticket[6]),          
        
        amount: 'Rate:' + currency('in') + ticket[11] + '/kg',
        duration: duration(ticket[6], ticket[1])
    }
}

export { ticketData, detailedData };