import './App.css';
import Labs from "./Lab";
 import Kanbas from "./Kanbas";
 import { HashRouter, Route,Routes, Navigate } from 'react-router-dom';
import Project from './project';


function App() {
  return (
    <HashRouter>
    <div> 
        <Routes>   
        <Route path="/"         element={<Navigate to="/Labs"/>}/>  
        <Route path="/project/*" element={<Project/>} /> 
        <Route path="/Labs/*"   element={<Labs/>}/>
        <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes> 
      </div>       
    </HashRouter>

  );
}

export default App;