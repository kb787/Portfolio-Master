import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faTrash,faPlus,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons" ;
import {Link} from 'react-router-dom' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import {useState} from 'react' ;


const Dashboard = () => 
{
    const [profId,setProfId] = useState('') ;
    const [profFirstName,setProfFirstName] = useState('') ;
    const [profLastName,setProfLastName] = useState('') ;
    const [profDescription,setProfDescription] = useState('') ;
    const [profRole,setProfRole] = useState('') ;
    const [profAge,setProfAge] = useState('') ;
    const [profGithubProfile,setProfGithubProfile] = useState('') ;
    var navigate = useNavigate() ;
    const handleGetProfile = async(e) => 
    {
         e.preventDefault() ;
         try 
         {
             message.success("Searching your profile ") ;
             navigate("/SavedProfile") ;
         }
         catch(error)
         {
             console.log(error) ;
             message.error(" Server side error occured ") ;
         }
    }
    return (
    <div className = "Dashboard">
    <div className = "sidebarDashboard">
    <ul className = "sidebarList">
       <li className = "sidebarListItems">
       <FontAwesomeIcon icon={faUser}  onClick={handleGetProfile}/> 
       <Link to = "/SavedProfile" className = "linking">
       View Profile
       </Link>  
       </li>
       <br/>
       <li className = "sidebarListItems">
       <FontAwesomeIcon icon={faTrash} /> 
       <Link to = "/Dashboard" className = "linking">
       Delete Profile
       </Link> 
       </li>
       <br/>
       <li className = "sidebarListItems">
       <FontAwesomeIcon icon={faPlus} />  
       <Link to = "/NewProject" className = "linking">
       Add projects
       </Link> 
       </li>
       <br/>
       <li className = "sidebarListItems">
       <FontAwesomeIcon icon={faMagnifyingGlass} />  
       <Link to = "/SavedProjects" className = "linking">
        View Prev Projects
       </Link> 
       </li>
       <br/>
    </ul>  
    </div>
    <p className = "dashboardPara">
    Welcome user !   Track your profile, add projects here    
    </p> 
    <p className = "dashboardSubPara"> 
    About Us -
    <br/>
    Developer :- Karan Bhanushali
    <br/>
    Currently Third Year Student
    <br/>
    B.E - Computer Science  
    </p>
    </div>    
    ) 
}

export default Dashboard ;