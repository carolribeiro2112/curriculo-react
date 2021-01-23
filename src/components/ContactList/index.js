import React from "react";

function ContactList(props) {
  const {tipo, contato} = props.sidebar
  // console.log(props)

  return (
    <div className="lista-de-contatos">
      <li>
        <div className="item-contato">
          <h4>{tipo}</h4>
          <p>{contato}</p>
        </div>
      </li>
    </div>    
  )
}

export default ContactList;