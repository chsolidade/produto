google.charts.load('current', {
  'packages':['geochart','bar','corechart', 'line'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawBasic);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['País', 'População'],
    ['Argentina', 44270000],
    ['Bolivia', 11050000], //COMO COLOCAR ACENTO EM "BOLÍVIA"?
    ['Brazil', 209300000], //COMO ESCREVER BRASIL, URUGUAI E PARAGUAI EM PORTUGUÊS?
    ['Uruguay', 3457000],
    ['Paraguay', 6811000],
  ]);

  var options = {
    region: '005', // South America
    colorAxis: {colors: ['#bdbdbd', '#ef5350', '#ffee58', '#42a5f5', '#66bb6a']}, //COMO COLOCAR ESSAS CORES NESSA ORDEM: Ur, Pa, Bo, Ar, Br?
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
    ['', 'Argentina', 'Bolívia', 'Brasil', 'Paraguai', 'Uruguai'],
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
    ['', 'Argentina', 'Bolívia', 'Brasil', 'Paraguai', 'Uruguai'],
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
    ['', 'Argentina', 'Bolívia', 'Brasil', 'Paraguai', 'Uruguai'],
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
      ['País', 'PIB em 2017'],
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

    var chart = new google.visualization.BarChart(document.getElementById('quadro441'));

    chart.draw(data, options);
  }

  function drawChart4() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Ano');
    data.addColumn('number', 'Argentina');
    data.addColumn('number', 'Bolívia');
    data.addColumn('number', 'Brasil');
    data.addColumn('number', 'Paraguai');
    data.addColumn('number', 'Uruguai');		
    data.addRows([
      ['2011', 0.797, 0.663, 0.718, 0.665, 0.783],
      ['2012', 0.811, 0.675, 0.730, 0.669, 0.792],
      ['2013', 0.808, 0.667, 0.744, 0.676, 0.790],
      ['2014', 0.836, 0.662, 0.755, 0.679, 0.793],
      ['2015', 0.827, 0.674, 0.754, 0.693, 0.795],
      ['2016', 0.825, 0.693, 0.759, 0.702, 0.804],
      ['2017', 0.825, 0.693, 0.759, 0.702, 0.804],
    ]);

    var options = {
      chart: {
        title: 'IDH dos países Estados Partes',
        subtitle: 'nota recebida'
      },
    };

    var chart = new google.charts.Line(document.getElementById('quadro442'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  }

  function drawChart5() {
  var data = google.visualization.arrayToDataTable([
    ['ID', 'Duração total', 'Práticas pedagógicas', 'Anos de formação'],
    ['Argentina', 2600, 650, 4],
    ['Bolívia', 4800, 560, 5],
    ['Brasil', 3200, 400, 4],
    ['Paraguai', 3600, 480, 3],
    ['Uruguai', 2880, 1240, 4],
  ]);

  var options = {
    colorAxis: {colors: ['yellow', 'red']},
    title: 'Organização curricular dos planos de ensino de formação inicial nos países Estados Partes do Mercosul',
    hAxis: {title: 'Duração total'},
    vAxis: {title: 'Práticas pedagógicas'},
    bubble: { 
      textStyle: {
        fontSize: 12,
        fontName: 'Poppins',
        color: 'rgb(102, 102, 102)',
        bold: true,
        italic: false
      }
    }   
    
  };

  var chart = new google.visualization.BubbleChart(document.getElementById('quadro45'));
  chart.draw(data, options);
} 