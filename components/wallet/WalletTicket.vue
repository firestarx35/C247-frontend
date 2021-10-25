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

<style scoped>

section p {
    margin-left: 2rem;
    color: rgba(0, 0, 0, 0.8);
    font-size: 25px;
}
.saved-container {
    max-width: 1600px;
    margin: 0.8rem auto auto auto;
    position: relative;
}

.saved-card {
    width: 100%;
    height: 9rem;
    background: #fff;
    border-radius: 1.2rem;
    align-items: center;
    display: flex;
    padding: 1rem;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
    margin-bottom: 1rem;
}
.saved-card:hover {
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.3);
}
.saved-card .airports {
    display: flex;
    flex-direction: column;
}
.saved-card .airports div{
    display: flex;
    align-items: center;
    padding: 0rem;
    margin: auto;
}
.saved-card .airports div img {
    width: 75px;
    margin: 1rem;
}
.saved-card .airports div p {
    font-size: 2rem;
    margin: 0;
}
.saved-card .airline {
    height: 100%;
    display: flex;
    align-content: center;
    padding: 1rem;
    margin: 0 1rem;
    border-left: 2px solid rgba(128, 128, 128, 0.233);
    border-right: 2px solid rgba(128, 128, 128, 0.219);
}
.saved-card .airline img {
    width: 100px;
}
.details {
    width: 100%;
    height: 100%;
    display: flex;    
    flex-direction: column;
    justify-content: space-between;
}
.details .column-1 {
    display: flex;
    justify-content: space-between;
    max-width: 2000px;
}
.details .column-1 .departure {
    display: flex;
    flex-direction: column;
}
.details .column-1 .departure p,
.details .column-1 .arrival p {
    font-size: 1.2rem;
    margin: .5rem 0;
}
.details .column-1 .arrival {
    display: flex;
    flex-direction: column;
    text-align: right;
}
.details .column-2 {
    display: flex;
    justify-content: space-between;
    max-width: 2000px;
    align-items: center;
}
.column-2 p {
    font-size: 1.4rem;
    margin: 0;
}
.column-2 button {
    background: #ffcb00;
    width: 16rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    height: 2.2rem;
    cursor: pointer;
}

/* ===Cross Button=== */
.saved-card .cross-button span {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    padding-bottom: 0.2rem;
    /* border: 1px solid red; */
}
.saved-card .cross-button {
    display: none;
    cursor: pointer;
    background-color: #ffcc00;
    position:absolute;
    top: 0.4rem;
    left: 0.4rem;
    width: 1.5rem;
    border-radius: 50%;
}
.saved-card:hover .cross-button {
    display: flex;
}


/* ==================================Saved Card Ends============================= */



/* ==================================Media Queries============================= */


@media screen and (max-width: 1200px) {
    
    .saved-card .airports div p {
        font-size: 1.5rem;
        margin: 0;
    }
    .details .column-1 .departure h1,
    .details .column-1 .arrival h1 {
        font-size: 1.3rem;
    }
    .details .column-1 .departure p,
    .details .column-1 .arrival p {
        font-size: 1rem;
    }
    .column-2 p {
        font-size: 1rem;
    }
    .column-2 button {
        width: 10rem;
    }
}
</style>