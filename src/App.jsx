import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutCollege from './pages/AboutCollege';
import Blogs from './pages/Blogs';
import Academic from './pages/Academic';
import Facilities from './pages/Facilities';
import Curriculum from './pages/Curriculum';
import Admission from './pages/Admission';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-college" element={<AboutCollege />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/academics" element={<Academic />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
