import React, { useState } from 'react';


const Task = ({ task, onToggle, onEdit }) => {
    const [editMode, setEditMode] = useState(false);
    const [editInputValue, setEditInputValue] = useState(task.description);

    const handleEditInputChange = (e) => setEditInputValue(e.target.value);

    const handleEditTask = () => {
        if (editInputValue.trim() === '') return;
        onEdit(editInputValue);
        setEditMode(false);
    };

    return (
        <li>
            <input className='checkbox' type="checkbox" checked={task.isDone} onChange={onToggle} />
            {editMode ? (
                <>
                    <input className='save'
                        type="text"
                        value={editInputValue}
                        onChange={handleEditInputChange}
                    />
                    <button onClick={handleEditTask}>Save</button>
                </>
            ) : (
                <>
                    <span>{task.description}</span>
                    <button id='Edit' onClick={() => setEditMode(true)}>Edit</button>
                </>
            )}
        </li>
    );
};

export default Task;