import React from 'react'

function About() {
  return (
    <div className="container" id="allpage">
        <h1>ABOUT ME </h1>
  
        <hr className="mb-5 text-center" />

    <div className="row text-center" id="photo">
      <div className="col-md-6 mb-4">
        <h2 className="my-5 h2">World Traveller/Full Stack Developer</h2>
        <img className="rounded-circle" alt="100x100" src="https://avatars.githubusercontent.com/u/99364989?v=4"
          data-holder-rendered="true"/>
      </div>
      <div className="container" id="about">
        <p>
            Who am I?
            A profesional world traveller, looking to get into the software development business!
            My name is Daniela Velarde, I was born in the beautiful city of La Paz, Bolivia at 3600masl!, and raised in Lititz, Pennsylvania.
             I currently reside in La Paz, Bolivia. But looking forward to work for great companies in the US, and able to travel around the world while coding.
             Tourism will always be my passion and this is why I want to add some colaboration to it with coding.
             The tourism industry is in need to improve their websites, and here I am to do it!
            I am currently enrolled at a Coding Bootcamp at Washington University to learn software development.
            So far I have knowledge in the following technologies:
            </p>
            
            <ul className="list-group- dark">
  <li className="list-group-item-dark">HTML,CSS,JAVASCRIPT</li>
  <li className="list-group-item-dark">BOOTSTRAP,MATERIALIZE,JQUERY</li>
  <li className="list-group-item-dark">THIRD PARTY APIS, MYSQL, SEQUELIZE, JEST</li>
  <li className="list-group-item-dark">NODE JS, EXPRES JS,MONGO DB,REACT JS</li>
</ul>

</div>       
        </div>
    </div>
  
    
  )
}

export default About