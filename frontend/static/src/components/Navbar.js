import { Link } from "react-router-dom";

function Navbar(props){
  return(
    <nav className="dashboard">
      <div>
        <button className="navbar-buttons mr-2"><Link to="/dashboard">DashBoard</Link></button>
        <button className="navbar-buttons mr-2"><Link to="/social">Social</Link></button>
        <button className="navbar-buttons mr-2">Guides</button>
      </div>
      <div>
        <img className='profile'src={props.image ? props.image : "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-256.png"} alt=""/>
      </div>
      <div>
        <button className="navbar-buttons mr-2"><Link to="/settings">Settings</Link></button>
        <button className="navbar-buttons mr-2" onClick={props.logOut}>Log out</button>
      </div>
    </nav>
  )
}
export default Navbar
