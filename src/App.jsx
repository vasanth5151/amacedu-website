import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const pageMeta = {
  '/': {
    title: 'AMACEDU | Best Teacher Education College in Uthiramerur',
    description: 'Discover AMACEDU, a leading teacher education college in Uthiramerur offering B.Ed., M.Ed., quality teaching, campus life, and holistic academic excellence.',
  },
  '/about-us': {
    title: 'About AMACEDU | Teacher Education College in Kancheepuram',
    description: 'Learn about AMACEDU, its vision, mission, legacy, and commitment to quality teacher education in Kancheepuram and beyond.',
  },
  '/about-college': {
    title: 'About AMACEDU College | Teacher Training Institute',
    description: 'Explore the story, values, faculty, and academic excellence of AMACEDU College, a reputed teacher education institution in Tamil Nadu.',
  },
  '/blog': {
    title: 'AMACEDU Blog | Education News, Insights & Campus Stories',
    description: 'Read the latest education insights, campus updates, admissions information, and stories from AMACEDU and the world of teacher education.',
  },
  '/academics': {
    title: 'Academic Programs at AMACEDU | B.Ed. & M.Ed. Courses',
    description: 'Explore AMACEDU academic programs, B.Ed. and M.Ed. courses, curriculum structure, specialized teaching disciplines, and career pathways.',
  },
  '/facilities': {
    title: 'AMACEDU Facilities | Library, Hostel, Labs & Campus Amenities',
    description: 'Discover AMACEDU facilities including libraries, hostels, transport, labs, classrooms, and modern amenities for student success.',
  },
  '/curriculum': {
    title: 'AMACEDU Curriculum | Teacher Education Learning Framework',
    description: 'View the AMACEDU curriculum designed for future teachers, with a strong focus on pedagogy, research, value education, and practical learning.',
  },
  '/admissions': {
    title: 'Admissions at AMACEDU | Apply for B.Ed. & M.Ed. Programs',
    description: 'Apply for AMACEDU admissions for B.Ed. and M.Ed. programs. Learn about eligibility, the application process, and enrollment guidance.',
  },
  '/gallery': {
    title: 'AMACEDU Gallery | Campus Life, Events & Achievements',
    description: 'Browse AMACEDU gallery photos capturing campus life, events, classrooms, achievements, and memorable moments from college life.',
  },
  '/careers': {
    title: 'Careers at AMACEDU | Join Our Faculty & Staff Team',
    description: 'Explore career opportunities at AMACEDU College of Education. Apply online for teaching and administrative positions.',
  },
  '/contact': {
    title: 'Contact AMACEDU | College Address, Phone & Location Map',
    description: 'Get in touch with AMACEDU College of Education in Uthiramerur. View location map, contact numbers, email, and send inquiries.',
  },
};

function SeoMeta() {
  const location = useLocation();

  useEffect(() => {
    const currentMeta = pageMeta[location.pathname] || pageMeta['/'];

    document.title = currentMeta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute('content', currentMeta.description);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <SeoMeta />
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
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
