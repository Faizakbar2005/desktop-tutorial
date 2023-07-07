import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import background from './assets/putih.jpg'
import Home from './pages/Home';
import Reservasi from './pages/Reservasi';
import Fauna from './pages/Fauna';
import Informasi from './pages/Informasi';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen"
      style={{ 
        background: `url(${background})` ,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        }}
          >
        <header className="bg-green-500 py-4">
          <nav className="navbar mx-auto px-4 flex justify-between items-center">
            <h1 className="text-white text-3xl">Kebun Binatang Ragunan</h1>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/Reservasi" className="text-white hover:underline">Reservasi</Link>
              </li>
              <li>
                <Link to="/Fauna" className="text-white hover:underline">Fauna</Link>
              </li>
              <li>
                <Link to="/Informasi" className="text-white hover:underline">Informasi</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="navbar mx-auto mt-4 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Reservasi" element={<Reservasi />} />
            <Route path="/Fauna" element={<Fauna />} />
            <Route path="/Informasi" element={<Informasi />} />
          </Routes>
        </main>
        <footer className="bg-green-500 py-2 text-center text-white">
          © 2023 Kebun Binatang Ragunan
        </footer>
      </div>
    </Router>
  );
}

export default App;
