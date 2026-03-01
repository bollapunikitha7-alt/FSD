import Home from "../Home/Home";
import Login from "../Login/Login";
import About from "../About/About";
import Doctors from "../Doctors/Doctors";
import Contact from "../Contact/Contact";
import Signup from "../Signup/Signup";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function Link(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Doctors' element={<Doctors/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default Link;