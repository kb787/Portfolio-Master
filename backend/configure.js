var mongoose = require('mongoose') ;
var colors = require('colors') ;

const Connect = async() => 
{
    try 
    {
        await mongoose.connect("mongodb+srv://KaranBhanushali:Kb19092003%40@cluster0.fpqcnoe.mongodb.net/projectManagementDatabase" ,
        {
            useNewUrlParser:true ,
            useUnifiedTopology:true 
        }
        );
        console.log(`Successfully connected to database`.bgGreen ) ;
    } 

    catch(error)
    {
        console.log(error) ;
        console.log(`Could not connect to database`.bgRed) ;  
    }
}

module.exports = Connect ;