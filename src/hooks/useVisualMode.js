import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) { 
    if (replace) {
      setMode(mode)
      history[history.length - 1] = mode;
    } else {
      setMode(mode);
      setHistory(prev => ([...prev, mode]))
    }
  }
  function back() { 
    if (history.length > 1) {
      console.log("before pop", history);
      history.pop();
      console.log("after pop", history);

      setMode(history[history.length - 1])
    }
  }

  return { mode, transition, back };
}
