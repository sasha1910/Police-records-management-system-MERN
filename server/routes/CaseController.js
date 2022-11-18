const express = require('express')
const router = express.Router()

const {
getAllCase,
getCase,
updateCase,
deleteCase,
addCase
 
} = require('../controllers/CaseController')

router.get("/",getAllCase)
router.get("/",getCase)
router.post("/",addCase)
router.patch('/:id',updateCase)
router.delete('/:id',deleteCase)

module.exports = router