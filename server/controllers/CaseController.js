const Case = require('../models/Cases')
const  mongoose  = require('mongoose');


const getAllCase = async (req, res) => {
    const caselist = await Case.find({})
    res.status(200).json({ caselist})
  }
const addCase = async (req, res) => {
  const caselist = await Case.create(req.body)
  res.status(201).json({ caselist})
}

const getCase = async (req, res, next) => {
  const { id: caseID } = req.params
  const caselist = await Case.findOne({ _id: caseID })
  if (!caselist) {
    return next(createCustomError(`No Case with id : ${caseID}`, 404))
  }

  res.status(200).json({ caselist})
}

const deleteCase = async (req, res, next) => {
  const { id: caseID } = req.params
  const caselist= await Case.findOneAndDelete({ _id: caseID })
  if (!caselist) {
    return next(createCustomError(`No Case with id : ${caseID}`, 404))
  }
  res.status(200).json({ caselist})
}
const updateCase = async (req, res, next) => {
  const { id: caseID } = req.params
 const{ no,name,location }=req.body;

  const caselist = await Case.findOneAndUpdate({ _id: caseID}, { no,name,location}, {
    new: true,
    runValidators: true,
  })

  if (!caselist) {
    return next(createCustomError(`No member with id : ${caseID}`, 404))
  }

  res.status(200).json({ caselist })
}

module.exports = {
 getAllCase,
 getCase,
 updateCase,
 deleteCase,
 addCase
}