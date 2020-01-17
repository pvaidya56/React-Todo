import React from 'react';
import { list } from './data';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import "./Todo.css"
class App extends React.Component {
  constructor(){
    super();
    this.state = {list}
    // console.log(this.state);
  };
   
  toggleTask = taskId => {
    console.log("From toggle Item", taskId)
    this.setState({
      list: this.state.list.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  }

  addTask = taskText => {
    const newTask = {
      name: taskText,
      purchased: false,
      id: Date.now()
    };
    this.setState({
      list: [...this.state.list, newTask]
    })
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>What's on your TODO List?</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList list={this.state.list} toggleTask={this.toggleTask}/>

      </div>
    );
  }
}

export default App;
