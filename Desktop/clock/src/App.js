import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Circle } from './container/clock/Circle';
import {Animation} from './container/animation/Animation';
import {InfinityAny} from './container/animation/infinityAny/InfinityAny'
import { Navigation } from './pages/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <div className="App">
          <Routes>
            <Route exect path="/" element={<Circle />} /> 
            <Route exect path="/animation" element={<Animation/>} /> 
            <Route exect path="/infinity" element={<InfinityAny/>} /> 
          </Routes>
      </div>
    </>
   
  );
}

export default App;
