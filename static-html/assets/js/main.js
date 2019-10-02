
console.log("It's working...");

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {

  // full-time students

  // bar chart
  var fullTime = google.visualization.arrayToDataTable([
    ['Students', '2018-2019', '2019-2020'],
    ['Total Students', 1948, 1470],
    ['Total Attending', 1720, 1330]
  ]);

  var options = {
    title: 'Full-Time Students',
    chartArea: {width: '50%'},
    colors: ['#00AFD7', '#005EB8'],
    hAxis: {
      title: 'Number of Students',
      minValue: 1000
    }
  };
  var chart = new google.visualization.BarChart(document.getElementById('fullTime'));
  chart.draw(fullTime, options);


  // 2018-2019 Attending
  var fullTimeAttending20182019 = google.visualization.arrayToDataTable([
    ['Students Attending', 'Number of Students'],
    ['Attended', 1754],
    ['Not Attended', 194]
  ]);

  var options = {
    title: '2018-2019 Not Attended',
    chartArea: {width: '100%'},
    colors: ['#00AFD7', '#7fd2e6'],
    pieHole: 0.2
  };

  var fullTimeAttending20182019Chart = new google.visualization.PieChart(document.getElementById('fullTimeAttending20182019'));
  fullTimeAttending20182019Chart.draw(fullTimeAttending20182019, options);
  

  // 2019-2020 Attending
  var fullTimeAttending = google.visualization.arrayToDataTable([
    ['Students Attending', 'Number of Students'],
    ['Attended', 1330],
    ['Not Attended', 140]
  ]);

  var options = {
    title: '2019-2020 Not Attended',
    chartArea: {width: '100%'},
    colors: ['#005EB8', '#7fa9d5'],
    pieHole: 0.2
  };

  var fullTimeAttendingChart = new google.visualization.PieChart(document.getElementById('fullTimeAttending20192020'));
  fullTimeAttendingChart.draw(fullTimeAttending, options);






  // freedom students
  var freedom = google.visualization.arrayToDataTable([
    ['Students', '2018-2019', '2019-2020'],
    ['Total Students', 84, 232],
    ['Total Attending', 30, 182]
  ]);

  var options = {
    title: 'Freedom Learning Students',
    chartArea: {width: '50%'},
    colors: ['#2E979C', '#f7941e'],
    hAxis: {
      title: 'Number of Students',
      minValue: 0
    }
  };
  var chart = new google.visualization.BarChart(document.getElementById('freedom'));
  chart.draw(freedom, options);



  // 2018-2019 Attending
  var freedomAttending20182019 = google.visualization.arrayToDataTable([
    ['Students Attending', 'Number of Students'],
    ['Attended', 30],
    ['Not Attended', 54]
  ]);

  var options = {
    title: '2018-2019 Not Attended',
    chartArea: {width: '100%'},
    colors: ['#2E979C', '#81c5c7'],
    pieHole: 0.2
  };

  var freedomAttending20182019Chart = new google.visualization.PieChart(document.getElementById('freedomAttending20182019'));
  freedomAttending20182019Chart.draw(freedomAttending20182019, options);
  

  // 2019-2020 Attending
  var freedomAttending = google.visualization.arrayToDataTable([
    ['Students Attending', 'Number of Students'],
    ['Attended', 182],
    ['Not Attended', 50]
  ]);

  var options = {
    title: '2019-2020 Not Attended',
    chartArea: {width: '100%'},
    colors: ['#f7941e', '#fec497'],
    pieHole: 0.2
  };

  var freedomAttendingChart = new google.visualization.PieChart(document.getElementById('freedomAttending20192020'));
  freedomAttendingChart.draw(freedomAttending, options);


}