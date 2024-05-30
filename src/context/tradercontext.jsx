import { createContext, useContext } from "react";
const Demo = createContext();
const TraderProvider = ({ children }) => {
  const sum = (a, b) => {
    return a + b;
  };
  return <Demo.Provider value={{ sum }}>{children}</Demo.Provider>;
};

const useDemoContext = () => {
  return useContext(Demo);
};

export { TraderProvider, useDemoContext };
