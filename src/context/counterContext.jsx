import { useContext } from "react";
import { createContext, useState } from "react";

export function useCounterContext() {
  return useContext(CounterContext);
}

export const CounterContext = createContext([]);

export const CounterContextProvider = ({ children }) => {
  const [timeRun, setTimeRun] = useState(false);
  const [countClicks, setCountClicks] = useState(0);
  const [secs, setSecs] = useState(8);
  const [message, setMessage] = useState("PREPARADOS!");

  function counter() {
    setCountClicks(countClicks + 1);
  }

  function start() {
    setTimeRun(true);
    let sec = 8;
    let int = setInterval(() => {
      if (sec === 7)
        setMessage(() => {
          return "LISTOS";
        });
      if (sec === 6)
        setMessage(() => {
          return "YA!!";
        });
      if (sec >= 1) {
        sec = sec - 1;
        setSecs(sec);
      }
      if (sec === 0) {
        clearInterval(int);
        setTimeRun(false);
      }
    }, 1000);

    defaultValues();
  }

  function defaultValues() {
    setCountClicks(0);
    setSecs(8);
    setMessage(() => {
      return "PREPARADOS!";
    });
  }

  return (
    <CounterContext.Provider
      value={{ timeRun, countClicks, secs, start, counter, message }}
    >
      {children}
    </CounterContext.Provider>
  );
};
