import React from 'react';
import TimeRange from "../components/time-range";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard__body">
          <div className="dashboard__timerange">
            <TimeRange />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
