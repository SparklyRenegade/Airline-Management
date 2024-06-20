import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Layout.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../authContext";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleChange(route) {
    navigate(`/${route}`);
  }
  
  function handleSignOut() {
    logout();
    navigate("/home");
  }

  return (
    <div className="mainContainer-layout">
      <div className="header-layout">
        <Link to="/add_flight" className="btn-layout">
          Add Flights
        </Link>
        <Link to="/admin_dashboard" className="btn-layout">
          Admin
        </Link>
      </div>

      <div className="menu-layout">
        <ul>
          <li onClick={() => handleChange("admin_dashboard")}>
            <button>
              <span className="fa-icon">📊</span> Dashboard
            </button>
          </li>

          <li onClick={() => handleChange("flight_manage")}>
            <button>
              <span className="fa-icon">✈️</span> Manage Flights
            </button>
          </li>

          <li onClick={() => handleChange("feedback")}>
            <button>
              <span className="fa-icon">💬</span> Feedback
            </button>
          </li>

          <li onClick={() => handleChange("profile")}>
            <button>
              <span className="fa-icon">👤</span> Profile
            </button>
          </li>

          <li onClick={handleSignOut}>
            <button>
              <span className="fa-icon">🚪</span> Sign Out
            </button>
          </li>
        </ul>
      </div>

      <div className="content-layout">
        <div className="data-layout">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
