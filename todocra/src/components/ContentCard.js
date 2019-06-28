import React from 'react';

function ContentCard(props) {
  console.log(props);
  return (
    <div className="content-card">
      <img src={props.url} alt="catpic"></img>
      <h1 style={{fontWeight: 999, fontSize: 24}}>{props.title}</h1>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default ContentCard;