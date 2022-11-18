const express = require('express')
const router = express.Router()

const {
getAllPrison,
getPrison,
updatePrison,
deletePrison,
addPrison
 
} = require('../controllers/PrisonController')

router.get("/",getAllPrison)
router.get("/",getPrison)
router.post("/",addPrison)
router.patch('/:id',updatePrison)
router.delete('/:id',deletePrison)

module.exports = router