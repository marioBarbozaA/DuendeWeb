import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Assets/tipografias.css';
//import Login from'./Components/GestionUsuarios/Login/Login.js';
//import Register from './Components/GestionUsuarios/Register/Register.js';
import Recuperacion from './Components/GestionUsuarios/Recuperacion/Recuperacion.js';
import Login from './Components/GestionUsuarios/Login/Login.js';
import Register from './Components/GestionUsuarios/Register/Register.js';
//<Login/>

function App() {
  return (<>
     <div className="App">
      <Router>
        <Routes>
          <Route path="/Recuperacion" element={<Recuperacion/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </Router>
     </div>
  </>
 
  );
}

export default App;
