import './index.css';

import React, {Component} from 'react';

import Conditional from './components/Conditional';
import TodoItem from './components/TodoItem';
import todoData from './todoData';

class App extends Component{
  constructor() {
    super();
    // this.state = {todos: todoData
    // }
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue",
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // loading: false,
    // character: {}
    // this.handleChange = this.handleChange.bind(this);
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

  handleChange(e){
    const {name, value, type, checked} = e.target;
    type === "checkbox" ? this.setState({
      [name]: checked
    })
    : this.setState({
      [name]: value
      // lastName: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted
    });
  }

  render(){

    // const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    // const msgList = this.state.unreadMessages.map((item, index) => {
    //   return (
    //     <p key={index}>{item}</p>
    //   )
    // });

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        {/* // <div className="todo-list"> */}

        {/* {this.state.loading ? "Loading..." : this.state.character.name} */}
        {/* {todoComponents} */}
        {/* <Conditional isLoading={this.state.isLoading} /> */}
        {/* {the above Conditional component should not be used because the update logic is in the App component and not in Conditional} */}
        {/* {this.state.unreadMessages.length > 0 && <h1>You have {this.state.unreadMessages.length} unread messages!</h1>}
        {this.state.unreadMessages.length > 0 && msgList} */}
        {/* // </div> */}
        <textarea
          value={"Some default value"}
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female
        </label>
        <br />
        <label>Favorite color: </label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="brown">Brown</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
        <h2>Your favorite color is {this.state.favColor}</h2>
        {this.state.gender && <h2>You are a {this.state.gender}</h2>}
        <br />
        <p>Submitted: {this.state.submitted ? "Yes" : "Not Yet"}</p>
        <button>Submit</button>
      </form>
    )
  }
}

export default App;