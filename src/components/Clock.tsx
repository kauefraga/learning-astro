import React, { useState, useEffect } from 'react'

export const Clock = () => {
  const now = new Date();

  const [dateTime, setDateTime] = useState({
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="font-bold text-6xl text-purple-600">
      {dateTime.hours} : {dateTime.minutes} : {dateTime.seconds}
    </p>
  )
}
