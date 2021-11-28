import React from "react";
// import ReactDom from 'react-dom'
import "./app.css";
import Cse from "./Pages/cs";
import Navbar from "./Component/Navbar";
import { Routes, Route } from 'react-router-dom';
// import Pricing from "./Pages/pricing";

const App = () => {
  return (
    <div id="root1">
    <Navbar/>
    <Routes>
      <Route path='/welcome' element={<Cse />} />
    </Routes>
    hello
    </div>
  );
};

export default App;

// const App = () => {
//   return (
//     <div>
//     Hi
//     <main>
//       <Routes>
//         <Route path='/welcome' element={<Cse />} />
//         {/* <Route path='/products' element={<Products />} />
//         <Route path='/products/:productId' element={<ProductDetail />} /> */}
//       </Routes>
//     </main>

