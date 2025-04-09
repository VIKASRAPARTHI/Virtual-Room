"use client"

// components/CurrentTime.tsx
import React, { useEffect, useState } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();

      // Get time in IST with capitalized AM/PM
      const time = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).replace('am', 'AM').replace('pm', 'PM'); // Capitalize AM/PM

      // Get full date in desired format: Day, Month Day, Year
      const date = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      }).format(now);

      setCurrentTime(time);
      setCurrentDate(date);
    };

    updateTimeAndDate(); // Initial call
    const intervalId = setInterval(updateTimeAndDate, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="time-date flex flex-col gap-2 md:p-8 lg:p-0"> {/* Adding gap between time and date */}
      <h1 className="text-4xl font-extrabold lg:text-7xl">{currentTime}</h1>
      <p className="text-lg font-medium text-sky-1 lg:text-2xl">{currentDate}</p>
    </div>
  );
};

export default CurrentTime;
