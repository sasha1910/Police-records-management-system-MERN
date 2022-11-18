const  mongoose  = require('mongoose');

const CaseSchema = new mongoose.Schema({
    
    no: {
        type: Number,
        required: [true, 'must provide number'],
        trim: true,
        maxlength: [4, 'number can not be more than 4 characters'],
      },
    Complainant: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
    Accused: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [30, 'name can not be more than 20 characters'],
      },
    reportedOn: {
        type: String,
        trim: true,
      },
    Status: {
        type: String,
        required: [true, 'Status must be provided'],
        trim: true,
        maxlength: [10, 'status can not be more than 10 characters'],
      }
 
    }
);
module.exports = mongoose.model("Cases",CaseSchema);