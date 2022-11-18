const express =require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/routes')
const Web3 = require('web3');
const mongoose = require('mongoose');
const cors = require('cors')
const contract = require('truffle-contract');

//users
const police= require('./routes/PoliceRoute');
const criminal= require('./routes/CriminalRoute');
const court= require('./routes/CourtRoute');
const station= require('./routes/StationRoute');
const cases= require('./routes/CaseController');
const prison= require('./routes/PrisonRoute');

app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Headers","*"),
    next();
})
app.use(cors({
    origin: '*'
}));


//middleware
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Headers","*"),
    next();
})
app.use(cors({
    origin: '*'
}));


//Routes
app.use('/api/v1/police', police)
app.use('/api/v1/criminal', criminal )
app.use('/api/v1/court', court )
app.use('/api/v1/station', station )
app.use('/api/v1/prison', prison )
app.use('/api/v1/case', cases)



const connection_URL='mongodb+srv://saumu:saumu123@cluster0.lbpai5i.mongodb.net/?retryWrites=true&w=majority'

const connectDB=(connection_URL)=>{
    try {
        mongoose.connect(connection_URL, {  useNewUrlParser: true,
          
            useUnifiedTopology: true, } ).then(
            ()=>{  console.log("connected to mongo db");}
        ).catch((err)=>{
            console.log(err);
        })
          
        
    } catch (error) {
       console.log(error); 
    }
  
}






const port =process.env.PORT|| 9000

const start=()=>{
    connectDB(connection_URL)
    app.listen(port, console.log(`The Server is running on port:${port}...`))
}

start();