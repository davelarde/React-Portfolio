import React from "react"


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
        <a className="nav-link" href="#">ABOUT ME </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">SERVICES </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">EXPERIENCE </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">PORTOFOLIO</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CONTACT</a>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>
)
}

export default Navbar