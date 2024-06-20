import Layout from './Layout';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../CSS/Feedback.css"; // Import the feedback-specific CSS
import Loading from '../../components/Loading';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    date: ''
  });
  const [sortConfig, setSortConfig] = useState({
    key: 'date',
    direction: 'descending'
  });

  async function fetch_data() {
    try {
      const response = await fetch('http://localhost:8080/api/feedback/getAllFeedback', { // Update the URL
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      const data = await response.json();

      if (response.ok) {
        setFeedbacks(data.feedbacks);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } else {
        console.log(data);
        toast.error(data.message || "Error Occurred");
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error, please try again later");
    }
  }

  useEffect(() => {
    fetch_data();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedFeedbacks = feedbacks.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredFeedbacks = sortedFeedbacks.filter(feedback => {
    const filterDate = filters.date ? new Date(filters.date) : null;
    const feedbackDate = feedback.date ? new Date(feedback.date) : null;
    return (
      (!filters.date || (filterDate && feedbackDate && filterDate.toDateString() === feedbackDate.toDateString()))
    );
  });

  return (
    <>
      <div className={isLoading ? 'loading' : 'loaded'}>
        <Loading isLoading={isLoading} />
        <div className="content_">
          <Layout>
            <div className="box-feedback">
              <h2>Feedback</h2>
              <div className="filter-section-feedback">
                <label htmlFor="date-filter">Filter by Date:</label>
                <input
                  type="date"
                  id="date-filter"
                  name="date"
                  value={filters.date}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="sort-section-feedback">
                
                <button onClick={() => handleSort('date')}>
                  Sort by Date {sortConfig.key === 'date' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                </button>
                <button onClick={() => handleSort('user')}>
                  Sort by User {sortConfig.key === 'user' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                </button>
              </div>
              <div className="feedback-list">
                {filteredFeedbacks.map(feedback => (
                  <div key={feedback._id} className="feedback-item">
                    <p className="user-feedback">{feedback.user}</p>
                    <p className="comment-feedback">"{feedback.subject}"</p>
                    <p className="date-feedback">{new Date(feedback.date).toLocaleDateString()}</p>
                    <p className="message-feedback">{feedback.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default Feedback;
