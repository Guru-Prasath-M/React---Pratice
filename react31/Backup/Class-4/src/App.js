import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Footer from "./components/Footer";
// import Header  from "./components/Header";
// import Message  from "./components/Message/Message";
// import Navbar from './components/Navbar/Navbar';
import Message from './Message/Message';
import User from './User/User';


function App(){
  return <div>
    <h1>App Component</h1>
    <hr />
    {/* <Header/>
    <hr />
    <Footer/>
    <hr />
    <Message/>
    <hr />
    <Navbar/> */}

    <Message/>
    <hr/>
    <User/>
  </div>
}

export default App;