import { useEffect, useState } from "react";

export default function Countdown() {

  const wedding = new Date("2026-08-22T12:00:00");

  const [time, setTime] = useState({});

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date();

      const diff = wedding - now;

      const day = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hour = Math.floor(diff / (1000 * 60 * 60)) % 24;

      const minute = Math.floor(diff / (1000 * 60)) % 60;

      const second = Math.floor(diff / 1000) % 60;

      setTime({
        day,
        hour,
        minute,
        second,
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="countdown">

      <p className="section-eng">
        WEDDING DAY
      </p>

      <h2 className="section-title">
        D-DAY
      </h2>

      <div className="count-grid">

        <div>
          <strong>{time.day}</strong>
          <span>DAYS</span>
        </div>

        <div>
          <strong>{time.hour}</strong>
          <span>HOURS</span>
        </div>

        <div>
          <strong>{time.minute}</strong>
          <span>MIN</span>
        </div>

        <div>
          <strong>{time.second}</strong>
          <span>SEC</span>
        </div>

      </div>

    </section>

  );

}