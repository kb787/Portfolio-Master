import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom" ;
import Login from "./Login" ;
import Register from "./Register" ;
import Dashboard from './Dashboard';
import NewProject from './NewProject';
import Profile from "./Profile" ;
import Homepage from './Homepage';
import SavedProfile from './SavedProfile';
import SavedProjects from './SavedProjects';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Routes>
           <Route path = "/" element = {<Homepage/>}/>
           <Route path = "/Dashboard" element = {<Dashboard/>}/> 
           <Route path = "/Homepage" element = {<Homepage/>} />
           <Route path = "/Login" element = {<Login/>} /> 
           <Route path = "/NewProject" element = {<NewProject/>} />
           <Route path = "/Profile" element = {<Profile/>} />
           <Route path = "/Register" element = {<Register/>}/>  
           <Route path = "/SavedProfile" element = {<SavedProfile/>}/>
           <Route path = "/SavedProjects" element = {<SavedProjects/>}/>      
       </Routes>
    </BrowserRouter>   
    </div>
  );
}

export default App;
