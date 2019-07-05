import './index.css';

import React, {Component} from 'react';

import Conditional from './components/Conditional';
import TodoItem from './components/TodoItem';
import { bindExpression } from '@babel/types';
import todoData from './todoData';

class App extends Component{
  constructor() {
    super();
    // this.state = {todos: todoData
    // }
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "california",
      dietaryRestrictions: [
        {
          id: 1,
          name: "no nuts",
          status: false,
        },
        {
          id: 2,
          name: "non-dairy",
          status: false,
        },
        {
          id: 3,
          name: "other",
          status: false,
        }
      ],
      otherDiet: "",
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // loading: false,
    // character: {}
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, id) {
    const {name, value, type, checked} = e.target;
    if (type === "checkbox"){
      this.setState((prevState) => {
        const newDiet = prevState.dietaryRestrictions.map(item => {
          if (item.id === id) {
            item.status = !item.status;
          }
          return item;
        })
        // console.log("changed ", newDiet);
        return {
          [name]: newDiet
        };
      })
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted
    })
  }

  // componentDidMount() {
  //   // get the data from the API to correctly display
  // }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // runs when mounted, and everytime a parent passes different props to children
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something important here... will be depricated.... React 17 came out.
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // expensive and slow if you let React update every single time it is pulled up. We don't need this.
  //   // Instead, we use this lifecycle method to determine if React should update.
  //   // (write logic to check if its important to update or not)
  //   // return true if we DO want it io update
  //   // return false if not
  //   // have to really be sure that you really don't want this component to update... otherwise can result in very hard to
  //   // track bugs
  // }

  // componentWillMount() {
  //   // component will eventually disappear form the screen
  //   // clean up or teardown of components that can make DOM messy
  //   // Such as event listener removal for stopping update every time the user scrolls
  //   // (e.g. remove event listener)
  // }

  // componentWillUpdate() {

  // }

  // static getDerivedStateFromProps(props, state) {
  //   // return the new, updated state based upon the props
  //   // react team discourages use of this method... but is possible and is introduced
  // }

  // getSnapshotBeforeUpdate() {
  //   // create a backup of the current way things are
  //   // this is not a common lifecycle method that is used, but this is important.
  // }

  // handleChange(id){
  //   this.setState((prevState) => {
  //     const newTodos = prevState.todos.map(item => {
  //       if (item.id === id) {
  //         item.completed = !item.completed;
  //       }
  //       return item;
  //     });
  //     return {todos: newTodos
  //     }
  //   })
  // }

  // Notes about the && operator
  // you may be used to using only one for truthy
  // In react, && if first is truthy, it will return the left and the right.
  // The && operator is how to render if true, or nothing if false.
  // (i.e. true && false, returns false because the first value is true and the return value is the second value)
  // (i.e. false && false, returns false because the first value is false)
  // (i.e. false && true, returns false because the first value is false)

  // componentDidMount(){
  //   this.setState({
  //     loading: true
  //   });
  //   fetch("https://swapi.co/api/people/1")
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         loading: false,
  //         character: data
  //       })
  //     });
  //   };

  render(){

    // const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    // const msgList = this.state.unreadMessages.map((item, index) => {
    //   return (
    //     <p key={index}>{item}</p>
    //   )
    // });
    const {firstName, lastName, age, gender, location, dietaryRestrictions, otherDiet, submitted} = this.state;
    const dietList = dietaryRestrictions.map(item => {
      let currentItem;
      if (item.status) {
        currentItem = <h5 style={{margin: "0px"}}key={item.id}>- {item.name}</h5>
      }
      return currentItem;
    });
    const otherDietItem = <h5 style={{margin: "0px"}}><span style={{color: "#ffffff"}}>blank</span>- {otherDiet}</h5>;

    const summaryText = (
      <h3>You prefer to be addressed as
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
      </h3>
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
              onChange={(e) => this.handleChange(e, item.id)}
            />
            {item.name}
            <br />
            <input
              name="otherDiet"
              value={otherDiet}
              placeholder="list your diet restrictions"
              onChange={this.handleChange}
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
              onChange={(e) => this.handleChange(e, item.id)}
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
        <form onSubmit={this.handleSubmit}>
          <h3>Personal Information: </h3>
          <input
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          /><br />
          <input
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          /><br />
          <input
            name="age"
            value={age}
            placeholder="Age"
            onChange={this.handleChange}
          /><br />

          <br />
          <h3>Gender: </h3>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={this.handleChange}
            />
          Male</label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={this.handleChange}
            />
          Female</label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="trans"
              checked={gender === "trans"}
              onChange={this.handleChange}
            />
          Trans</label>
          <br />
          <br />
          <h3>Location: </h3>
          <select
            name="location"
            value={location}
            onChange={this.handleChange}
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
}

export default App;