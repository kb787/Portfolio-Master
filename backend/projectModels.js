var mongoose = require('mongoose') ;

var projectSchema = mongoose.Schema(
    {
         projectId :
         {
             type:String ,
             required:true ,
         }  ,
         projectName : 
         {
             type:String ,
             required:true ,  
         } ,
         projectDescription :
         {
             type:String ,
             required:true ,
         } ,
         
         projectTechStack :
         {
            type:String ,
            required:true ,
         } ,
         projectGithubLink : 
         {
             type:String ,
             required:true ,
         }
    }
) 

if(mongoose.models['projects'])
{
    mongoose.model('projects') ;
}

var projectModel = mongoose.model('projects',projectSchema) ;
module.exports = projectModel ;

