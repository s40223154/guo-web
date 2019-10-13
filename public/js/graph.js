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
    bindto: '#chart',
    data: {
      columns: [
        ['VO2', ''],
        ['VE', ''],
        ['org_time', '']
      ],
      axes: {
        VE: 'y2' // ADD
      }
    },
    axis: {
      y2: {
        show: true // ADD
      }
    }
});

// table
let fackData = [{
  red: 1,
  blue: 1
},{
  red: 2,
  blue: 2
},{
  red: 3,
  blue: 3
}];

// graph config

var i = 0;
var org_time = ['x', 0, 1];
var o2 = ['VO2', 0];
var ve = ['VE', 0];

setInterval(function() {
  console.log('update');
  // update table
    $('#table-data').prepend(
        `
        <tr>
            <td data-label="FeO2">${fackData[i].red}</td>
            <td data-label="Flow">${fackData[i].blue}  </td>
            <td data-label="t">
                00.03
            </td>
            <td data-label="VO2">
                <span class="no">&#10007;</span>
            </td>
        </tr>
    `
    );

  // update graph
  if (o2.length > 10) {
    o2.splice(1, 1);
  }
  o2.push(fackData[i].red);
  if (ve.length > 10) {
    ve.splice(1, 1);
  }
  ve.push(fackData[i].blue);

  chart.load({
    columns: [
      org_time,
      o2,
      ve
    ]
  });

  if (org_time.length > 32) {
    org_time.splice(1, 1);
  }

  org_time.push(i);

  i++;
}, 1000);
