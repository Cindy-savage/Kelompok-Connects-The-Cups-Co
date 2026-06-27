import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import QueueBoard from './pages/QueueBoard';
import QueueTicket from './pages/QueueTicket';
import TablePicker from './pages/TablePicker';
import Reservation from './pages/Reservation';
import Success from './pages/Success';
import History from './pages/History';
import ComingSoon from './pages/ComingSoon';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AppContent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/antrian" element={<QueueBoard />} />
        <Route path="/struk" element={<QueueTicket />} />
        <Route path="/pilih-meja" element={<TablePicker />} />
        <Route path="/reservasi" element={<Reservation />} />
        <Route path="/finish" element={<Success />} />
        <Route path="/riwayat" element={<History />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
