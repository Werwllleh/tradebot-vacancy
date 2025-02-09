import React from 'react';
import cn from "classnames";
import {useValuesStore} from "../../store/values-store";

const TimeRangeButton = ({data}) => {

  console.log(data)

  const currentPeriod = useValuesStore((state) => state.period);
  const updatePeriod = useValuesStore((state) => state.updatePeriod);

  const handleClick = (value) => {
    const period = value
    updatePeriod(period)
  };

  return (
    <button
      onClick={() => handleClick(data.value)}
      className={cn('time-range__button', {
        active: data.value === currentPeriod,
      })}
    >
      <span>{data.text}</span>
    </button>
  );
};

export default TimeRangeButton;
