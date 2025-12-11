import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Footer from "./components/Footer";
// import Header  from "./components/Header";
// import Message  from "./components/Message/Message";
// import Navbar from './components/Navbar/Navbar';
// import Message from './Message/Message';
// import User from './User/User';
import Navbar from './Navbar/Navbar';
import { Routes , Route , BrowserRouter as Router } from 'react-router-dom';
import Home from './Header/Home';
import Contact from './Header/Contact';
import Login from './Header/Login';


function App(){
  return <div>
    {/* <h1>App Component</h1>
    <hr /> */}
    {/* <Header/>
    <hr />
    <Footer/>
    <hr />
    <Message/>
    <hr />
    <Navbar/> */}

    {/* <Message/>
    <hr/>
    <User/>
    <hr/> */}
<Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
</Router>
  </div>
}

export default App;