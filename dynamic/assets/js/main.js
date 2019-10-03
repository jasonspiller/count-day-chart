
console.log("It's working...");

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {

  // full-time students

  // Countable
  var fullTimeCountable = google.visualization.arrayToDataTable([
    ['Countable', 'Not Countable'],
    ['Countable', 1343],
    ['Not Countable', 177]
  ]);

  var options = {
    title: 'Full-Time Countable',
    width: 710,
    height: 480,
    colors: ['#005EB8', '#7fa9d5'],
    pieHole: 0.2
  };

  var fullTimeCountableChart = new google.visualization.PieChart(document.getElementById('fullTimeCountable'));
  fullTimeCountableChart.draw(fullTimeCountable, options);


  // Attending
  var fullTimeAttending = google.visualization.arrayToDataTable([
    ['Attending', 'Not Attending'],
    ['Attending', 1422],
    ['Not Attending', 98]
  ]);

  var options = {
    title: 'Full-Time Attending',
    width: 710,
    height: 480,
    colors: ['#00AFD7', '#7fd2e6'],
    pieHole: 0.2
  };

  var fullTimeAttendingChart = new google.visualization.PieChart(document.getElementById('fullTimeAttending'));
  fullTimeAttendingChart.draw(fullTimeAttending, options);



  // freedom students

  // Countable
  var freedomCountable = google.visualization.arrayToDataTable([
    ['Countable', 'Not Countable'],
    ['Countable', 166],
    ['Not Countable', 78]
  ]);

  var options = {
    title: 'Freedom Learning Countable',
    width: 710,
    height: 480,
    colors: ['#2E979C', '#81c5c7'],
    pieHole: 0.2
  };

  var freedomCountableChart = new google.visualization.PieChart(document.getElementById('freedomCountable'));
  freedomCountableChart.draw(freedomCountable, options);


  // Attending
  var freedomAttending = google.visualization.arrayToDataTable([
    ['Attending', 'Not Attending'],
    ['Attending', 211],
    ['Not Attending', 33]
  ]);

  var options = {
    title: 'Freedom Learning Attending',
    width: 710,
    height: 480,
    colors: ['#f7941e', '#fec497'],
    pieHole: 0.2
  };

  var freedomAttendingChart = new google.visualization.PieChart(document.getElementById('freedomAttending'));
  freedomAttendingChart.draw(freedomAttending, options);

}