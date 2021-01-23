import React from "react";
import ExperienceItem from "../ExperienceItem"

function ProfessionalExperience(props) {
  
  const {experiencia} = props.response

  return (
    <>
      <div className="experience">
        <h2>Experiência Profissional</h2>
        {experiencia.map(item =>(
          <ExperienceItem key={item.id} experience={item}/>
        ))}  
      </div>
    </>
  )
}

export default ProfessionalExperience;