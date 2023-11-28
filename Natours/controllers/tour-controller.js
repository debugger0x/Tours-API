const Tour = require('../models/tour-schema');

exports.getTours = async (req, res, next) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: { tours },
    });
  } catch (err) {
    res.send({
      status: 'fail',
      message: err.message,
    });
    console.log(err.message);
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json(newTour);
  } catch (err) {
    res.send({ stauus: 'fail', message: err.message });
    console.log(err.message);
  }
};

exports.findTour = async (req, res, next) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({ data: { tour } });
  } catch (err) {
    res.send({ stauus: 'fail', message: err.message });
    console.log(err.message);
  }
};

exports.updateTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: false,
      // upsert: false,
    });
    res.status(201).json({ status: 'success', data: tour });
  } catch (err) {
    res.send({ stauus: 'fail', message: err.message });
    console.log(err.message);
  }
};
exports.deleteTour = async (req, res, next) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success' });
  } catch (err) {
    res.send({ stauus: 'fail', message: err.message });
    console.log(err.message);
  }
};
