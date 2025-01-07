import React, { useState, useEffect } from 'react';
import './DetailPane.css';

export default function DetailPane({ project, setProject }) {

  return (
    <div className={`detail-pane ${project !== null ? 'open' : 'close'}`}>
      <h2>Detail Pane for {project !== null ? project.name : ''}!</h2>
      <button onClick={() => setProject(null)}>X</button>
    </div>
  );
} 