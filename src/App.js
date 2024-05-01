
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/Home';
import ServicesPage from './components/services/Services';
import ContactsPage from './components/contact/Contacts';
import Footer from './components/footer/Footer';

import './App.css';

function App() {

  return (
    <Router>
      
      <div className="App">
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Manrique" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contactos" element={<ContactsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

