function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var chart = c3.generate({
  data: {
    x: 'x',
    columns: [
      ['x', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13 ,14,15,16,17,18,19],
      ['VCO2', 0,0,0,0,0,0,0,0,0,0,0,0],
      ['VO2'],
      ['VE']
    ],
    axes: {
      data1: 'VO2',
      data2: 'VCO2'
    },
    colors: {
      VCO2: '#10e610',
      VO2: '#ff0000',
      VE: '#0000ff'
    },
    type: 'spline',
    labels: true
  },
  axis: {
    x: {
      type: 'category',
      categories: ['adsa', 'das']
    },
    y: {
      tick: {
        format: function(x) {
          return x % 1 === 0 ? x : '';
        }
      }
    },
    y2: {
      show: true
    }
  }
});

var i = -1;
var org_time = ['x', 0,1];
var co2 = ['VCO2', getRandomArbitrary(0.03, 6)];
var o2 = ['VO2', getRandomInt(16, 21), getRandomInt(19, 20), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(18, 21), getRandomInt(19, 22), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(18, 21), getRandomInt(19, 22)];
var ve = ['VE', getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15)];

setInterval(function() {
  chart.load({
    columns: [
      org_time,
      co2,
      o2,
      ve
    ],
    axis: {
      x: {
        categories: ['adsa', 'das', 'adsa', 'das', 'adsa', 'das', 'adsa', 'das']
      }
    }
  })
  if (co2.length > 32) {
    co2.splice(1, 1);
  }
  co2.push(getRandomInt(0.03, 6));
  if (org_time.length > 32) {
    org_time.splice(1, 1);

    i++;
  }

  org_time.push(i);
  console.log(i);
}, 1000);
