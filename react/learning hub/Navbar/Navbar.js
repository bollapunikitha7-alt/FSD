import './Navbar.css';
function Navbar() {
 return (
  <>
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
  </>
 );
}
export default Navbar;
//  import { useState } from "react";

// function Navbar({ students=[] }) {
//   return (
//     <>
//       <h2>Home Component</h2>
//       <ul>
//         {students.map((stu, index) => (
//           <li key={index}>
//             Name: {stu.name}, 
//             Age: {stu.age}, 
//             Course: {stu.course}
//           </li>
//         ))}
//       </ul>
//       </>
//   );
// }

// export default Navbar;
