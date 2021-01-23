import React from "react";

function Education(props) {
  console.log(props)

  const {instituicao,curso} = props.sidebar

  return (
    <div className="lista-de-formacao">
      <li>
        <h4>{curso}</h4>
        <p>{instituicao}</p>
      </li>
    </div>
  )
}

export default Education;