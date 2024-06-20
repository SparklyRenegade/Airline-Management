// frontend/src/components/AddFlight.jsx
import React, { useState } from 'react';
import Layout from './Layout';
import "../../CSS/Addflight.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const AddFlight = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false)
  }, 1500);
  const [flightDetails, setFlightDetails] = useState({
    flightNo: '',
    to: '',
    from: '',
    category: '',
    totalSeats: '',
    date: '',
    departureTime: '',
    arrivalTime: '',
    airline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/admin/addflight', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(flightDetails)
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Successfully Added Flight");
        navigate('/admin_dashboard');
      } else {
        toast.error(data.message || "Authentication failed");
      }
    } catch (error) {
      toast.error("Network error, please try again later");
      console.error("Network error:", error);
    }
  };

  return (
    <div className={isLoading ? 'loading' : 'loaded'}>
      <Loading isLoading={isLoading} />
      <div className="content_">
        <Layout>
          <div className="add-flight-box">
            <h2>Add Flight</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group-addflight">
                <label>From:</label>
                <input type="text" name="from" value={flightDetails.from} onChange={handleChange} required />
              </div>
              <div className="form-group-addflight">
                <label>To:</label>
                <input type="text" name="to" value={flightDetails.to} onChange={handleChange} required />
              </div>
              <div className="form-group-addflight">
                <label>Airline:</label>
                <input type="text" name="airline" value={flightDetails.airline} onChange={handleChange} required />
              </div>
              <div className="form-group-addflight">
                <label>Flight No.:</label>
                <input type="text" name="flightNo" value={flightDetails.flightNo} onChange={handleChange} required />
              </div>
              <div className="form-group-addflight">
                <label>Category:</label>
                <select name="category" onChange={handleChange} value={flightDetails.category} required>
                  <option value="">Select Category</option>
                  <option value="Economy Class">Economy Class</option>
                  <option value="Business Class">Business Class</option>
                  <option value="First">First Class</option>
                </select>
              </div>
              
              <div className="form-group-addflight">
                <label>Total Seats:</label>
                <input type="number" name="totalSeats" value={flightDetails.totalSeats} onChange={handleChange} required />
              </div>
              <div className="form-group-addflight">
                <label>Date:</label>
                <input type="date" name="date" value={flightDetails.date} onChange={handleChange} required />
              </div>
              <div className="form-group-addflight">
                <label>Departure Time:</label>
                <input type="time" name="departureTime" value={flightDetails.departureTime} onChange={handleChange} required />
              </div>
              <div className="form-group-addflight">
                <label>Arrival Time:</label>
                <input type="time" name="arrivalTime" value={flightDetails.arrivalTime} onChange={handleChange} required />
              </div>
              
              <button type="submit" className="addflight-btn">Submit</button>
            </form>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default AddFlight;
