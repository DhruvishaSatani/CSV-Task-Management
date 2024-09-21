import React from 'react';
import { importFromCSV } from '../utils/csvUtils';
import '../styles/App.css'

const ImportExport = ({ onExport }) => {
  const handleImport = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const importedTasks = await importFromCSV(file);
        // Validate and process importedTasks
        console.log(importedTasks);
        // Add logic to validate and add tasks
      } catch (error) {
        console.error("Error importing CSV:", error);
      }
    }
  };

  return (
    <div>
        <button className='btn'>Import File</button>
      <input className='input' type="file" accept=".csv" onChange={handleImport} />
      <button  className='btn' onClick={onExport}>Export Tasks</button>
    </div>
  );
};

export default ImportExport;
