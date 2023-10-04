import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/tipografias.css';
//import Login from'./Components/GestionUsuarios/Login/Login.js';
//import Register from './Components/GestionUsuarios/Register/Register.js';
import Recuperacion from './pages/GestionUsuarios/Recuperacion/Recuperacion.js';
import Login from './pages/GestionUsuarios/Login/Login.js';
import Register from './pages/GestionUsuarios/Register/Register.js';
import MainPageUser from './pages/MainPage/MainPageUser/MainPageUser.js';
import MainPageEcomerceUser from './pages/Ecomerce/MainPageEcomerceUser/MainPageEcomerceUser.js';
//<Login/>

function App() {
  return (<>
     <div className="App">
      <Router>
        <Routes>
          <Route path="/Recovery" element={<Recuperacion/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/MainPageUser" element={<MainPageUser/>}/>
          <Route path="/MainPageEcomerceUser" element={<MainPageEcomerceUser/>}/>
        </Routes>
      </Router>
     </div>
  </>
 
  );
}

export default App;
