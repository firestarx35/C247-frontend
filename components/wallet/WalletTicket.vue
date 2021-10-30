<template>
    <div class="saved-container">
            <div class="saved-card">
                <div class="cross-button" @click="$emit('remove-wallet', Data.flightid)"><span>&#10539;</span></div>
                <div class="airports">
                    <div>
                        <p>{{Data.source_airport}}</p>
                        <img :src="dots" alt="">
                        <p>{{Data.destination_airport}}</p>
                    </div>
                </div>
                <div class="airline">
                    <img :src="airline[1]" alt="airline logo">
                </div>
                <div class="details">
                    <div class="column-1">
                        <div class="departure">
                            <h1>{{Data.source_date}}</h1>
                            <p>{{Data.source_airport_address}}</p>
                        </div>
                        <div class="arrival">
                            <h1>{{Data.destination_date}}</h1>
                            <p>{{Data.destination_airport_address}}</p>
                        </div>
                    </div>
                    <div class="column-2">
                        <p>Current Rate: INR {{Data.rate}}</p>
                        <p>Chargable Weight: 100kg</p>
                        <button class="btn">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { computed } from 'vue'
import { imgs } from '../../asset'

export default {
    emits: ['remove-wallet'],
    props: ['savedTicket'],
    setup(props) {
        const dots = imgs('Dots.svg')

         const airline = computed(function() {
            if (props.savedTicket[0] == 1) { return ['Spice jet', imgs('spice-jet-logo.png')]}
            else if (props.savedTicket[0] == 2) { return ['Air India', imgs('Air-India-Express-logo.svg')]}
            else if (props.savedTicket[0] == 3) { return ['Indigo', imgs('indigo-logo.png')]}
            else if (props.savedTicket[0] == 4) { return ['Lufthansa', imgs('lufthansa-logo.png')]}
            else if (props.savedTicket[0] == 5) { return ['Vistara', imgs('Vistara-logo.svg')]}
            else if (props.savedTicket[0] == 6) { return ['DHL', imgs('DHL-Express-logo.png')]}
            else if (props.savedTicket[0] == 7) { return ['Blue Dart', imgs('Blue-Dart-logo.png')]}
            else if (props.savedTicket[0] == 8) { return ['Turkish Airways', imgs('turkish-airlines-logo.png')]}
        })
        
        const Data = computed (function() {
            return { source_airport: props.savedTicket[4],
                    source_airport_address: 'Source Address',
                    source_date: customDate(props.savedTicket[1]),
                    flightid: props.savedTicket[2],
                    destination_airport: props.savedTicket[5],
                    destination_date: customDate(props.savedTicket[6]),
                    destination_airport_address: 'Destination Address',
                    rate: props.savedTicket[7]
                }
        })

         function customDate(dates) {
            const newDate = new Date(dates)
            const month = newDate.toLocaleString('default', { month: 'short' });
            const dayName = newDate.toString().split(' ')[0];
            const datetime = newDate.getDate() + ' '+ month.toUpperCase() + ' ' +  dayName.toUpperCase() + ' | '+ newDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit'})
            return  datetime 
        }
        
        return { dots, props, Data, airline }
    },
}
</script>
