import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import OurBooks from './pages/our_books.js';
import NavBar from './header-and-footer/navbar';

function App() {
  return (
    <>
      <Router>
          <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/our_books' element={<OurBooks />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
