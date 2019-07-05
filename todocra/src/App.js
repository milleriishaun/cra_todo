import './index.css';

import React, {Component} from 'react';

import Conditional from './components/Conditional';
import Form from './components/FormContainer';
import TodoItem from './components/TodoItem';
import { bindExpression } from '@babel/types';
import todoData from './todoData';

function App() {
  return (
    <Form />
  )
}

export default App;