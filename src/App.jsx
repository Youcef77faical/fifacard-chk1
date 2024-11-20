// src/app.jsx
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from "./App"


import PlayerCard from './PlayerCard';
import PlayerList from './Playerlist';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
 <PlayerList/>
    <PlayerCard/>
  </React.StrictMode>
);
export default App; 