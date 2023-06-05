import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import axios from 'axios' ;
import {message} from 'antd' ;
 
const Profile = () => 
{

    const [profId,setProfId] = useState('') ;
    const [profFirstName,setProfFirstName] = useState('') ;
    const [profLastName,setProfLastName] = useState('') ;
    const [profDescription,setProfDescription] = useState('') ;
    const [profRole,setProfRole] = useState('') ;
    const [profAge,setProfAge] = useState('') ;
    const [profGithubProfile,setProfGithubProfile] = useState('') ;
    var navigate = useNavigate() ; 
    const handleProfSubmit = async(e) => 
    {
       e.preventDefault() ; 
       try 
       { 
          var profResponse = await axios.post("http://localhost:3500/v1/api/profiles/postProfile",
          {
               profId:profId ,
               profFirstName:profFirstName ,
               profLastName:profLastName ,
               profDescription:profDescription,
               profRole:profRole,
               profAge:profAge,
               profGithubProfile:profGithubProfile
          }
          ) ;
          console.log(profResponse) ; 
          if(profResponse.data && profResponse.data.success) 
          {
              message.success(" Profile created successfully ") ;
              navigate("/Dashboard") 
          }
          else 
          {
              message.error(" Unable to create your profile ") ;
          }
       } 
       catch(error)
       {
          console.log(error) ;
          message.error(" Server side had occured ") ;
       }
    }

    return (
    <div className = "Profile">
    <h3 className = "profileHeading">Create your profile</h3>    
      <div className="registerForm">
    <input
      type="text"
      className="profileFormInput"
      id="exampleInputPassword1"
      placeholder="Enter your profileId"
      required="true"
      value={profId}
      onChange={(e) => setProfId(e.target.value)}
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="profileFormInput"
      id="exampleInputPassword1"
      placeholder="Enter your first name"
      required="true"
      value={profFirstName}
      onChange={(e) => setProfFirstName(e.target.value)}
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="profileFormInput"
      id="exampleInputPassword1"
      placeholder="Enter your last name"
      required="true"
      value={profLastName}
      onChange={(e) => setProfLastName(e.target.value)}
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="profileFormInput"
      id="exampleInputPassword1"
      placeholder="What descibes you - student/working professional"
      required="true"
      value={profDescription}
      onChange={(e) => setProfDescription(e.target.value)}
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="text"
      className="profileFormInput"
      id="exampleInputPassword1"
      placeholder="Role - Software Dev/Web Dev/others"
      required="true"
      value={profRole}
      onChange={(e) => setProfRole(e.target.value)}
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="number"
      className="profileFormInput"
      id="exampleInputPassword1"
      placeholder="Enter your age"
      required="true"
      value={profAge}
      onChange={(e) => setProfAge(e.target.value)}
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="link"
      className="profileFormInput"
      id="exampleInputPassword1"
      placeholder="Enter your githubprofile"
      required="true"
      value={profGithubProfile}
      onChange={(e) => setProfGithubProfile(e.target.value)}
    />
  </div>
  <br />
  <button type="button" className="profSubmitButton" onClick={handleProfSubmit}>
    Submit
  </button>    
    
    </div>    
    )
}

export default Profile ;