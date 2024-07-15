
import {HashRouter as Router, Route, Routes, } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Blog001 from "./pages/Blogs/Blog001";
import Footer from './components/Footer';
import SoftwarePortfolio from './pages/SoftwarePortfolio';
import GamePortfolio from './pages/GamePortfolio';
import AnimationPortfolio from './pages/AnimationPortfolio';
import Mated001 from './pages/Podcasts/mated001';
import Mated002 from './pages/Podcasts/mated002';
import Mated003 from './pages/Podcasts/mated003';
import Mated from './pages/MatedPodcast';





function App() {
  
  return (
    <>
    <Router>
      <Header />
     
      
      <div className='w-full flex justify-center cursor-default'>
      <div className='border-8 border-t-4 bg-slate-300 border-black w-[95vw] sm:w-[90vw] rounded-xl p-3 text-center cursor-default'>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/blog" element={<Blog />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/software" element={<SoftwarePortfolio />} />

    <Route exact path="/game" element={<GamePortfolio />} />
    <Route exact path="/portfolio" element={<AnimationPortfolio />} />
    <Route exact path="/news" element={<Videos />} />
    <Route exact path="/mated" element={<Mated />} />
    <Route exact path="/blog/001" element={<Blog001 />} />
    <Route exact path="mated/001" element={<Mated001 />} />
    <Route exact path="mated/002" element={<Mated002 />} />
    <Route exact path="mated/003" element={<Mated003 />} />
    </Routes>
    </div>
    </div>
    <Footer />
    </Router>

    
    
    </>
  );
}

export default App;
