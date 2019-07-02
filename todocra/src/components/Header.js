import '../index.css';

import React from 'react';

function Header() {

  // choose any year, month, date, and hour
  const date = new Date(2019, 6, 27, 11);
  const hours = date.getHours();
  let timeOfDay;

  const styles = {
    fontSize: 32
  }

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#2E0927";
  } else {
    timeOfDay = "night";
    styles.color = "#D90000";
  }

  return (
    <h1 style={styles}>Good {timeOfDay}</h1>
  )
}

export default Header;