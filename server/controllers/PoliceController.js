const Police = require('../models/Police')
const  mongoose  = require('mongoose');


const getAllPolice = async (req, res) => {
  const police = await Police.find({})
  res.status(200).json({ police })
}

const addPolice = async (req, res) => {
  const police = await Police.create(req.body)
  res.status(201).json({ police })
}

const getPolice = async (req, res, next) => {
  const { id: policeID } = req.params
  const police = await Police.findOne({ _id: policeID })
  if (!police) {
    return next(createCustomError(`No police with id : ${policeID}`, 404))
  }

  res.status(200).json({ police })
}

const deletePolice = async (req, res, next) => {
  const { id: policeID } = req.params
  const police = await Police.findOneAndDelete({ _id: policeID })
  if (!police) {
    return next(createCustomError(`No police with id : ${policeID}`, 404))
  }
  res.status(200).json({ police })
}

const updatePolice = async (req, res, next) => {
  const { id: policeID } = req.params
 const{ no,email,name,phone }=req.body;

  const police = await Police.findById({ _id: policeID}, { no,email,name,phone}, {
    new: true,
    runValidators: true,
  })

  if (!police) {
    return next(createCustomError(`No member with id : ${policeID}`, 404))
  }

  res.status(200).json({ police })
}

module.exports = {
  getAllPolice,
  addPolice,
  getPolice ,
  updatePolice ,
  deletePolice,
}