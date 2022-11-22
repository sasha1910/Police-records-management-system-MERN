const  mongoose  = require('mongoose');

const CaseSchema = new mongoose.Schema({
    
    no: {
        type: Number,
        required: [true, 'must provide number'],
        trim: true,
        maxlength: [4, 'number can not be more than 4 characters'],
      },
    complainant: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
    accused: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [30, 'name can not be more than 20 characters'],
      },
    reportedOn: {
        type: Date,
        default:Date.now()
      },
    Status: {
        type: String,
        default:"pending"
      }
 
    }
);
module.exports = mongoose.model("Cases",CaseSchema);