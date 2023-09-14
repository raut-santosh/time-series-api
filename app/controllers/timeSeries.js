const TimeSeriesModel = require('../model/TimeSeries');

exports.addData = (req, res) => {
    try{
        const timeSeries = new TimeSeriesModel({
            variable: req.body.variable,
            timestamp: req.body.timestamp,
            value: req.body.value,
        });
        timeSeries.save();
        res.status(200).json({data: timeSeries});
    }catch(error){
        res.status(500).json({error: error});
    }
}

exports.getData = async (req, res) =>  {
    try{
        const timeSeries = await TimeSeriesModel.find({});
        console.log(timeSeries)
        if(timeSeries){
            return res.status(200).json({data: timeSeries});
        }else{
            return res.status(404).json({error:'time series not found'});
        }
    }catch(error){
        res.status(500).json({error: error});
    }
  
}