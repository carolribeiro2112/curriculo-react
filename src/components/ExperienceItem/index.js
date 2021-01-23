import React from "react"

function ExperienceItem(props) {
  console.log(props)

  const{cargo,conteudo,empresa,local,periodo} = props.experience
  
  
  return (
    <>
      <div className="experience-item">
        <div>
          <h4>{cargo}</h4>
          <span>{periodo}</span>

          <strong>{empresa}</strong>
          <span>{local}</span>
        </div>
          <p>
            {conteudo}
          </p>
      </div>
    </>
  )
}

export default ExperienceItem;