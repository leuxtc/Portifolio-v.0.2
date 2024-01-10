import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home/>} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
