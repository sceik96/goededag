window.onload = function () {

var chart = new CanvasJS.Chart("foodReserves", {
	animationEnabled: true,
	theme: "dark2",
	axisY: {
		title: "Kilograms (kg)",

	},
	data: [{
		type: "column",
		showInLegend: false,
		dataPoints: [
			{ y: 440, label: "Hamburgers" },
			{ y: 976, label: "Rice" },
			{ y: 807, label: "Potatoes" },
			{ y: 300, label: "Mars bars" },
			{ y: 530, label: "Tomatoes" },
		]
	}]
});
chart.render();

var chart = new CanvasJS.Chart("drinkReserves", {
	animationEnabled: true,
	theme: "dark2",
	axisY: {
		title: "Liters (L)",

	},
	data: [{
		type: "column",
		showInLegend: false,
		dataPoints: [
			{ y: 300, label: "Coca Cola" },
			{ y: 923, label: "Water" },
			{ y: 290, label: "Gin" },
			{ y: 843, label: "Tonic" },
			{ y: 657, label: "Orange juice" },
		]
	}]
});
chart.render();

var chart = new CanvasJS.Chart("distances", {
	animationEnabled: true,
  theme: "dark2",

	data: [{
		type: "doughnut",
		startAngle: 60,
		indexLabelFontSize: 30,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 125109248, label: "To Mars", indexLabelFontSize: "15" },
			{ y: 100738237, label: "From Earth", indexLabelFontSize: "15" },

		]
	}]
});
chart.render();

var chart = new CanvasJS.Chart("speed", {
	animationEnabled: true,
  theme: "dark2",
	axisY:{
		includeZero: false,
    title: "(c)",
	},
	data: [{
		type: "line",
		indexLabelFontSize: 30,
		dataPoints: [
			{ y: 0.312 , indexLabel: "Lowest",markerColor: "DarkSlateGrey", markerType: "cross", indexLabelFontSize: "15" },
			{ y: 0.313 },
			{ y: 0.316 },
			{ y: 0.320 },
			{ y: 0.326 },
			{ y: 0.333 },
			{ y: 0.341 },
			{ y: 0.360 , indexLabel: "Highest",markerColor: "red", markerType: "triangle", indexLabelFontSize: "15" },
			{ y: 0.359 },
			{ y: 0.358 },
			{ y: 0.358 },
			{ y: 0.359 }
		]
	}]
});
chart.render();

var chart = new CanvasJS.Chart("asteroidCollisions", {
	theme: "dark2",
	animationEnabled: true,
	zoomEnabled: true,
	data: [{
		type: "area",
		dataPoints: []
	}]
});

addDataPoints(365);
chart.render();

function addDataPoints(noOfDps) {
	var xVal = chart.options.data[0].dataPoints.length + 1, yVal = 100;
	for(var i = 0; i < noOfDps; i++) {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-4));
		chart.options.data[0].dataPoints.push({x: xVal,y: yVal});
		xVal++;
	}
}

var chart = new CanvasJS.Chart("thrusterTemp", {
  theme: "dark2",
	axisY: {
		title: "Temperature (°C)",
		suffix: " °C"
	},
	data: [{
		type: "column",
		yValueFormatString: "#,### °C",
		indexLabel: "{y}",
		dataPoints: [
			{ label: "1", y: 206 },
			{ label: "2", y: 163 },
			{ label: "3", y: 154 },
			{ label: "4", y: 176 },
			{ label: "5", y: 184 },
			{ label: "6", y: 122 }
		]
	}]
});

function updateChart() {
	var boilerColor, deltaY, yVal;
	var dps = chart.options.data[0].dataPoints;
	for (var i = 0; i < dps.length; i++) {
		deltaY = Math.round(2 + Math.random() *(-2-2));
		yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
		boilerColor = yVal > 200 ? "#FF2500" : yVal >= 170 ? "#FF6000" : yVal < 170 ? "#6B8E23 " : null;
		dps[i] = {label: "T "+(i+1) , y: yVal, color: boilerColor};
	}
	chart.options.data[0].dataPoints = dps;
	chart.render();
};
updateChart();

setInterval(function() {updateChart()}, 500);







}
