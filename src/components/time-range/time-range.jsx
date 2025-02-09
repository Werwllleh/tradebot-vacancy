import React from 'react';
import {TimeRangeValues} from "../../utils/data";
import TimeRangeButton from "./time-range-button";

const TimeRange = () => {

  return (
    <div className="time-range">
      <div className="time-range__body">
        <div className="time-range__title">Time Range:</div>
        <div className="time-range__values">
          {TimeRangeValues.length > 0 &&
            TimeRangeValues.map((item, index) => (
              <TimeRangeButton key={index} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TimeRange;
