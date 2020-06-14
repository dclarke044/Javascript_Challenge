// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#patient-form-input");

      // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(sightings);

  var filteredData = sightings.filter(sightings => sightings.date/time === inputValue);

  console.log(filteredData);
};