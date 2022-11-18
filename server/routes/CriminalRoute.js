const express = require('express')
const router = express.Router()

const {
    getAllCriminals,
    addCriminal,
    getCriminal,
   updateCriminal,
    deleteCriminal,
 
} = require('../controllers/CriminalController')

router.route('/').get(getAllCriminals).post(addCriminal)
router.route('/:id').get(getCriminal).patch(updateCriminal).delete(deleteCriminal)

module.exports = router