const Login = () => 
{
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
    />
  </div>
  <br />
  <div className="registerForm">
    <input
      type="password"
      className="registerFormInput"
      placeholder="Enter your password"
      required="true"
    />
  </div>
  <br />
  <button type="button" className="registerButton">
    Login
  </button>  
    </div> 
   </div> 
  ) ; 
}

export default Login ;