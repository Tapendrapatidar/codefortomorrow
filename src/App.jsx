import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';

import HomePage from './pages/homePage/index';
import AboutPage from './pages/aboutPage/index';
import Feedback from './pages/feedbackForm/index';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path='/feedback' element={<Feedback/>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
