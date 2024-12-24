import { BrowserRouter, Routes, Route, Link }  from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Sign-in';
import Signup from './Pages/Sign-up';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Head from './Headers/Head';
import Footer from './Headers/Footer';
function App() {
  return (
    <>
      < BrowserRouter>
      <Head/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </ BrowserRouter>
   
    </>
  )
}

export default App
