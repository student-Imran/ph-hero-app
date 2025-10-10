import { createContext, useState } from "react";

export const InstalledContext = createContext();

export const InstalledProvider = ({ children }) => {
  const [installed, setInstalled] = useState(false);

  

  return (
    <InstalledContext.Provider
      value={{ installed, setInstalled }}
    >
      {children}
    </InstalledContext.Provider>
  );
};
