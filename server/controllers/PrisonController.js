const Prison = require('../models/Prison')
const  mongoose  = require('mongoose');


const getAllPrison = async (req, res) => {
  const prison = await Prison.find({})
  res.status(200).json({ prison })
}

const addPrison = async (req, res) => {
  const prison = await Prison.create(req.body)
  res.status(201).json({ prison })
}

const getPrison = async (req, res, next) => {
  const { id: prisonID } = req.params
  const prison = await Prison.findOne({ _id: prisonID })
  if (!prison) {
    return next(createCustomError(`No Prison with id : ${prisonID}`, 404))
  }

  res.status(200).json({ prison })
}

const deletePrison = async (req, res, next) => {
  const { id: prisonID } = req.params
  const prison = await Prison.findOneAndDelete({ _id: prisonID })
  if (!prison) {
    return next(createCustomError(`No Prison with id : ${prisonID}`, 404))
  }
  res.status(200).json({ prison })
}
const updatePrison = async (req, res, next) => {
  const { id: prisonID } = req.params
 const{ no,name,location }=req.body;

  const prison = await Prison.findOneAndUpdate({ _id: prisonID}, { no,name,location}, {
    new: true,
    runValidators: true,
  })

  if (!prison) {
    return next(createCustomError(`No member with id : ${prisonID}`, 404))
  }

  res.status(200).json({ prison })
}

module.exports = {
 getAllPrison,
 getPrison,
 updatePrison,
 deletePrison,
 addPrison
}