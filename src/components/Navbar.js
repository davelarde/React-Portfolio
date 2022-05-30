import React from "react"
import { Link } from "react-router-dom"
 
const Navbar  = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <div className="container" >
  {/* /* <a className="navbar-brand" href="#">Navbar</a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
    <Link to="/" className="nav-link">HOME</Link>
      </li>
      <li className="nav-item active">
      <Link to="/about" className="nav-link">ABOUT</Link>
      </li>
      <li className="nav-item">
      <Link to="/about" className="nav-link">PORTFOLIO</Link>
      </li>
      <li className="nav-item">
      <Link to="/contact" className="nav-link">CONTACT</Link>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>
)
}

export default Navbar
