var registerModel = require("./registerModels") ;
var jwt = require('jsonwebtoken') ;
var profileModel = require("./profileModels") ;
var projectModel = require("./projectModels") ;

const registerController = async (req,res) => {
    {
         try 
         {
          const { email, password, userType } = req.body ;
             console.log(req.body) ;
             var existingUser = await registerModel.findOne({email : req.body.email}) ;
             console.log(existingUser) ;
             if(existingUser)
             {
                 return res.status(200).send({message: "User Already Exists" , success:false}) ;
             }
             else 
             { 
               
                const userType = req.body.userType ;
                const password = req.body.password ;
                var newUser = new registerModel({
                email,password,userType 
                 }) ;
                await newUser.save({userType,email,password}) ;
                return res.status(201).send({message:"Successfully saved the new user",success:true}) ;    
                
             }
         }
         catch(error)
         { 
             console.log(error) ;
             return res.status(500).send({message:"Server side error occured",success:false}) ;
         }
    }  
  } ;
  

const loginController = async(req,res) => 
{
    try {
        const {email,password} = req.body ;
        console.log(req.body) ;
        var existingEmail = await registerModel.findOne({email:req.body.email}) ;
        if(!existingEmail)
        {
             return res.status(202).send({message:"Invalid username", success:false}) ;
        }
        else if(existingEmail.password !== req.body.password)
        {
             return res.status(203).send({message:"Invalid username or password", success:false}) ;
        }
        else 
        {
            var token = jwt.sign({id:prevUserName.__id}, process.env.jwtSecret, {
                expiresIn:"1d" 
                }) ;

            return res.status(200).send({message:"Login success", success:true , token}) ;    
        }

    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Server side error occured", success:false}) ;
    }
} 

const profilePostController = async(req,res) => 
{
    try {
        const {profId,profFirstName,profLastName,profDescription,profRole,profAge,profGithubProfile} = req.body ;
        console.log(req.body) ;
        var newProfile = await new profileModel(
            {
                 profId,profFirstName,profLastName,profDescription,profRole,profAge,profGithubProfile
            }
        ) ;
        newProfile.save() ;
        console.log(newProfile) ;
        return res.status(200).send({message:"Successfully saved your profile",success:true,newProfile}) ;
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Server side error occured",success:false}) ; 
    }
}
//Pending
const profileDeleteController = async(req,res) => 
{
    try 
    {
        var {profId} = req.body.profId ;
        console.log(profId) ;
        await profileModel.findByIdAndDelete(profId) ;
        return res.status(200).send({message:"Successfully deleted your profile", success:true}) ;
    }
    catch(error) 
    {
         console.log(profId) ;
         return res.status(500).send({message:"Unable to perform deletions",success:false}) ;
    }    
}  

const profileGetController = async(req,res) => 
{
    try 
    {
        const {profId,profFirstName,profLastName,profDescription,profRole,profAge,profGithubProfile} = req.query ;
        console.log(req.query) ;
        var getResponse = await profileModel.find(
           {
              profId,profFirstName,profLastName,profDescription,profRole,profAge,profGithubProfile
           } 
        )
        console.log(getResponse) ;
        if(getResponse == null)
        {
            return res.status(200).send({message:"Nothing to show in your profile",success:false}) 
        }  
        else  
        {
          return res.status(201).send({message:"Successfully got the request",success:true,getResponse}) ;
        }  
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Unable to perform get request",success:false}) ;
    }
}  

const projectPostController = async(req,res) => {
    try {
        const {projectId,projectName,projectDescription,projectTechStack,projectGithubLink} = req.body ;
        console.log(req.body) ;

        var newProject = await new projectModel(
            {
                projectId,projectName,projectDescription,projectTechStack,projectGithubLink 
            }
        )
        newProject.save() ;
        console.log(newProject) ;
        return res.status(200).send({message:"Successfully saved project details",success:true,newProject}) ; 
    }
    catch(error)
    {
        console.log(err) ;
        return res.status(500).send({message:"Unable to perform post request",success:false}) ;
    }
} 
//Pending
const projectDeleteController = async(req,res) => 
{
     try {
         const {projectId,projectName,projectDescription,projectTechStack,projectGithubLink} = req.body ;
         console.log(req.body) ;
         await projectModel.findByIdAndDelete(projectId) ;
         return res.status(200).send({message:"Successfully deleted",success:true}) ;
     }
     catch(error)
     {
        console.log(error) ;
        return res.status(500).send({message:"Unable to perform post request",success:false}) ;
     }
}


const projectGetController = async(req,res) => 
{
    try 
    {
        const {projectId,projectName,projectDescription,projectTechStack,projectGithubLink} = req.query ;
        console.log(req.query) ;
        var getResponse = await projectModel.find(
           {
               projectId,projectName,projectDescription,projectTechStack,projectGithubLink
           } 
        )
        console.log(getResponse) ;
        if(getResponse == null)
        {
            return res.status(200).send({message:"Nothing to show in projects",success:false}) 
        }  
        else  
        {
          return res.status(201).send({message:"Successfully got the request",success:true,getResponse}) ;
        }  
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Unable to perform get request",success:false}) ;
    }
}
//Pending
const projectPutController = async(req,res) => 
{
    try 
    {
        const {projectId,projectName,projectDescription,projectTechStack,profGithubProfile} = req.body ;
        console.log(req.body) ;
        
        var updateProject = await profileModel.findByIdAndUpdate(
            { 
                 projectId,projectName,projectDescription,projectTechStack,profGithubProfile 
            }
        )
        console.log(updateProject) ;
        return res.status(200).send({message:"Successfully performed update operations",success:true,updateProject}) ;
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({mesage:"Unable to perform update requests",success:false}) ;  
    }
}

var express = require('express') ;
var registerRouter = express.Router() ;
var profileRouter = express.Router() ;
var projectRouter = express.Router() ;

registerRouter.post('/postRegister', registerController) ;
registerRouter.post('/postLogin',loginController) ;

profileRouter.post('/postProfile',profilePostController) ;
profileRouter.delete('/deleteProfile',profileDeleteController) ;
profileRouter.get('/getProfile',profileGetController) ;

projectRouter.post('/postProject',projectPostController) ;
projectRouter.delete('/deleteProject',projectDeleteController) ;
projectRouter.get('/getProject',projectGetController) ;
projectRouter.put('/putProject',projectPutController) ;


module.exports = {registerRouter:registerRouter ,
    profileRouter:profileRouter ,
    projectRouter:projectRouter 
} ;