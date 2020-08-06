import React from 'react';
import EventEditor from './components/EventEditor';
import EventList from './components/EventList';


import './App.css';

function App() {
  return (
    <div className="App">
      <EventEditor />
      <EventList/>
    </div>
  );
}

export default App;
