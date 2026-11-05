import { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <footer className="section">
        <p className="font-bold">
          {time.toLocaleDateString()} | {time.toLocaleTimeString()}
        </p>

        <h1 className="font-bold text-9xl">THE END.</h1>
      </footer>
    </>
  );
};

export default Footer;
