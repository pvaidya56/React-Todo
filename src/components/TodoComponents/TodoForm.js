import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            taskText: ""
        };
    }

    changeHandler = event => {
        this.setState({
            taskText: event.target.value
        });
    }

    submitHandler = event => {
        //stops page refresh
        event.preventDefault();
        this.props.addTask(this.state.taskText);
        this.setState({ taskText: "" });
    };
    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="taskText" 
                value={this.state.taskText}
                onChange={this.changeHandler}/>
                <button type="submit">Add</button>
                {this.props.list.length > 0 ? <button onClick={
        this.props.clearCompleted} className="button">Clear Completed</button> : null} 
                
            </form>
        );
    }
}

export default TodoForm;