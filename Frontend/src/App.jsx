import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Contact from './pages/contact/contact.jsx'
import Login from './pages/login/login.jsx'
import SignIn from './pages/signIn/signIn.jsx'

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/>} />
          <Route path="/signIn" element={ <SignIn/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
      </Router>
  );
}

export default App;
