/* http://stackoverflow.com/questions/43594329/multi-line-chart-from-mysql-data-c3 */

(function() {
  /*
      1: Prepare a chart which will show hours of the day along the x-axis
  */
  var xHours = ['myXValues', "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    //http://czcodezone.blogspot.no/2014/12/c3-formatting-for-yyyy-mm-dd-hhmmss-for.html
    timeFormat = '%H:%M';

  var chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'myXValues',
      xFormat: timeFormat,
      columns: [
        //xHours,
        //['data1', 30, 200, 100, 400, 150, 250],
      ]
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: timeFormat
        }
      }
    }
  });
  /*
      2: Iterate over the data, and create one data series per day
  */
  var history = [{
      "hour": "00:00:00",
      "day": "2017-04-18",
      "kpi": "41.54"
    }, {
      "hour": "01:00:00",
      "day": "2017-04-18",
      "kpi": "0.00"
    }, {
      "hour": "02:00:00",
      "day": "2017-04-18",
      "kpi": "0.00"
    }, {
      "hour": "03:00:00",
      "day": "2017-04-18",
      "kpi": "0.00"
    }, {
      "hour": "04:00:00",
      "day": "2017-04-18",
      "kpi": "0.00"
    }, {
      "hour": "05:00:00",
      "day": "2017-04-18",
      "kpi": "0.00"
    }, {
      "hour": "06:00:00",
      "day": "2017-04-18",
      "kpi": "31.94"
    }, {
      "hour": "07:00:00",
      "day": "2017-04-18",
      "kpi": "47.44"
    }, {
      "hour": "08:00:00",
      "day": "2017-04-18",
      "kpi": "35.05"
    }, {
      "hour": "09:00:00",
      "day": "2017-04-18",
      "kpi": "43.24"
    }, {
      "hour": "10:00:00",
      "day": "2017-04-18",
      "kpi": "32.40"
    }, {
      "hour": "11:00:00",
      "day": "2017-04-18",
      "kpi": "32.03"
    }, {
      "hour": "12:00:00",
      "day": "2017-04-18",
      "kpi": "37.22"
    }, {
      "hour": "13:00:00",
      "day": "2017-04-18",
      "kpi": "30.85"
    }, {
      "hour": "14:00:00",
      "day": "2017-04-18",
      "kpi": "36.12"
    }, {
      "hour": "15:00:00",
      "day": "2017-04-18",
      "kpi": "42.87"
    }, {
      "hour": "16:00:00",
      "day": "2017-04-18",
      "kpi": "42.38"
    }, {
      "hour": "17:00:00",
      "day": "2017-04-18",
      "kpi": "41.33"
    }, {
      "hour": "18:00:00",
      "day": "2017-04-18",
      "kpi": "39.58"
    }, {
      "hour": "19:00:00",
      "day": "2017-04-18",
      "kpi": "36.22"
    }, {
      "hour": "20:00:00",
      "day": "2017-04-18",
      "kpi": "35.20"
    }, {
      "hour": "21:00:00",
      "day": "2017-04-18",
      "kpi": "35.76"
    }, {
      "hour": "22:00:00",
      "day": "2017-04-18",
      "kpi": "42.42"
    }, {
      "hour": "23:00:00",
      "day": "2017-04-18",
      "kpi": "28.41"
    }, {
      "hour": "00:00:00",
      "day": "2017-04-19",
      "kpi": "44.88"
    }, {
      "hour": "01:00:00",
      "day": "2017-04-19",
      "kpi": "0.00"
    }, {
      "hour": "02:00:00",
      "day": "2017-04-19",
      "kpi": "0.00"
    }, {
      "hour": "03:00:00",
      "day": "2017-04-19",
      "kpi": "0.00"
    }, {
      "hour": "04:00:00",
      "day": "2017-04-19",
      "kpi": "0.00"
    }, {
      "hour": "05:00:00",
      "day": "2017-04-19",
      "kpi": "0.00"
    }, {
      "hour": "06:00:00",
      "day": "2017-04-19",
      "kpi": "38.75"
    }, {
      "hour": "07:00:00",
      "day": "2017-04-19",
      "kpi": "40.03"
    }, {
      "hour": "08:00:00",
      "day": "2017-04-19",
      "kpi": "37.36"
    }],
    date = history[0].day,
    dayData = [date];

  history.forEach(function(hour) {
    if (hour.day === date) {
      dayData.push(Number(hour.kpi));
    } else {
      /*
          3: Load one day's data into the chart
      */
      chart.load({
        //The x-axis values (xHours) need to be included with at least the first data series,
        //but it does no harm to include it every time.
        //  http://stackoverflow.com/questions/30338691/c3-js-line-chart-getting-error-for-date
        //  http://stackoverflow.com/questions/41782843/c3-line-chart-time-series-error-x-is-not-defined-for-id-dates
        columns: [xHours, dayData]
      });

      date = hour.day;
      dayData = [date];
    }
  });
  chart.load({
    columns: [xHours, dayData]
  });

})();
