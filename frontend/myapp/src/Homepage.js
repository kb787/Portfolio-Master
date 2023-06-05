import {Link} from 'react-router-dom' ;

const Homepage = () => 
{
    return (
    <div className = "Homepage">
    <h1 className="homepageHeading">Creating your portfolio</h1>    
    <ul className = "homepageImages">
      <li className="listImage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLopuOxOHAYJs0sF8hoUtXAszRZnGunFK6_W6I13oHXA&usqp=CAU&ec=48665701" style={{ height: '20vw', width: '30vw' }} /></li>
      <li className="listImage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOn6Qa_uss3pdzXo0yeL824Z3ibuFCIBC3v0C7de4eWA&usqp=CAU&ec=48665701" style={{ height: '20vw', width: '30vw' }}/></li>
      <li className="listImage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaWPJIeLLR_P6eMgybm62PExMo9xLdVZQ9cUtAqpWew&usqp=CAU&ec=48665701" style={{ height: '20vw', width: '30vw' }}/></li>  
    </ul>
    <p className = "homepagePara">
    Whatever type of projects you make graphic design, website, mobile app or any other save it in above simple steps  
    </p>
    <ul className = "homepageList">
       <li className = "homepageListItems">Register/Login</li>
       <li className = "homepageListItems">Create your profile</li>
       <li className = "homepageListItems">Fill up project details</li>
       <li className = "homepageListItems">Save</li>
    </ul> 
    <p className = "homepagePara">
    So what are you waiting for - <Link to = "/Register" className = "linking">Register Now</Link>
    </p>
    <p className = "homepagePara">
    Already have an account - <Link to = "/Login" className = "linking">Login</Link> 
    </p>
    </div>    
    )
}

export default Homepage ;