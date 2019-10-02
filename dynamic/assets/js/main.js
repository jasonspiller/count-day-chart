
console.log("It's working...");

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {

  // full-time students

  // Countable
  var fullTimeCountable = google.visualization.arrayToDataTable([
    ['Countable', 'Not Countable'],
    ['Countable', 1405],
    ['Not Countable', 118]
  ]);

  var options = {
    title: '2019-2020 Full-Time Countable',
    width: 960,
    height: 480,
    colors: ['#005EB8', '#7fa9d5'],
    pieHole: 0.2
  };

  var fullTimeCountableChart = new google.visualization.PieChart(document.getElementById('fullTimeCountable'));
  fullTimeCountableChart.draw(fullTimeCountable, options);


  // Attending
  var fullTimeAttending = google.visualization.arrayToDataTable([
    ['Attending', 'Not Attending'],
    ['Attending', 1405],
    ['Not Attending', 118]
  ]);

  var options = {
    title: '2019-2020 Full-Time Attending',
    width: 960,
    height: 480,
    colors: ['#7fa9d5', '#005EB8'],
    pieHole: 0.2
  };

  var fullTimeAttendingChart = new google.visualization.PieChart(document.getElementById('fullTimeAttending'));
  fullTimeAttendingChart.draw(fullTimeAttending, options);



  // freedom students

  // Countable
  var freedomCountable = google.visualization.arrayToDataTable([
    ['Countable', 'Not Countable'],
    ['Countable', 1405],
    ['Not Countable', 118]
  ]);

  var options = {
    title: '2019-2020 Freedom Learning Countable',
    width: 960,
    height: 480,
    colors: ['#2E979C', '#81c5c7'],
    pieHole: 0.2
  };

  var freedomCountableChart = new google.visualization.PieChart(document.getElementById('freedomCountable'));
  freedomCountableChart.draw(freedomCountable, options);


  // Attending
  var freedomAttending = google.visualization.arrayToDataTable([
    ['Attending', 'Not Attending'],
    ['Attending', 1405],
    ['Not Attending', 118]
  ]);

  var options = {
    title: '2019-2020 Freedom Learning Attending',
    width: 960,
    height: 480,
    colors: ['#f7941e', '#fec497'],
    pieHole: 0.2
  };

  var freedomAttendingChart = new google.visualization.PieChart(document.getElementById('freedomAttending'));
  freedomAttendingChart.draw(freedomAttending, options);

}