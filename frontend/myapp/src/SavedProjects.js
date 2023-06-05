import {useState} from 'react' ;
import axios from 'axios' ;

const SavedProjects = () => 
{
    const [projectId,setProjectId] = useState('') ;
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchProject = async () => {
      try {
        const response = await axios.get('http://localhost:3500/v2/api/projects/getProject', {
          params: {
            projectId: projectId 
          }
        });
        
        const data = response.data;
  
        if (data.success) {
          setProject(data.getResponse);
        } else {
          console.log(data.message);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    useState(() => {
      fetchProject();
    }, []);
  
    return (
      <div className="container">
        <h1>Saved Projects</h1>
        {loading ? (
          <p>Loading...</p>
        ) : project ? (
          <div className="profile-card">
            <li>{project.projectId}</li>
            <li>{project.projectName}</li>
            <li>{project.projectDescription}</li>
            <li>{project.projectTechStack}</li>
            <li>{project.projectGithubLink}</li>
            {/* Add other profile details as desired */}
          </div>
        ) : (
          <p>Unable to retrieve projects data.</p>
        )}
      </div>
    )       
}

export default SavedProjects ;