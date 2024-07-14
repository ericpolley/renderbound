
import {HashRouter as Router, Route, Routes, } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Blog001 from "./pages/Blogs/Blog001";
import Blog002 from "./pages/Blogs/Blog002";
import Blog003 from "./pages/Blogs/Blog003";
import Blog004 from "./pages/Blogs/Blog004";
import Blog005 from "./pages/Blogs/Blog005";
import Blog006 from "./pages/Blogs/Blog006";
import Blog007 from "./pages/Blogs/Blog007";
import Blog008 from "./pages/Blogs/Blog008";
import Blog009 from "./pages/Blogs/Blog009";
import Blog010 from "./pages/Blogs/Blog010";
import Blog011 from "./pages/Blogs/Blog011";
import Blog012 from "./pages/Blogs/Blog012";
import Blog013 from "./pages/Blogs/Blog013";
import Blog014 from "./pages/Blogs/Blog014";
import Blog015 from "./pages/Blogs/Blog015";
import Blog016 from "./pages/Blogs/Blog016";
import Blog017 from "./pages/Blogs/Blog017";
import Blog018 from "./pages/Blogs/Blog018";
import Blog019 from "./pages/Blogs/Blog019";
import Blog020 from "./pages/Blogs/Blog020";
import Blog021 from "./pages/Blogs/Blog021";
import Blog022 from "./pages/Blogs/Blog022";
import Blog023 from "./pages/Blogs/Blog023";
import Blog024 from "./pages/Blogs/Blog024";
import Blog025 from "./pages/Blogs/Blog025";
import Blog026 from "./pages/Blogs/Blog026";
import Blog027 from "./pages/Blogs/Blog027";
import Blog028 from "./pages/Blogs/Blog028";
import Blog029 from "./pages/Blogs/Blog029";
import Blog030 from "./pages/Blogs/Blog030";
import Blog031 from './pages/Blogs/Blog031';
import Footer from './components/Footer';
import Blog032 from './pages/Blogs/Blog032';
import Blog033 from './pages/Blogs/Blog033';
import Blog034 from './pages/Blogs/Blog034';
import Blog035 from './pages/Blogs/Blog035';
import Blog036 from './pages/Blogs/Blog036';
import Blog037 from './pages/Blogs/Blog037';
import Blog038 from './pages/Blogs/Blog038';
import Blog039 from './pages/Blogs/Blog039';
import SoftwarePortfolio from './pages/SoftwarePortfolio';
import GamePortfolio from './pages/GamePortfolio';
import AnimationPortfolio from './pages/AnimationPortfolio';
import Podcast from './pages/Podcast';
import Blog040 from './pages/Blogs/Blog040';
import Blog041 from './pages/Blogs/Blog041';




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
    <Route exact path="/podcast" element={<Podcast />} />
    <Route exact path="/blog/001" element={<Blog001 />} />
    <Route exact path="/blog/002" element={<Blog002 />} />
    <Route exact path="/blog/003" element={<Blog003 />} />
    <Route exact path="/blog/004" element={<Blog004 />} />
    <Route exact path="/blog/005" element={<Blog005 />} />
    <Route exact path="/blog/006" element={<Blog006 />} />
    <Route exact path="/blog/007" element={<Blog007 />} />
    <Route exact path="/blog/008" element={<Blog008 />} />
    <Route exact path="/blog/009" element={<Blog009 />} />
    <Route exact path="/blog/010" element={<Blog010 />} />
    <Route exact path="/blog/011" element={<Blog011 />} />
    <Route exact path="/blog/012" element={<Blog012 />} />
    <Route exact path="/blog/013" element={<Blog013 />} />
    <Route exact path="/blog/014" element={<Blog014 />} />
    <Route exact path="/blog/015" element={<Blog015 />} />
    <Route exact path="/blog/016" element={<Blog016 />} />
    <Route exact path="/blog/017" element={<Blog017 />} />
    <Route exact path="/blog/018" element={<Blog018 />} />
    <Route exact path="/blog/019" element={<Blog019 />} />
    <Route exact path="/blog/020" element={<Blog020 />} />
    <Route exact path="/blog/021" element={<Blog021 />} />
    <Route exact path="/blog/022" element={<Blog022 />} />
    <Route exact path="/blog/023" element={<Blog023 />} />
    <Route exact path="/blog/024" element={<Blog024 />} />
    <Route exact path="/blog/025" element={<Blog025 />} />
    <Route exact path="/blog/026" element={<Blog026 />} />
    <Route exact path="/blog/027" element={<Blog027 />} />
    <Route exact path="/blog/028" element={<Blog028 />} />
    <Route exact path="/blog/029" element={<Blog029 />} />
    <Route exact path="/blog/030" element={<Blog030 />} />
    <Route exact path="/blog/031" element={<Blog031 />} />
    <Route exact path="/blog/032" element={<Blog032 />} />
    <Route exact path="/blog/033" element={<Blog033 />} />
    <Route exact path="/blog/034" element={<Blog034 />} />
    <Route exact path="/blog/035" element={<Blog035 />} />
    <Route exact path="/blog/036" element={<Blog036 />} />
    <Route exact path="/blog/037" element={<Blog037 />} />
    <Route exact path="/blog/038" element={<Blog038 />} />
    <Route exact path="/blog/039" element={<Blog039 />} />
    <Route exact path="/blog/040" element={<Blog040 />} />
    <Route exact path="/blog/041" element={<Blog041 />} />
    </Routes>
    </div>
    </div>
    <Footer />
    </Router>

    
    
    </>
  );
}

export default App;
