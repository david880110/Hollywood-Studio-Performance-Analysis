//these are all in a separate file to handle a chart appearing upon loading

function init (year, bv_value, fox_value, paramount_value, sony_value, universal_value, wb_value) {
    oscars_chart (year, bv_value, fox_value, paramount_value, sony_value, universal_value, wb_value); 
    
    generateOscarTable(year);
}

//function to generate the pie charts based off data input
function oscars_chart (year, bv_value, fox_value, paramount_value, sony_value, universal_value, wb_value) {
    data = [
			{
				"label": "BV",
				"value": parseInt(bv_value),
				"color": "#2484c1"
			},
			{
				"label": "Fox",
				"value": parseInt(fox_value),
				"color": "#0c6197"
			},
			{
				"label": "Paramount",
				"value": parseInt(paramount_value),
				"color": "#4daa4b"
			},
			{
				"label": "Sony",
				"value": parseInt(sony_value),
				"color": "#90c469"
			},
			{
				"label": "Universal",
				"value": parseInt(universal_value),
				"color": "#daca61"
			},
			{
				"label": "WB",
				"value": parseInt(wb_value),
				"color": "#e4a14b"
			}
		]
    var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Oscar Winners by Studio (" + year + ")",
			"fontSize": 24,
			"font": "open sans"
		},
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
		"content": data
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
}

//function to generate the table based off data input
//pulls from the flask route
function generateOscarTable(currentOption) {
    
    //data route for current year
    if (currentOption == '1990-2017') {
        var oscars_url = '/oscars/overall';
    }
    
    else {
         var oscars_url = '/oscars/' + currentOption;
    }
    
    
    Plotly.d3.json(oscars_url, function(error, response){
        if (error) return console.warn(error);
        
        console.log(oscars_url);

        //Grab a reference to where the metadata table will be
        var oscarTable = document.getElementById("oscarTable");

        for (var i = 0; i < response.length;  i++) {

            var row = oscarTable.insertRow(i);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);

            cell1.innerHTML = response[i]["Studio"];
            cell2.innerHTML = response[i]["Oscar_winners"];
        } 
            
                
        // set up the table headers
        var row = oscarTable.insertRow(0);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Studio";
        cell2.innerHTML = "# of Oscar Winners";
    });
}