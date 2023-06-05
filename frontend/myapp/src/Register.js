import { useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      var registerResponse = await axios.post(
        'http://localhost:3500/api/users/postRegister',
        {
          email: email,
          password: password,
        }
      );
      console.log(registerResponse);

      if (registerResponse.data.success) {
        message.success(' Successfully registered ');
        navigate('/Profile');
      }
    } catch (error) {
      console.log(error);
      message.error(' Server side occured ');
    }
  };
  return (
    <div className="Register">
      <h2 className="registerHeading">Enter your registration details</h2>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button type="button" className="registerButton" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;