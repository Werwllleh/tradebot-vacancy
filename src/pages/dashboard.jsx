import React from 'react';
import TimeRange from "../components/time-range/time-range";
import Monitor from "../components/monitor";
import BotsList from "../components/bots/bots-list";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__body">
        <div className="dashboard__monitor">
          <div className="container"><Monitor/></div>
        </div>
        <div className="dashboard__bots">
          <div className="container"><BotsList/></div>
        </div>
        <div className="dashboard__timerange">
          <div className="container"><TimeRange/></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
