import React, { Component }  from 'react';

class Greeting extends Component{
  render() {
    const date = new Date();
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
      <h3>Good {timeOfDay}!</h3>
    )
  }
}

export default Greeting;