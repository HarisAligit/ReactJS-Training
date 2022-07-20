import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div>
      <Alert variant="info">
    {date.toLocaleTimeString()}
  </Alert></div>
  );
}
export default Clock;