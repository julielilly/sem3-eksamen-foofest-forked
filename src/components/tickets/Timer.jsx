import { useEffect } from "react";
import { useTicketStore } from "@/stores/TicketState";

const Timer = ({ formSubmitted }) => {
  const { timer, setStep, updateTimer, setTimer } = useTicketStore();

  // Format time for countdown display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer(timer); // Use the current timer value to update it

      // stop timer when form is submitted succesfully
      if (formSubmitted) {
        clearInterval(interval);
        setTimer(0);
        return;
      }

      // reset form when timer reaches 0
      if (timer <= 0) {
        clearInterval(interval);
        alert("Time is up! Reservation expired.");
        setTimer(0);
        window.location.reload(); // Reload the page to reset everything
      }
    }, 1000);

    // Cleanup interval on component unmount or when timer reaches 0
    return () => clearInterval(interval);
  }, [timer, setStep, updateTimer]); // Add updateTimer to the dependency array

  return <div>{formatTime(timer)}</div>;
};

export default Timer;
