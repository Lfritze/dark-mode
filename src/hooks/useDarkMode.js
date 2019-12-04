import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

// Any direct DOM manipulation is considered a side effect, right? So let's use the effect hook. -Import and set up your effect hook.

export const useDarkMode = (key, initVal) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initVal);

  useEffect(() => {
    if (darkMode === true) {
      return document.querySelector("body").classList.add("dark-mode");
    } else {
      return document.querySelector("body").classList.remove("dark-mode");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};
