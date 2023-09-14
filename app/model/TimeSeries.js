const mongoose = require('mongoose');

const TimeSeriesSchema = new mongoose.Schema({
    variable: String,
    timestamp: Date,
    value: Number,
});

const TimeSeries = mongoose.model('TimeSeries', TimeSeriesSchema);

module.exports = TimeSeries;