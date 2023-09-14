const TimeSeriesController = require('./controllers/timeSeries');

module.exports = function(app) {
    app.post('/api/data', TimeSeriesController.addData);
    app.get('/api/data', TimeSeriesController.getData);
}