import React, { useContext, useEffect, useState } from "react";
import Sidenav from "./components/sidenav/Sidenav";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

export const FoxbelContext = React.createContext();

export default function App() {
  const [word, setWord] = useState("");
  const [search, setSearch] = useState({
    id: 1440101992,
    title: "Miami",
    preview:
      "https://cdns-preview-3.dzcdn.net/stream/c-3913dacd6650eecfcba22253effbaa3d-3.mp3",
    artist: {
      id: 15691,
      name: "Nicky Jam",
    },
    album: {
      id: 245999462,
      title: "Miami",
      fans: 674,
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/dfbb8f0d93d815d1106f93ebbd5108e3/250x250-000000-80-0-0.jpg",
      artist: {
        id: 15691,
        name: "Nicky Jam",
      },
    },
  });
  const [searchArray, setSearchArray] = useState([]);
  const [screenActive, setScreenActive] = useState("Recientes");
  const [recientes, setRecientes] = useState([]);
  const [radios, setRadios] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [album, setAlbum] = useState(245999462);

  return (
    <FoxbelContext.Provider
      value={{
        word,
        setWord,
        search,
        setSearch,
        searchArray,
        setSearchArray,
        screenActive,
        setScreenActive,
        recientes,
        setRecientes,
        radios,
        setRadios,
        artists,
        setArtists,
        albums,
        setAlbums,
        tracks,
        setTracks,
        album,
        setAlbum,
      }}
    >
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
