import React from 'react';

function ContentCard(props) {
  console.log(props);

  return (
    <div className="content-card">
      <img src={props.contact.url} alt="catpic"></img>
      <h1 style={{fontWeight: 999, fontSize: 24}}>{props.contact.name}</h1>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContentCard;