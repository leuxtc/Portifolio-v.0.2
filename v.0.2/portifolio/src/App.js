import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Initial from './components/Initial';

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} ></Route>
          <Route path='/initial' element={<Initial />}></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
