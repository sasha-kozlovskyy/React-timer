import React, { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';
import { buffer, filter, debounceTime } from 'rxjs/operators';
import { Button } from './components/Button/Button';
import { tick$, ClockDispley } from './components/Clock/Clock';
import './App.css';

const App = () => {
  const [state, setState] = useState(false);
  const [time, setTime] = useState(0);

  const handleClickOnStart = () => {
    setState(true);
  };

  const handleClickOnStop = () => {
    setState(false);
    setTime(0);
  };

  const handleClickOnReset = () => {
    setState(true);
    setTime(0);
  };

  useEffect(() => {
    const btn = document.getElementById('wait');
    const clicks$ = fromEvent(btn, 'click');

    clicks$
      .pipe(
        buffer(clicks$.pipe(debounceTime(300))),
        filter(clickArray => clickArray.length > 1),
      )
      .subscribe(() => setState(false));

    const subscription = tick$
      .subscribe({
        next: () => {
          if (state === true) {
            setTime(currentTime => currentTime + 1);
          }
        },
      });

    return () => {
      subscription
        .unsubscribe();
    };
  }, [state]);

  return (
    <div className="timer">
      <h1>
        Timer
      </h1>
      <ClockDispley time={time} />
      <Button
        handleClickOnStart={handleClickOnStart}
        handleClickOnStop={handleClickOnStop}
        handleClickOnReset={handleClickOnReset}
        state={state}
      />
    </div>
  );
};

export default App;
