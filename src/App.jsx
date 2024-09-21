import React from 'react';
import TaskList from './components/TaskList';

import './styles/App.css';

const App = () => {
  return (
    <div>
      <h1 className='text-warning '>Task Management System</h1>
      <TaskList />
    </div>
  );
};

export default App;


