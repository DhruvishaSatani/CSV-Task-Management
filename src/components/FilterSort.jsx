import React, { useState } from 'react';
import '../styles/App.css'

const FilterSort = ({ tasks, setFilteredTasks }) => {
  const [filters, setFilters] = useState({ priority: '', status: '' });

  const applyFilters = () => {
    const filtered = tasks.filter(task => {
      const matchesPriority = filters.priority ? task.priority === filters.priority : true;
      const matchesStatus = filters.status ? task.status === filters.status : true;
      return matchesPriority && matchesStatus;
    });
    setFilteredTasks(filtered);
  };

  return (
    <div>
      <select className='selection' onChange={(e) => setFilters({ ...filters, priority: e.target.value })}>
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select  className='selection' onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button  className='btn' onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterSort;
