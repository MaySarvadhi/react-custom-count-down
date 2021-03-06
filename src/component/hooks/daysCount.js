import React, { useState } from "react";

export const useDaysCount =(timeTillDate, timeFormat) => {
  const timeDiffCalc = () => {
    const dateFuture = new Date(timeTillDate);
    const dateNow = new Date();
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;

    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;

    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;

    const seconds = Math.floor(diffInMilliSeconds) % 60;
    diffInMilliSeconds -= seconds * 60;

    return { days, hours, minutes, seconds };
  };
  const [counterData, setCounterData] = useState(timeDiffCalc());
  setTimeout(() => {
    setCounterData(timeDiffCalc());
  }, 1000);
  return [counterData];
};
