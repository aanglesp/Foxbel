import React, { useState } from "react";
import FoxbelContext from "./foxbelContext";

export const FoxbelProvider = () => {
  const [word, setWord] = useState("hola");

  return (
    <FoxbelContext.Provider value={{word}}></FoxbelContext.Provider>
  );
};
