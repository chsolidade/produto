google.charts.load('current', {
  'packages':['geochart','bar'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawChart);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['País', 'População'],
    ['Argentina', 44270000],
    ['Bolivia', 11050000],
    ['Brazil', 209300000],
    ['Uruguay', 3457000],
    ['Paraguay', 6811000],
  ]);

  var options = {
    region: '005', // South America
    colorAxis: {colors: ['#00853f', 'green', '#e31b23']},
    backgroundColor: 'white',
    datalessRegionColor: '#eeee',
    defaultColor: '#f5f5f5',
    legend:'none',
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Argentina', 'Bolívia', 'Brasil', 'Paraguai', 'Uruguai',''],
    ['Professores', 559826, 127609, 1892519, 80852, 31555],
    ['Matrículas', 7992265, 2531032, 39721032, 1145841, 557648],
    ['Alunos por professor', 14, 20, 21, 14, 18],
  ]);

  var options = {
    chart: {
      title: 'Quantitativo de professores e alunos da Educação Básica pública',
      subtitle: 'Países Estados Partes do Mercosul',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('quadro39'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
