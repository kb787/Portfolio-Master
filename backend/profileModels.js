var mongoose = require('mongoose') ;

const profileSchema = mongoose.Schema(
   { 
       profId : 
       {
          type:String ,
          required:true ,
       } 
        ,  
       profFirstName : 
       {
           type:String ,
           required:true ,
       } ,
       profLastName :
       {
           type:String ,
           required:true ,
       } ,
       profDescription :
       {
           type:String ,
           required:true , 
       } ,
       profRole : 
       {
          type:String ,
          required:true ,
       } ,
       profAge :
       {
           type:Number ,
           required:true , 
       } ,
       profGithubProfile :
       {
          type:String ,
       } 

   } 
)

if (mongoose.models['profiles']) 
{
    return mongoose.model('profiles') ; 
}

var profileModel = mongoose.model('profiles',profileSchema) ;
module.exports = profileModel ;