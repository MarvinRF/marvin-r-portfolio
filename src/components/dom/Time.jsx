import { useEffect, useState } from 'react';

function Time() {
  const formatTime = () => new Intl.DateTimeFormat('pt-BR', { hour12: false, hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' }).format(new Date());
  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{time}</span>;
}

export default Time;
