import "./App.css"
import React from 'react';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';
import Filter from './component/FilterTask';

const App = () => (

  <div className='App'>
    <h1>To Do App</h1>
    <AddTask />
    <Filter />
    <ListTask />
  </div>
);
export default App;