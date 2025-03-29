import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="countdown-block">
        <div className="countdown-number">{minutes.toString().padStart(2, '0')}</div>
        <div className="countdown-label">minutos</div>
      </div>
      <div className="text-white text-4xl">:</div>
      <div className="countdown-block">
        <div className="countdown-number">{seconds.toString().padStart(2, '0')}</div>
        <div className="countdown-label">segundos</div>
      </div>
    </div>
  );
};

export default Timer;