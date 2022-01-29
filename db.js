
const mongoose = require ('mongoose');

const MONGO_PROD_URI ="mongodb+srv://artdb:Art123@cluster0.pbann.mongodb.net/first-app?retryWrites=true&w=majority"


const connectToMongo =()=> {
    mongoose 
 .connect(MONGO_PROD_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
   // mongoose.connect(mongoURI, {
     //   useNewUrlParser: true,
    //    useUnifieldTopology: true

 //   }, ()=>{
      //  console.log("connected to mongo succesfully");
    //})
    

}

module.exports = connectToMongo;