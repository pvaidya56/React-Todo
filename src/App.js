import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import "./Todo.css"
import SimpleStorage from "react-simple-storage";
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: []
    };
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
      completed: false,
      id: Date.now()
    };
    if (!taskText.trim()) return; 

    this.setState({
      list: [...this.state.list, newTask]
    })
  }

 clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(task => !task.completed)
    })
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <SimpleStorage parent={this} />
        <div className="header">
          <h2>What's on your TODO List?</h2>
          <TodoForm addTask={this.addTask} list={this.state.list} clearCompleted={this.clearCompleted}/>
        </div>
        <TodoList list={this.state.list} toggleTask={this.toggleTask} />

      </div>
    );
  }
}

export default App;
