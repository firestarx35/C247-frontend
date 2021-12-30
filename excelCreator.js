import XLSX from 'xlsx';
import store from './store/index';
import { quoteData } from './ticketData'

var units = { Dimension: '(cm)', currency: '(Rs.)'} 
var cargo_details = { midform: {id: null, length: 12, width: 24, height: 36, weight: 77, quantity: 10, type: 'General Cargo', stacking: true, weighing: false, turnable: false, dimension: 'cm' }, TotalWeight: 77 }
//var cargo_details = store.getters['bookingdat/getformSummary']
//var data = store.getters['ticketsdat/getUnsortedTickets]
var fake_data = [
            [ 3, 1212, "6E544", "Wed, 15 Dec 2021 04:07:00 GMT", "Wed, 15 Dec 2021 07:34:00 GMT", 1, "DEL", "BOM", 153, 38, 46, 856 ],
            [ 1, 1965, "SG102", "Wed, 15 Dec 2021 03:28:00 GMT", "Wed, 15 Dec 2021 09:36:00 GMT", 1, "DEL", "BOM", 122, 61, 28, 3643 ],
            [ 3, 2755, "6E354", "Wed, 15 Dec 2021 11:15:00 GMT", "Wed, 15 Dec 2021 12:40:00 GMT", 2, "DEL", "BOM", 144, 18, 39, 5240 ],
            [ 2, 2614, "AI518", "Wed, 15 Dec 2021 10:28:00 GMT", "Wed, 15 Dec 2021 18:53:00 GMT", 0, "DEL", "BOM", 197, 50, 21, 4234 ],
            [ 4, 1252, "LH618", "Wed, 15 Dec 2021 11:43:00 GMT", "Wed, 15 Dec 2021 22:50:00 GMT", 2, "DEL", "BOM", 179, 30, 17, 5529 ],
            [ 7, 2388, "BZ678", "Wed, 15 Dec 2021 23:26:00 GMT", "Thu, 16 Dec 2021 02:58:00 GMT", 1, "DEL", "BOM", 105, 18, 49, 2137 ],
            [ 2, 1667, "AI584", "Thu, 16 Dec 2021 10:30:00 GMT", "Thu, 16 Dec 2021 13:33:00 GMT", 1, "DEL", "BOM", 106, 18, 25, 2227 ],
            [ 5, 1525, "UK719", "Thu, 16 Dec 2021 12:26:00 GMT", "Thu, 16 Dec 2021 22:51:00 GMT", 1, "DEL", "BOM", 34, 58, 33, 3254 ],
            [ 6, 4022, "D0506", "Thu, 16 Dec 2021 04:05:00 GMT", "Fri, 17 Dec 2021 01:30:00 GMT", 1, "DEL", "BOM", 58, 39, 19, 3462 ],
            [ 8, 2076, "TK207", "Fri, 17 Dec 2021 07:49:00 GMT", "Fri, 17 Dec 2021 16:57:00 GMT", 0, "DEL", "BOM", 126, 13, 29, 587 ],
            [ 6, 1595, "D0654", "Fri, 17 Dec 2021 08:35:00 GMT", "Sat, 18 Dec 2021 00:41:00 GMT", 2, "DEL", "BOM", 179, 71, 18, 2725 ],
            [ 1, 3677, "SG426", "Sat, 18 Dec 2021 03:15:00 GMT", "Sat, 18 Dec 2021 03:43:00 GMT", 1, "DEL", "BOM", 162, 33, 33, 817 ],
        ]
function quoteAggregator(data = fake_data) {
    var route = ["Source: ", data[0][6], "Destination: ", data[0][7]]
    var headers = ["S.No.", "Airline", "Duration(Hrs)", "Rate(per kg)", "Flight No.", "Departure Time", "Departure Date", "Arrival Time", "Arrival Date", "Stops"]
    if (cargo_details) {
        headers.push("Total Cost"+ units.currency)
        for (let i = 0; i < data.length; i++) {
            data[i] = quoteData(data[i])
            //data[i].push(cargo_details.TotalWeight)
            data[i].push(cargo_details.TotalWeight*data[i][2])
            data[i].unshift(i+1)
          }
        var cargo_headers = ["Type", "Weight(kg)", "Quantity", "Length"+units.Dimension, "Width"+units.Dimension, "Height"+units.Dimension, "Stackable", "Turnable"]
        var cargo = [ cargo_details.midform.type, cargo_details.midform.weight, cargo_details.midform.quantity, cargo_details.midform.length, cargo_details.midform.width,
                        cargo_details.midform.height, cargo_details.midform.stacking, cargo_details.midform.turnable ]
        data.unshift(headers)
        data.unshift([null])
        data.unshift([null])
        data.unshift(route)
        data.unshift([null])
        data.unshift(cargo)
        data.unshift(cargo_headers)
        data.unshift([null])
    } else {
        for (let i = 0; i < data.length; i++) {
            data[i] = quoteData(data[i])
            data[i].unshift(i+1)
        }
        data.unshift([null])
        data.unshift([null])
        data.unshift(route)
        data.unshift([null])
    }
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    XLSX.writeFile(wb, "sheetjs.xlsx");
}

export { quoteAggregator };