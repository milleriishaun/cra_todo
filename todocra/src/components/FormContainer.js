import '../index.css';

import React, {Component} from 'react';

import FormComponent from './FormComponent';
import { bindExpression } from '@babel/types';

class Form extends Component{
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
    return (
      <FormComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    )
  }
}

export default Form;