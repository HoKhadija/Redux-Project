import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { toggleTask, editTask } from '../JS/Actions/actions';

//This file exports the ListTask component,
//which receives tasks and filter props from the Redux store via the mapStateToProps function. 

const ListTask = ({ tasks, filter, dispatch }) => {
    let filteredTasks;
    if (filter === "done") {
        filteredTasks = tasks.filter((task) => task.isDone);
    } else if (filter === "notDone") {
        filteredTasks = tasks.filter((task) => !task.isDone);
    } else {
        filteredTasks = tasks;
    }
    const handleToggleTask = (id) => dispatch(toggleTask(id));

    const handleEditTask = (id, description) => dispatch(editTask(id, description));

    //It then maps over the filtered tasks and renders a Task component for each one, 
    //passing in the task object, onToggle and onEdit functions as props. 

    return (
        <div id='ListTask'>
            <ul className='list'>
                {filteredTasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onToggle={() => handleToggleTask(task.id)}
                        onEdit={(description) => handleEditTask(task.id, description)}
                    />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    filter: state.filter,
});

//Finally, it connects to the Redux store using the connect higher-order component.
export default connect(mapStateToProps)(ListTask);