const  mongoose  = require('mongoose');

const CriminalSchema = new mongoose.Schema({
    
    no: {
        type: Number,
        required: [true, 'must provide number'],
        trim: true,
        maxlength: [4, 'number can not be more than 4 characters'],
      },
    fname: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
    lname: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
    age: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
    gender: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
  
    phone: {
        type: String,
        required: [true, 'must provide phone'],
        trim: true,
        maxlength: [10, 'phone can not be more than 10 characters'],
      }
 
    }
);
module.exports = mongoose.model("Criminal",CriminalSchema);