import React from 'react'

function Portfolio() {
  return (
    <div className="jumbotron m-0" id="portfolio">
    <div className="row m-3">
      <div className="headerPort text-center pb-5 mt-0">
      <h1>Full Stack Applications Built By Me</h1>
      </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body bg1 text-white  font-weight-bold">
          <h5 className="card-title">E-COMMERCE BACKEND APP</h5>
          <p className="card-text">Try it in Insomia, you won't regret</p>
          <a href="https://github.com/davelarde/E-commerce-back-end-app.git"  className="btn btn-primary"
          target="_blank" rel="noopener noreferrer">Find Out More</a>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body bg2 text-white font-weight-bold">
          <h5 className="card-title">LANDMARKD- MY TRAVEL SITE!</h5>
          <p className="card-text">Tired of regular travel sites? TRY THIS!</p>
          <a href="https://davelarde.github.io/My-travel-site/"  className="btn btn-primary" target="_blank" rel="noopener noreferrer">Find Out More</a>
        </div>
      </div>
    </div>
   
      <div className="flex-column text-white text-right" id="users" ></div>  
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body bg3 text-white font-weight-bold">
            <h5 className="card-title">READ ME GENERATOR</h5>
            <p className="card-text">Generate your Read Me the easiest way!</p>
            <a href="https://github.com/davelarde/Readme-gen.git"  className="btn btn-primary" target="_blank" rel="noopener noreferrer">Find Out More</a>
          </div>
        </div>
      </div>      
    
      <div className="col-sm-6">
        <div className="card justify-content-center">
          <div className="card-body bg4 text-white font-weight-bold">
            <h5 className="card-title">TECHBLOG</h5>
            <p className="card-text">Don't forget to leave your reviews!</p>
            <a href="https://serene-eyrie-77030.herokuapp.com/"  className="btn btn-primary" target="_blank" rel="noopener noreferrer">Find Out More</a>
            
          </div>
        </div>
      </div>    
      <div className="col-sm-6">
        <div className="card justify-content-center">
          <div className="card-body bg5 text-white font-weight-bold">
            <h5 className="card-title">BUDDYGRAM</h5>
            <p className="card-text">YOUR NEW BEST SOCIAL APP IN TOWN!</p>
            <a href="https://safe-mesa-41776.herokuapp.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Find Out More</a>
          </div>
          </div>
        </div>
        <div className="col-sm-6">
        <div className="card justify-content-center">
          <div className="card-body bg6 text-white font-weight-bold">
            <h5 className="card-title">FIRST PORTFOLIO</h5>
            <p className="card-text">SIMPLE BUT PERFECT!</p>
            <a href="https://davelarde.github.io/Updated-portfolio-Dani/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Find Out More</a>
          </div>
          </div>
        </div>
      </div>     
      </div>
     
  )
}

export default Portfolio