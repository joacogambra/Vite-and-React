import { useState, useEffect } from "react";
import "./style.scss";
import { Clock } from "./Components/Clock";
import Social from "./Components/Social";

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    // let countDownDate = new Date('March 8, 2023 18:00:00').getTime()
    let countDownDate = new Date("March 8, 2023 18:00:00 GMT-0300").getTime(); // GMT-0300 Buenos Aires, Arg

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop timer
        clearInterval(interval.current);
      } else {
        // Update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <div class="background-image"></div>
      <img src="./logoJft.png" alt="Premios Cleopatra by La Jefatura" className="logo" />
      <div className="container">
        <h1>Premios Cleopatra <span className="year">2023</span></h1>
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
        <h4>A las creadoras de contenido de Twitch, TikTok y YouTube de la Argentina</h4>     
        <Social/>
      </div>
      
    </div>
  );
}

export default App;
