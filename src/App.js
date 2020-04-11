import React from 'react';
import './App.css';
import Drawer from './components/Drawer'
import Test from './components/Test';
import Posts from './components/Posts';

function App() {
  return (
    <div>
      <Drawer>
        <Posts />
        <Test />
      </Drawer>
    </div>
  );
}

export default App;
