// Our labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];
var total = []
for (var counter = 0; counter<africa.length;counter++) {
total[counter]=africa[counter]
+asia[counter]
+europe[counter]
+latinAmerica[counter]
+northAmerica[counter]

console.log(total)
}
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
        { 
            data: africa,
            label:"Africa", borderColor: "#3e95cd",
            fill: false
            
          }, { 
            data: asia,
            label:"asia", borderColor: "#8e5ea2",
            fill: false
            
          }, { 
            data: europe,
            label:"europe", borderColor: "#33cc00",
            fill: false
            
          }, { 
            data: latinAmerica,
            label:"latinAmerica", borderColor: "#ff0000",
            fill: false
            
          }, { 
            data: northAmerica,
            label:"northAmerica", borderColor: "#ffff00",
            fill: false
            
          }, { 
            data: total,
            label:"total", borderColor: "#000033",
            fill: false
            
           },
    ]
  }
});
