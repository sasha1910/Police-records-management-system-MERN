const Court = require('../models/Court')
const  mongoose  = require('mongoose');


const getAllCourt = async (req, res) => {
  const court = await Court.find({})
  res.status(200).json({ court })
}

const addCourt = async (req, res) => {
  const court = await Court.create(req.body)
  res.status(201).json({ court })
}

const getCourt = async (req, res, next) => {
  const { id: courtID } = req.params
  const court = await Court.findOne({ _id: courtID })
  if (!court) {
    return next(createCustomError(`No Court with id : ${courtID}`, 404))
  }

  res.status(200).json({ Court })
}

const deleteCourt = async (req, res, next) => {
  const { id: courtID } = req.params
  const court = await Court.findOneAndDelete({ _id: courtID })
  if (!court) {
    return next(createCustomError(`No Court with id : ${courtID}`, 404))
  }
  res.status(200).json({ court })
}
const updateCourt = async (req, res, next) => {
  const { id: courtID } = req.params
 const{ no,name,location }=req.body;

  const court = await Court.findOneAndUpdate({ _id: courtID}, { no,name,location}, {
    new: true,
    runValidators: true,
  })

  if (!court) {
    return next(createCustomError(`No member with id : ${courtID}`, 404))
  }

  res.status(200).json({ court })
}

module.exports = {
 getAllCourt,
 getCourt,
 updateCourt,
 deleteCourt,
 addCourt
}