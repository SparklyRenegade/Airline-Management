import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import "../../CSS/FlightManagement.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const FlightManage = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingFlight, setEditingFlight] = useState(null);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterAirline, setFilterAirline] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [sortKey, setSortKey] = useState("");
  const navigate = useNavigate();

  const fetchFlights = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/admin/getallflights", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setFlights(data.flights);
        setIsLoading(false);
      } else {
        toast.error(data.message || "Failed to fetch flights");
      }
    } catch (error) {
      toast.error("Network error, please try again later");
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this flight?")) return;
    try {
      const response = await fetch(`http://localhost:8080/api/admin/deleteflight/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Flight deleted successfully");
        setFlights(data.flights);
      } else {
        toast.error(data.message || "Failed to delete flight");
      }
    } catch (error) {
      toast.error("Network error, please try again later");
      console.error("Network error:", error);
    }
  };

  const handleEdit = (flight) => {
    setEditingFlight(flight);
  };

  const handleCancelEdit = () => {
    setEditingFlight(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/admin/updateFlight/${editingFlight._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(editingFlight),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Flight updated successfully");
        fetchFlights();
        setEditingFlight(null);
      } else {
        toast.error(data.message || "Failed to update flight");
      }
    } catch (error) {
      toast.error("Network error, please try again later");
      console.error("Network error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingFlight((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") setFilterCategory(value);
    if (name === "airline") setFilterAirline(value);
    if (name === "date") setFilterDate(value);
  };

  const handleSortChange = (e) => {
    setSortKey(e.target.value);
  };

  const filteredFlights = flights.filter(flight =>
    (filterCategory ? flight.category === filterCategory : true) &&
    (filterAirline ? flight.airline.toLowerCase().includes(filterAirline.toLowerCase()) : true) &&
    (filterDate ? flight.date.split('T')[0] === filterDate : true)
  );

  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortKey === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortKey === "airline") {
      return a.airline.localeCompare(b.airline);
    } else if (sortKey === "flightNo") {
      return a.flightNo.localeCompare(b.flightNo);
    } else if (sortKey === "seats") {
      return a.totalSeats - b.totalSeats;
    }
    return 0;
  });

  return (
    <div className={isLoading ? 'loading' : 'loaded'}>
      <Loading isLoading={isLoading} />
      <div className="content_">
        <Layout>
          <div className="box-FM">
            <h2>Manage Flights</h2>
            <div className="filter-section">
              <div>
                <label htmlFor="filterCategory">Filter by Category:</label>
                <select id="filterCategory" name="category" value={filterCategory} onChange={handleFilterChange}>
                  <option value="">All</option>
                  <option value="Economy">Economy Class</option>
                  <option value="Business">Business Class</option>
                  <option value="First">First Class</option>
                </select>
              </div>
              <div>
                <label htmlFor="filterAirline">Filter by Airline:</label>
                <input 
                  type="text" 
                  id="filterAirline" 
                  name="airline" 
                  value={filterAirline} 
                  onChange={handleFilterChange} 
                  placeholder="Enter airline"
                />
              </div>
              <div>
                <label htmlFor="filterDate">Filter by Date:</label>
                <input 
                  type="date" 
                  id="filterDate" 
                  name="date" 
                  value={filterDate} 
                  onChange={handleFilterChange}
                />
              </div>
              <div className="sort-section">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortKey} onChange={handleSortChange}>
                  <option value="">None</option>
                  <option value="date">Date</option>
                  <option value="airline">Airline</option>
                  <option value="flightNo">Flight No.</option>
                  <option value="seats">Seats</option>
                </select>
              </div>
            </div>
            {editingFlight ? (
              <div className="modal-FM">
                <div className="modal-content-FM">
                  <form onSubmit={handleUpdate} className="edit-flight-form">
                    <h3>Edit Flight</h3>
                    <div className="form-group">
                      <label>From:</label>
                      <input type="text" name="from" value={editingFlight.from} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>To:</label>
                      <input type="text" name="to" value={editingFlight.to} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Airline:</label>
                      <input type="text" name="airline" value={editingFlight.airline} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Flight No.:</label>
                      <input type="text" name="flightNo" value={editingFlight.flightNo} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Category:</label>
                      <select name="category" onChange={handleChange} value={editingFlight.category} required>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Total Seats:</label>
                      <input type="number" name="totalSeats" value={editingFlight.totalSeats} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Date:</label>
                      <input type="date" name="date" value={editingFlight.date.split('T')[0]} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Departure Time:</label>
                      <input type="time" name="departureTime" value={editingFlight.departureTime} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Arrival Time:</label>
                      <input type="time" name="arrivalTime" value={editingFlight.arrivalTime} onChange={handleChange} required />
                    </div>
                   
                    <button type="submit" className="save-btn">Update</button>
                    <button type="button" className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
                  </form>
                </div>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Airline</th>
                    <th>Flight No.</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Category</th>
                    <th>Total Seats</th>
                    <th>Date</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                   
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedFlights.map((flight) => (
                    <tr key={flight._id}>
                      <td>{flight.airline}</td>
                      <td>{flight.flightNo}</td>
                      <td>{flight.from}</td>
                      <td>{flight.to}</td>
                      <td>{flight.category}</td>
                      <td>{flight.totalSeats}</td>
                      <td>{flight.date.split('T')[0]}</td>
                      <td>{flight.departureTime}</td>
                      <td>{flight.arrivalTime}</td>
                     
                      <td>
                        <button onClick={() => handleEdit(flight)} className="edit-btn">Edit</button>
                        <button onClick={() => handleDelete(flight._id)} className="delete-btn">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default FlightManage;
