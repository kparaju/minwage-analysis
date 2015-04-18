
function numberToColorHsl(num, min, max) {
  rgb = {0:0, 1:0, 2:0};

  if (num > 0) {
    foo = 255 - ((num/max) * 255);

    rgb[0] = foo
    rgb[1] = 255;
    rgb[2] = foo;
  }
  else {
    foo = 255 - ((num/min) * 255);

    rgb[0] = 255;
    rgb[1] = foo;
    rgb[2] = foo;
  }
  return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
}

function start(data) {
  var map = new Datamap({
    element: document.getElementById('map_container'),
    scope: 'usa',
    data: data,
    fills: {
      defaultFill: '#fff'
    },
    geographyConfig: {
      borderWidth: 0.2,
      highlightFillColor: '#999',
      borderColor: 'black',
      popupTemplate: function(geography, data) {
        return '<div class="hoverinfo"><b>' + geography.properties.name + '</b><br />' +
               '<br/><b>Minimum Wage:</b> ' + data['MinWage'] +
               '<br/><b>Cost Of Living:</b> $' + data['CostOfLiving'] +
               '<br/><b>Money Remaining:</b> $' + data['MoneyRemaining'] +
               '</div>';
      },
    },
    done: function() {

    }

  });

  rawData = map.options.data;
  colorData = {};

  biggest = -Infinity;
  lowest = Infinity;

  allMrs = [];
  for (var index in rawData) {
    state = rawData[index];
    allMrs.push(parseFloat(state['MoneyRemaining']));
  }
  max = Math.max.apply(null, allMrs);
  min = Math.min.apply(null, allMrs);

  $("#min").text(min);
  $("#max").text(max);

  for (var index in rawData) {
    state = rawData[index];
    if(state['MoneyRemaining'] > 0) {
      colorData[index] = '#0000ff';
    }
    else {
      colorData[index] = '#ff0000';
    }
    colorData[index] = numberToColorHsl(state['MoneyRemaining'], min, max);
  }

  setTimeout(function(){
    map.updateChoropleth(colorData)
  }, 100);
  map.labels();
}
