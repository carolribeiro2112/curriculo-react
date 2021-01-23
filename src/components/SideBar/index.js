import React, { useState } from "react";
import ContactList from "../ContactList"
import Education from "../Education"


function SideBar(props) {
  const [dados,mostraDados] = useState(false)

  const toggle = () => {
    mostraDados(!dados)
  }

  return(
    <>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button onClick={toggle}>Mostrar Contatos</button>
          
          {props.response.contatos.map(item => (
            dados && <ContactList key={item.id} sidebar={item}/> 
          ))}
          
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          {props.response.educacao.map(item =>(
            <Education key={item.id} sidebar={item}/>
          ))}
          
        </div>
      </aside>
    </>
  )
}

export default SideBar;