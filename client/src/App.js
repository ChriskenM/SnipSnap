import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componets/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import SignUp from './componets/SignUp';
import SignIn from './componets/SignIn';
import BookingsList from './componets/BookingsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="bookings" element={<BookingsList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;