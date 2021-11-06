import store from './store/index'
import { imgs } from './asset'

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

function customDate(dates) {
    const newDate = new Date(dates)
    const month = newDate.toLocaleString('default', { month: 'long' });
    const dayName = newDate.toString().split(' ')[0];
    return datetime = { date: newDate.getDate() + ' '+ month.toUpperCase() + ' ' +  dayName.toUpperCase(),
                       time: newDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit'})
                    }
}

function charges(ticket) {
    const weight = store.getters['bookingdat/getWeight']
    if ( weight != null ) { 
        const airline_cost = weight*ticket; 
        const gst = Math.round(airline_cost*0.18);
        return { rate: ticket, airline_cost: airline_cost, gst: gst, Total: airline_cost + gst, fuel_surcharge: 120, cargo247_charge: 5 } ////To be replaced by airline data
    } else { 
        return { rate: ticket, Total: 'Cargo details required'} }
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
        
        source_name: ticket[4],
        source_airport_name: 'Airport Name',
        source_airport_address: 'Airport Address',
        source_date: customDate(ticket[1]),
        
        flightid: ticket[3],
        
        destination_name: ticket[5],
        destination_airport_name: 'Airport Name',
        destination_airport_address: 'Airport Address',
        destination_date: customDate(ticket[6]),          
        
        amount: charges(ticket[11]),
        duration: duration(ticket[6], ticket[1])
        }
}
function normalData(ticket) {
    return { 
        airline: airlineData(ticket[0]),
        
        source_name: ticket[4],
        source_date: customDate(ticket[1]),
                
        destination_name: ticket[5],
        destination_date: customDate(ticket[6]),          
        
        amount: charges(ticket[11]),
        duration: duration(ticket[6], ticket[1])
        }
}

export { detailedData, normalData };