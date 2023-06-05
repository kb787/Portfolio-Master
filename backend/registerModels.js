var mongoose = require('mongoose') ;

const registerSchema = mongoose.Schema(
    {
        email :
        {
            type:String ,
            required:true 
        } ,
        password :
        {
            type:String ,
            required:true  
        }
    }
)

if (mongoose.models['users'])
{
     return mongoose.model('users') ;
}

var registerModel = mongoose.model('users',registerSchema) ;
module.exports = registerModel ;