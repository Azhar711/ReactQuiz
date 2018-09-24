import React, { Component } from 'react';
import './App.css';
import TodosComponent from './components/todos';
// import Todo from './containers/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodosComponent/>
        {/* <Todo/> */}
      </div>
    );
  }
}

export default App;
