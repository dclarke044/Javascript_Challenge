// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

data.forEach((UFOvisits) => {
    var row = tbody.append("tr");
    Object.entries(UFOvisits).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Complete function to clear existing table before printing filtered Data
function removeTableBody(){
  $('#ufo-table tbody').empty();
}

  // define input field
var inputField = d3.select("form-control");

  // Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);
inputField.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

      // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  var tbody = d3.select("tbody");

  // clear table
  removeTableBody();

  // Console.log the filtered data from data.js
  console.log(filteredData);
  
  filteredData.forEach((filteredUFOvisits) => {
      var row = tbody.append("tr");
      Object.entries(filteredUFOvisits).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
};