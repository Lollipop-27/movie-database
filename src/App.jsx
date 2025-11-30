import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import MyFavourites from './pages/MyFavourites';
import { APP_FOLDER_NAME } from './globals';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router basename={`/${APP_FOLDER_NAME}`}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favourites" element={<MyFavourites />} />
      </Routes>
    </Router>
  );
}

export default App;
