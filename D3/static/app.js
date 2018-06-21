function pieChartData(){
    var url = '/oscar';
    
}

sampleData = [
			{
				"label": "BV",
				"value": 24,
				"color": "#2484c1"
			},
			{
				"label": "Fox",
				"value": 22,
				"color": "#0c6197"
			},
			{
				"label": "Paramount",
				"value": 19,
				"color": "#4daa4b"
			},
			{
				"label": "Sony",
				"value": 25,
				"color": "#90c469"
			},
			{
				"label": "Universal",
				"value": 27,
				"color": "#daca61"
			},
			{
				"label": "WB",
				"value": 33,
				"color": "#e4a14b"
			}
		]

var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Oscar Winners by Studio",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieOuterRadius": "90%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": sampleData
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	}
});