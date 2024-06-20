import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import ViewFlights from './pages/ViewFlights';
import MyFlights from './pages/MyFlights';
import MyFlightDetails from './pages/MyFlightDetails';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import AddFlight from './pages/adminPages/AddFlight';
import FlightManage from './pages/adminPages/FlightManage';
import BookFlight from './pages/BookFlight';
import './App.css';
import AdminDashboard from './pages/adminPages/AdminDashboard';
import Feedback from './pages/adminPages/Feedback';
import Profile from './pages/adminPages/Profile'
import AuthContext from './authContext';
import AdminLogin from './pages/adminPages/AdminLogin';

function App() {
  const [viewFlightData, setViewFlightData] = useState([]);
  const [bookFlightData, setBookFlightData] = useState({});
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home setViewFlightData={setViewFlightData} />} />

        <Route path="/login" element={<Login />} />

        <Route path="/my_flights" element={<MyFlights />} />

        <Route path="/my_flights/:flightNo" element={<MyFlightDetails/>} />

        <Route path="/view_flights" element={<ViewFlights setViewFlightData={setViewFlightData} viewFlightData={viewFlightData} setBookFlightData={setBookFlightData}/>} />

        <Route path="/book_flight" element={<BookFlight bookFlightData={bookFlightData} />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/user_profile" element={{isAuthenticated} ? (<UserProfile />) : (<Navigate to="/home" />)} />

        <Route path="*" element={<Navigate to="/home" />} />

        <Route path="/admin_dashboard" element={{isAuthenticated} ? (<AdminDashboard />) : (<Navigate to="/home" />)} />

        <Route path="/add_flight" element={{isAuthenticated} ? (<AddFlight />) : (<Navigate to="/home" />)} />

        <Route path="/feedback" element={{isAuthenticated} ? (<Feedback />) : (<Navigate to="/home" />)} />

        <Route path="/flight_manage" element={{isAuthenticated} ? (<FlightManage />) : (<Navigate to="/home" />)} />

        <Route path="/profile" element={{isAuthenticated} ? (<Profile />) : (<Navigate to="/home" />)} />

        <Route path="/admin_login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
