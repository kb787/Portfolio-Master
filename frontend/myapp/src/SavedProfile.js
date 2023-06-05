import {useState} from 'react' ;
import axios from 'axios' ;

const SavedProfile = () => 
{
    const [profId,setProfId] = useState('') ;
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3500/v1/api/profiles/getProfile', {
          params: {
            profId: profId 
          }
        });
        const data = response.data;
        console.log(response.data) ;
        if (data.success) {
          setProfile(data.getResponse);
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
      fetchProfile();
    }, []);
  
    return (
      <div className="container">
        <h1>Your Profile</h1>
        {loading ? (
          <p>Loading...</p>
        ) : profile ? (
          <div className="profile-card">
            <li>{profile.profId}</li>
            <li>{profile.profFirstName}</li>
            <li>{profile.profLastName}</li>
            <li>{profile.profDescription}</li>
            <li>{profile.profRole}</li>
            <li>{profile.profAge}</li>
            <li>{profile.profGithubProfile}</li>
            {/* Add other profile details as desired */}
          </div>
        ) : (
          <p>Unable to retrieve your profile data.</p>
        )}
      </div>
    )       
}

export default SavedProfile ;