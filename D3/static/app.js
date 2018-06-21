//dropdown list
function dropdownList() {
    
    //data route for dropdown labels
    var years_url = '/years';
    
    // Grab a reference to the dropdown select element
    var selectYear = document.getElementById('selectYear');
    //console.log(selectYear);
    
    // Use the list of years from the route to populate the select options
    Plotly.d3.json(years_url, function(error, response) {
        if (error) return console.warn(error);
        
        for (var i = 0; i < response.length;  i++) {
            var dropdownOption = document.createElement('option');
            dropdownOption.text = response[i];
            dropdownOption.value = response[i];
            //console.log(dropdownOption);
            
            selectYear.appendChild(dropdownOption);
        }
    })
}

//call to load in the list
dropdownList();

function optionChanged(year) {
    
    var isEmpty = document.getElementById('pieChart').innerHTML === "";
    
    if (isEmpty) {
        oscars_by_year(year);
    }
        
    else {
        var pieChart = document.getElementById("pieChart");
        pieChart.innerHTML = '';
        oscars_by_year(year);
    }
}
    
//hardcoded due to time constraints
function oscars_by_year(year) {
    switch(year) {
        case '1990':
            oscars_1990();
            console.log(year);
            break;
        case '1991':
            oscars_1991();
            console.log(year);    
            break;
        case '1992':
            oscars_1992();
            console.log(year);
            break;
        default:
            oscars_summary();
    }
}


//oscars_summary();

//Oscars pie charts
//Hardcoded due to time constraints

//pie chart for the overall summary of Oscar winners
function oscars_summary() { 
    oscars_summary_data = [
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
    
    var pie = new d3pie("overallPieChart", {
	"header": {
		"title": {
			"text": "Oscar Winners by Studio",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
            "text": "Overall Summary of Winners from 1990-2017",
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
		"content": oscars_summary_data
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

//1990
function oscars_1990() { 
    oscars_1990_data = [
			{
				"label": "BV",
				"value": 1,
				"color": "#2484c1"
			},
			{
				"label": "Fox",
				"value": 0,
				"color": "#0c6197"
			},
			{
				"label": "Paramount",
				"value": 2,
				"color": "#4daa4b"
			},
			{
				"label": "Sony",
				"value": 1,
				"color": "#90c469"
			},
			{
				"label": "Universal",
				"value": 0,
				"color": "#daca61"
			},
			{
				"label": "WB",
				"value": 2,
				"color": "#e4a14b"
			}
		]
    var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Oscar Winners by Studio (1990)",
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
		"content": oscars_1990_data
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

//1991
function oscars_1991() { 
    oscars_1991_data = [
			{
				"label": "BV",
				"value": 1,
				"color": "#2484c1"
			},
			{
				"label": "Fox",
				"value": 0,
				"color": "#0c6197"
			},
			{
				"label": "Paramount",
				"value": 0,
				"color": "#4daa4b"
			},
			{
				"label": "Sony",
				"value": 2,
				"color": "#90c469"
			},
			{
				"label": "Universal",
				"value": 0,
				"color": "#daca61"
			},
			{
				"label": "WB",
				"value": 1,
				"color": "#e4a14b"
			}
		]
    var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Oscar Winners by Studio (1991)",
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
		"content": oscars_1991_data
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

//1992
function oscars_1992() { 
    oscars_1992_data = [
			{
				"label": "BV",
				"value": 1,
				"color": "#2484c1"
			},
			{
				"label": "Fox",
				"value": 2,
				"color": "#0c6197"
			},
			{
				"label": "Paramount",
				"value": 0,
				"color": "#4daa4b"
			},
			{
				"label": "Sony",
				"value": 4,
				"color": "#90c469"
			},
			{
				"label": "Universal",
				"value": 1,
				"color": "#daca61"
			},
			{
				"label": "WB",
				"value": 1,
				"color": "#e4a14b"
			}
		]
    var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Oscar Winners by Studio (1992)",
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
		"content": oscars_1992_data
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


//oscars_1990();
//oscars_1991();
//oscars_1992();