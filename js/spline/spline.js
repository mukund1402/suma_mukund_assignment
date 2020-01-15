window.onload = function () {
    
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title:{
        text: ""
      },
      toolTip: {
        shared: true
      },
      axisX: {
        title: "Days",
        suffix : " d"
      },
      axisY: {
        title: "",
        titleFontColor: "#4F81BC",
        suffix : "",
        lineColor: "#4F81BC",
        tickColor: "#4F81BC"
      },
      axisY2: {
        title: "",
        titleFontColor: "#C0504E",
        suffix : "",
        lineColor: "#C0504E",
        tickColor: "#C0504E"
      },
      data: [{
        type: "spline",
        name: "speed",
        xValueFormatString: "## days",
        yValueFormatString: "#",
        dataPoints: [
          { x: 1 , y: 2500 },
          { x: 2 , y: 2134 },
          { x: 3 , y: 2112 },
          { x: 4 , y: 2125 },
          { x: 5 , y: 288 },
          { x: 6 , y: 2122 },
          { x: 7 , y: 2217 },
          { x: 8 , y: 2249 },
          { x: 9 , y: 2268 },
          { x: 10 , y: 2100 },
          { x: 11 , y: 2150 },
          { x: 12 , y: 2120 },
          { x: 13 , y: 2105 },
          { x: 14 , y: 2135 },
          { x: 15 , y: 2290 },
          { x: 16 , y: 2277 },
          { x: 17 , y: 2265 },
          { x: 18 , y: 2240 },
          { x: 19 , y: 2295 },
          { x: 20 , y: 240 },
          { x: 21 , y: 2100 },
          { x: 22 , y: 2279 },
          { x: 23 , y: 2290 },
          { x: 24 , y: 2105 },
          { x: 25 , y: 2120 },
          { x: 26 , y: 2135 },
          { x: 27 , y: 2114 },
          { x: 28 , y: 2283 },
          { x: 29 , y: 2102 },
          { x: 30 , y: 2110 },
          { x: 31 , y: 2120 }
        ]
      },
      {
        type: "line",  
        axisYType: "secondary",
        name: "distance covered",
        yValueFormatString: "#",
        dataPoints: [
          { x: 1 , y: 2500 },
          { x: 2 , y: 2134 },
          { x: 3 , y: 2740 },
          { x: 4 , y: 3740 },
          { x: 5 , y: 3940 },
          { x: 6 , y: 3190 },
          { x: 7 , y: 3290 },
          { x: 8 , y: 3590 },
          { x: 9 , y: 3790 },
          { x: 10 , y: 2390 },
          { x: 11 , y: 1440 },
          { x: 12 , y: 1620 },
          { x: 13 , y: 3220 },
          { x: 14 , y: 2780 },
          { x: 15 , y: 2800 },
          { x: 16 , y: 1120 },
          { x: 17 , y: 1220 },
          { x: 18 , y: 1300 },
          { x: 19 , y: 1400 },
          { x: 20 , y: 3118 },
          { x: 21 , y: 3503 },
          { x: 22 , y: 1205 },
          { x: 23 , y: 1604 },
          { x: 24 , y: 3705 },
          { x: 25 , y: 2403 },
          { x: 26 , y: 2303 },
          { x: 27 , y: 1103 },
          { x: 28 , y: 2003 },
          { x: 29 , y: 1139 },
          { x: 30 , y: 2778 },
          { x: 31 , y: 2018 }
        ]
      }]
    });
    chart.render();
    
    }