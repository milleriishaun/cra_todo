import '../index.css';

import React from 'react';

function FormComponent(props) {

    // const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    // const msgList = this.state.unreadMessages.map((item, index) => {
    //   return (
    //     <p key={index}>{item}</p>
    //   )
    // });
    const {firstName, lastName, age, gender, location, dietaryRestrictions, otherDiet, submitted} = props.data;
    const dietList = dietaryRestrictions.map(item => {
      let currentItem;
      if (item.status) {
        currentItem = <h5 style={{margin: "0px"}}key={item.id}>- {item.name}</h5>
      }
      return currentItem;
    });
    const otherDietItem = <h5 style={{margin: "0px"}}><span style={{color: "#ffffff"}}>blank</span>- {otherDiet}</h5>;

    const summaryText = (
      <div className="todo-list">You prefer to be addressed as
        {gender === "male" ? " " + "Mr. "
          : gender === "female"
          ? " " + "Ms. "
          : gender === "trans"
          ? " " + "Cis. "
          : null}
          {firstName ? firstName : null} {lastName ? lastName : null}
        <br />and you are a {age} year old {gender} from {" " + location}!
        <br />
        <br />
        Your dietary restrictions include the following:
        {dietList}
        {otherDietItem}
      </div>
    );

    const diets = dietaryRestrictions.map(item => {
      if (item.name === "other" && item.status === true) {
        return (
          <label>
            <input
              key={item.id}
              type="checkbox"
              name="dietaryRestrictions"
              value={item.name}
              checked={item.status}
              onChange={(e) => props.handleChange(e, item.id)}
            />
            {item.name}
            <br />
            <input
              name="otherDiet"
              value={otherDiet}
              placeholder="list your diet restrictions"
              onChange={props.handleChange}
            />
          </label>
        )
      } else {
        return (
          <label>
            <input
              key={item.id}
              type="checkbox"
              name="dietaryRestrictions"
              value={item.name}
              checked={item.status}
              onChange={(e) => props.handleChange(e, item.id)}
            />
            {item.name}
            <br />
          </label>
        )
      }
    });

  return (
    <main>
      {/* // <div className="todo-list"> */}
      {/* {this.state.loading ? "Loading..." : this.state.character.name} */}
      {/* {todoComponents} */}
      {/* <Conditional isLoading={this.state.isLoading} /> */}
      {/* {the above Conditional component should not be used because the update logic is in the App component and not in Conditional} */}
      {/* {this.state.unreadMessages.length > 0 && <h1>You have {this.state.unreadMessages.length} unread messages!</h1>}
      {this.state.unreadMessages.length > 0 && msgList} */}
      {/* // </div> */}
      <form onSubmit={props.handleSubmit}>
        <h3>Personal Information: </h3>
        <input
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={props.handleChange}
        /><br />
        <input
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={props.handleChange}
        /><br />
        <input
          name="age"
          value={age}
          placeholder="Age"
          onChange={props.handleChange}
        /><br />

        <br />
        <h3>Gender: </h3>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={props.handleChange}
          />
        Male</label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={props.handleChange}
          />
        Female</label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="trans"
            checked={gender === "trans"}
            onChange={props.handleChange}
          />
        Trans</label>
        <br />
        <br />
        <h3>Location: </h3>
        <select
          name="location"
          value={location}
          onChange={props.handleChange}
        >
          <option value="Iowa">Iowa</option>
          <option value="Wyoming">Wyoming</option>
          <option value="Tennessee">Tennessee</option>
          <option value="California">California</option>
        </select>

        <h3>Dietary Restrictions: </h3>
        {diets}

        <h1>Live Summary: </h1>
        {submitted && summaryText}
        <button>Submit</button>
      </form>
    </main>
  )
}

export default FormComponent;