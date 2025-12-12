import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import ContactApp from './ContactApp/ContactApp';
import ContactDetails from './ContactApp/ContactDetails';
import ContactList from './ContactApp/ContactList';
import Home from './ContactApp/Home';


const App = () => {
  return <div>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/index" element={<Home/>}/>
              <Route path="/contacts" element={<ContactApp/>}/>
            </Routes>
          </Router>
        </div>
}

export default App;