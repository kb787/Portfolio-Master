import axios from 'axios' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
import {useState} from 'react' ;
 
const Login = () => 
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      var loginResponse = await axios.post(
        'http://localhost:3500/api/users/postLogin',
        {
          email: email,
          password: password,
        }
      );
      console.log(loginResponse);

      if (loginResponse.data && loginResponse.data.success) {
        message.success(' Successfully logged in ');
        navigate('/Dashboard');
      }
    } catch (error) {
      console.log(error);
      message.error(' Server side occured ');
    }
  };
  return (
   <div className = "Login">
       <div className = "Register">
    <h2 className = "registerHeading">Verify your credentials</h2>    
      <div className="registerForm">
    <input
      type="email"
      className="registerFormInput"
      placeholder="Enter your email"
      required="true"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="password"
      className="registerFormInput"
      placeholder="Enter your password"
      required="true"
      value = {password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <br />
  <button type="button" className="registerButton" onClick={handleLogin}>
    Login
  </button>  
    </div> 
   </div> 
  ) ; 
}

export default Login ;
