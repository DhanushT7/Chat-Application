import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Contact from './pages/contact/contact.jsx'
import Login from './pages/login/login.jsx'
import Signup from "./pages/signup/signup.jsx";

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/>} />
          <Route path="/signup" element={ <Signup/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
      </Router>
  );
}

export default App;
