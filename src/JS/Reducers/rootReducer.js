import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, SET_FILTER } from '../Actions/actions-types';

const initialState = {
    tasks: [],
    filter: 'all',
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                        ? { ...task, description: action.payload.description }
                        : task
                ),
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload.filter,
            };
        default:
            return state;
    }
};

export default tasksReducer;