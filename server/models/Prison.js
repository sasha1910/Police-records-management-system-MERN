const  mongoose  = require('mongoose');

const PrisonSchema = new mongoose.Schema({
    
    no: {
        type: Number,
        required: [true, 'must provide number'],
        trim: true,
        maxlength: [4, 'number can not be more than 4 characters'],
      },
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
    Location: {
        type: String,
        required: [true, 'must provide location name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
   
    }
);
module.exports = mongoose.model("Prison",PrisonSchema );