import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import axios from 'axios' ;
import {message} from 'antd' ;

const NewProject = () => 
{

   const [projectId,setProjectId] = useState('') ;
   const [projectName,setProjectName] = useState('') ;
   const [projectDescription,setProjectDescription] = useState('') ;
   const [projectTechStack,setProjectTechStack] = useState('') ;
   const [projectGithubLink,setProjectGithubLink] = useState('') ;
   var navigate = useNavigate() ;

   const handlePostNewProject = async(e) => {
       e.preventDefault() ;

       try 
       {
           var postResponse = await axios.post("http://localhost:3500/v2/api/projects/postProject" ,
              {
                 projectId :projectId ,
                 projectName:projectName ,
                 projectDescription:projectDescription ,
                 projectTechStack:projectTechStack ,
                 projectGithubLink:projectGithubLink 
              }  
           )
           console.log(postResponse) ;
           message.success("Successfully saved your project  ")   ;
           navigate("/Dashboard") ;

       }

       catch(error)
       {
           console.log(error) ;
           message.error("Server side error occured") ;
       }
   }


   return (
      <div className = "Profile">
      <h3 className = "profileHeading">Upload your projects</h3>    
        <div className="registerForm">
      <input
        type="text"
        className="profileFormInput"
        id="exampleInputPassword1"
        placeholder="Enter your projectId"
        required="true"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
      />
    </div>
    <br />
    <div className="registerForm">
      <input
        type="text"
        className="profileFormInput"
        id="exampleInputPassword1"
        placeholder="Enter your project name"
        required="true"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
    </div>
    <br />
    <div className="registerForm">
      <input
        type="text"
        className="profileFormInput"
        id="exampleInputPassword1"
        placeholder="Enter your project description"
        required="true"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />
    </div>
    <br />
    <div className="registerForm">
      <input
        type="text"
        className="profileFormInput"
        id="exampleInputPassword1"
        placeholder="Enter techstack used - ex.Reactjs"
        required="true"
        value={projectTechStack}
        onChange={(e) => setProjectTechStack(e.target.value)}
      />
    </div>
    <br />
    <div className="registerForm">
      <input
        type="text"
        className="profileFormInput"
        id="exampleInputPassword1"
        placeholder="Enter github profile"
        required="true"
        value={projectGithubLink}
        onChange={(e) => setProjectGithubLink(e.target.value)}
      />
    </div>
    <br />
    <button type="button" className="profSubmitButton" onClick={handlePostNewProject}>
      Submit
    </button>     
      </div>     
   )  
}

export default NewProject ;