import React, { useContext, useState } from "react";
import Sidenav from "./components/sidenav/Sidenav";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import { FoxbelProvider } from "./context/foxbelProvider";

export const FoxbelContext = React.createContext();

export default function App() {
  const [word, setWord] = useState("");
  const [ music, setMusic ] = useState({})
  const [searchArray, setSearchArray] = useState([]);

  return (
    <FoxbelContext.Provider value={{ word, setWord, music, setMusic, searchArray, setSearchArray }}>
      <div>
        <div class="w-100 h-100 flex">
          <Sidenav />
          <Content />
        </div>
        <Footer />
      </div>
    </FoxbelContext.Provider>
  );
}
