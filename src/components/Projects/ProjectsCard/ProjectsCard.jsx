import React from 'react';
import './ProjectsCard.css';


const ProjectsCard = ({ details }) => {
  
  const handleClick = () => {
    window.open(details.link);
  }

  return (
    <div className="projects-card">
        <h6>{details.title}</h6>

        <div className="projects-duration">{details.date}</div>

        <ul>
            {details.description.map((item) => (              
                <li key={item}>{item}</li>              
              ))}
        </ul>
        <div className="projects-btn">
              <button type='button' className='projects-button' onClick={handleClick} >Repositorio</button>
        </div>
    </div>
  )
}

export default ProjectsCard