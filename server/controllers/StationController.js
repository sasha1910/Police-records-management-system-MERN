const Station = require('../models/Station')
const  mongoose  = require('mongoose');



const getAllStation = async (req, res) => {
  const station = await Station.find({})
  res.status(200).json({ station })
}

const addStation = async (req, res) => {
  const station = await Station.create(req.body)
  res.status(201).json({ station })
}

const getStation = async (req, res, next) => {
  const { id: stationID } = req.params
  const Station = await Station.findOne({ _id: stationID })
  if (!station) {
    return next(createCustomError(`No Station with id : ${stationID}`, 404))
  }

  res.status(200).json({ station })
}

const deleteStation = async (req, res, next) => {
  const { id: StationID } = req.params
  const station = await Station.findOneAndDelete({ _id: StationID })
  if (!station) {
    return next(createCustomError(`No Station with id : ${stationID}`, 404))
  }
  res.status(200).json({ station })
}
const updateStation = async (req, res, next) => {
  const { id: stationID } = req.params
 const{ no,name,Location }=req.body;

  const station = await Station.findOneAndUpdate({ _id: stationID}, { no,name,Location}, {
    new: true,
    runValidators: true,
  })

  if (!station) {
    return next(createCustomError(`No member with id : ${stationID}`, 404))
  }

  res.status(200).json({ station })
}

module.exports = {
 getAllStation,
 getStation,
 updateStation,
 deleteStation,
addStation
}