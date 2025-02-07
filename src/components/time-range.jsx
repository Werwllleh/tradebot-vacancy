import React, {useState} from 'react';
import {TimeRangeValues} from "../utils/data";
import cn from "classnames";

const TimeRange = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <div className="time-range">
      <div className="time-range__body">
        <div className="time-range__title">Time Range:</div>
        <div className="time-range__values">
          {TimeRangeValues.length > 0 &&
            TimeRangeValues.map((item, index) => (
              <button
                onClick={() => handleClick(index)}
                key={index}
                className={cn('time-range__button', {
                  active: activeButtonIndex === index,
                })}
              >
                <span>{item.text}</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TimeRange;
