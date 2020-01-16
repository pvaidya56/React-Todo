import React from 'react';

const Todo = props => {
    return (
        <div
        className={`task${props.task.purchased ? " purchased" : ""}`}
        onClick={e => {
            props.toggleTask(props.task.id);
        }}>
            {props.item.name}
        </div>
    );
}
export default Todo;