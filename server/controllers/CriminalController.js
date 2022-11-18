const Criminal = require('../models/Criminals')
const  mongoose  = require('mongoose');


const getAllCriminals = async (req, res) => {
  const criminal = await Criminal.find({})
  res.status(200).json({ criminal })
}

const addCriminal = async (req, res) => {
  const criminal = await Criminal.create(req.body)
  res.status(201).json({ criminal })
}

const getCriminal = async (req, res, next) => {
  const { id: criminalID } = req.params
  const criminal = await Criminal.findOne({ _id: CriminalID })
  if (!criminal) {
    return next(createCustomError(`No Criminal with id : ${criminalID}`, 404))
  }

  res.status(200).json({ criminal })
}

const deleteCriminal = async (req, res, next) => {
  const { id: criminalID } = req.params
  const criminal = await Criminal.findOneAndDelete({ _id: criminalID })
  if (!criminal) {
    return next(createCustomError(`No Criminal with id : ${criminalID}`, 404))
  }
  res.status(200).json({ criminal })
}
const updateCriminal = async (req, res, next) => {
  const { id: criminalID } = req.params
 const{ no,email,name,phone }=req.body;

  const criminal = await Criminal.findOneAndUpdate({ _id: criminalID}, { no,email,name,phone}, {
    new: true,
    runValidators: true,
  })

  if (!criminal) {
    return next(createCustomError(`No member with id : ${criminalID}`, 404))
  }

  res.status(200).json({ criminal })
}

module.exports = {
  getAllCriminals,
  addCriminal,
  getCriminal ,
  updateCriminal ,
  deleteCriminal,
}