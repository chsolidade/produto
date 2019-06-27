google.charts.load('current', {
  'packages':['geochart','bar','corechart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawBasic);


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

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Argentina', 'Bolívia', 'Brasil', 'Paraguai', 'Uruguai',''],
    ['Professores', 559826, 127609, 1892519, 80852, 31555],
  ]);

  var options = {
    chart: {
      title: 'Quantitativo de professores da Educação Básica pública',
      subtitle: 'Países Estados Partes do Mercosul',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('quadro391'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Argentina', 'Bolívia', 'Brasil', 'Paraguai', 'Uruguai',''],
    ['Matrículas', 7992265, 2531032, 39721032, 1145841, 557648],
  ]);

  var options = {
    chart: {
      title: 'Quantitativo de alunos da Educação Básica pública',
      subtitle: 'Países Estados Partes do Mercosul',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('quadro392'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Argentina', 'Bolívia', 'Brasil', 'Paraguai', 'Uruguai',''],
    ['Alunos por professor', 14, 20, 21, 14, 18],
  ]);

  var options = {
    chart: {
      title: 'Relação de professores e alunos da Educação Básica pública',
      subtitle: 'Países Estados Partes do Mercosul',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('quadro393'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
      ['País', 'PIB'],
      ['Argentina', 637.43],
      ['Bolívia', 37.509],
      ['Brasil', 2056],
      ['Paraguai', 39.667],
      ['Uruguai', 56.15]
    ]);

    var options = {
      title: 'PIB nos países Estados Partes do Mercosul',
      chartArea: {width: '50%'},
      hAxis: {
        title: '',
        minValue: 0
      },
      vAxis: {
        title: 'País'
      }
    };

    var chart = new google.visualization.BarChart(document.getElementById('quadro44'));

    chart.draw(data, options);
  }
