airlines = [
	{
		"number": 1,
		"name": "Spice Jet",
		"code": "SG",
		"logo": "/static/images/spicejet_logo.svg",
		"tail": "/static/images/spicejet_tail.svg"
	},
	{
		"number": 2,
		"name": "Air India",
		"code": "AI",
		"logo": "/static/images/airindia_logo.svg",
		"tail": "/static/images/airindia_tail.svg"
		},
	{
		"number": 3,
		"name": "Indigo",
		"code": "6E",
		"logo": "/static/images/indigo_logo.svg",
		"tail": "/static/images/indigo_tail.svg"
	},
	{
		"number": 4,
		"name": "Lufthansa",
		"code": "LH",
		"logo": "/static/images/lufthansa_logo.svg",
		"tail": "/static/images/lufthansa_tail.svg"
		},
	{
		"number": 5,
		"name": "Vistara",
		"code": "UK",
		"logo": "/static/images/vistara_logo.svg",
		"tail": "/static/images/vistara_tail.svg"
	},
	{
		"number": 6,
		"name": "DHL",
		"code": "D5",
		"logo": "/static/images/dhl_logo.svg",
		"tail": "/static/images/dhl_tail.svg"
	},
	{
		"number": 7,
		"name": "Blue Dart",
		"code": "BZ",
		"logo": "/static/images/bluedart_logo.svg",
		"tail": "/static/images/bluedart_tail.svg"
	},
	{
		"number": 8,
		"name": "Turkish Airways",
		"code": "TK",
		"logo": "/static/images/turkish_logo.svg",
		"tail": "/static/images/turkish_tail.svg"
		}
	]

var code = 1
const airline = airlines.find(element => element.number == code)

console.log(airline.logo)