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
        columns: [
            ['VCO2', 0.03, 3.2, 1.8, 4.2, 1.9, 4.8, 1.95, 4.1, 2, 5, 1.9, 5.1, 2.4],
            ['VO2', 20, 17, 21.2, 16.8, 20.8, 16.5, 19.8, 17, 21.2, 16.8, 20.8, 16.5, 19.8],
            ['VE', 9, 10, 10.5, 18.5, 11.6, 10.1, 9.89, 12.5, 10.5, 16.5, 13.5, 10.5, 8.5]
        ],
        type: 'area-spline',
        colors: {
            VCO2: '#00f000',
            VO2: '#ff0000',
            VE: '#0000ff'
        },
        labels: true
    }
});

setInterval(function() {
    chart.load({
        columns: [
            ['VCO2', getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6), getRandomInt(0.03, 6)],
            ['VO2', getRandomInt(16, 21), getRandomInt(19, 20), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(18,21), getRandomInt(19, 22), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(19, 21), getRandomInt(19, 20), getRandomInt(18,21), getRandomInt(19, 22)],
            ['VE', getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5,15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5, 15), getRandomInt(5,15), getRandomInt(5, 15)]
        ]
    });
}, 1000);
