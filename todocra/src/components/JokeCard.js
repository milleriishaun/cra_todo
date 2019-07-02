import React from 'react';

function JokeCard(props) {
  return (
    <div>
      <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
      <p style={{color: !props.punchline && "#abe"}}>Answer: {props.punchline}</p>
    </div>
  )
}

export default JokeCard;