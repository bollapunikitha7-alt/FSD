import logo from './logo.svg';
import './App.css';
import Landing1 from './Landing1/Landing'; 
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Login from './Login/Login';
// let student = [
//     { name: "Naidu", age: 24, course: "MERN" },
//     { name: "Kiran", age: 25, course: "MERN" },
//     { name: "Balu", age: 23, course: "MERN" }
//   ];

function App() {
  return (
    <div className="App">
     

      <Landing1 /> 
      <Navbar />
      <Home />
      <Login />
    </div>
  );
}

export default App;
