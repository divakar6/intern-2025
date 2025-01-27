import { useEffect, useState } from "react";

const useLocalStorage = (key, val) => {
  var [text, setText] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return val;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(text));
    return(
        localStorage.setItem(key, JSON.stringify(""))
    )
  }, [key, text]);
  
  return [text, setText];
};
export default useLocalStorage;