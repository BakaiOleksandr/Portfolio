import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import ContactInfo from './pages/ContactInfo';
import Home from './pages/Home';
import MyNews from './pages/MyNews';
import MyProjects from './pages/MyProjects';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className='content'>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactInfo />} />
          <Route path="/news" element={<MyNews />} />
          <Route path="/projects" element={<MyProjects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
