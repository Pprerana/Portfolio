import React from 'react';
import { BrowserRouter as  Router,  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/blogs" element={<Blog/>}/>
          
        </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
