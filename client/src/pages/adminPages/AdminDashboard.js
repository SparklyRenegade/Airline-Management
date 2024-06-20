import React, { useState } from "react";
import Layout from "./Layout";
import Loading from "../../components/Loading";
import "../../CSS/admindash.css";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <div className={isLoading ? "loading" : "loaded"}>
      <Loading isLoading={isLoading} />
      <div className="content_">
        <Layout>
          <div className="container_dash">
            <div className="box-dash">
              <h2>Total Available Flights</h2>
              <h5>10</h5>
            </div>
            <div className="box-dash">
              <h2>Total Available Flights</h2>
              <h5>10</h5>
            </div>
            <div className="box-dash">
              <h2>Total Available Flights</h2>
              <h5>10</h5>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default AdminDashboard;
