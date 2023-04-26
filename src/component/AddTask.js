import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addTask} from '../JS/Actions/actions' 

const AddTask = ({ dispatch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleAddTask = () => {
        if (inputValue.trim() === '') return;
        dispatch(addTask(Date.now(), inputValue));
        setInputValue('');
    };

    return (
        <div className='AddTask'>
            <input className='newTask' type="text" value={inputValue} onChange={handleInputChange} />
            <button className='addTask' onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default connect()(AddTask);