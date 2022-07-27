import React, { useContext } from "react";
import { FoxbelContext } from "../../App";
import LogoFoxbel from "../../assets/foxbel-music.png";
import axios from "axios";

export default function Sidenav() {
  const { setScreenActive, setRadios, setArtists, setAlbums, setTracks } = useContext(FoxbelContext);

  function getRadios() {
    const options = {
      method: "GET",
      url: `https://deezerdevs-deezer.p.rapidapi.com/radio/top`,
      headers: {
        "X-RapidAPI-Key": "9afc103fb7msh3273c4fd7dcdff1p153192jsn0566c3dff09a",
        // "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setRadios(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  function getArtists() {
    const options = {
      method: "GET",
      url: `https://api.deezer.com/chart/0/artists`,
      headers: {
        "X-RapidAPI-Key": "9afc103fb7msh3273c4fd7dcdff1p153192jsn0566c3dff09a",
        // "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setArtists(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  function getAlbums() {
    const options = {
      method: "GET",
      url: `https://api.deezer.com/chart/0/albums`,
      headers: {
        "X-RapidAPI-Key": "9afc103fb7msh3273c4fd7dcdff1p153192jsn0566c3dff09a",
        // "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setAlbums(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function getAlbums() {
    const options = {
      method: "GET",
      url: `https://api.deezer.com/chart/0/tracks`,
      headers: {
        "X-RapidAPI-Key": "9afc103fb7msh3273c4fd7dcdff1p153192jsn0566c3dff09a",
        // "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setArtists(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <aside
      class="flex-col w-[25%] bg-darkred min-h-screen pl-10 pt-10"
      aria-label="Sidebar"
    >
      <div class="flex justify-content-center w-full pb-5">
        <img src={LogoFoxbel} alt="logo" class="w-[80%]" />
      </div>
      <div class="space-y-4">
        <h2 class="font-quicksand font-bold text-white text-22px">
          Mi libreria
        </h2>
        <ul class="space-y-2">
          <li>
            <button
              class="text-base font-quicksand font-normal text-white hover:text-principalred focus:text-principalred"
              id="Recientes"
              onClick={(e) => {
                setScreenActive(e.target.id);
              }}
            >
              Recientes
            </button>
          </li>
          <li>
            <button
              class="text-base font-quicksand font-normal text-white hover:text-principalred focus:text-principalred"
              id="Artists"
              onClick={(e) => {
                setScreenActive(e.target.id);
                getArtists();
              }}
            >
              Artists
            </button>
          </li>
          <li>
            <button
              class="text-base font-quicksand font-normal text-white hover:text-principalred focus:text-principalred"
              id="Albums"
              onClick={(e) => {
                setScreenActive(e.target.id);
                getAlbums()
              }}
            >
              Álbums
            </button>
          </li>
          <li>
            <button
              class="text-base font-quicksand font-normal text-white hover:text-principalred focus:text-principalred"
              id="Canciones"
              onClick={(e) => {
                setScreenActive(e.target.id);
              }}
            >
              Canciones
            </button>
          </li>
          <li>
            <button
              class="text-base font-quicksand font-normal text-white hover:text-principalred focus:text-principalred"
              id="Estaciones"
              onClick={(e) => {
                setScreenActive(e.target.id);
                getRadios();
              }}
            >
              Estaciones
            </button>
          </li>
        </ul>
        <h2 class="font-quicksand font-bold text-white text-22px">Playlist</h2>
        <ul class="space-y-2">
          <li></li>
        </ul>
      </div>
    </aside>
  );
}
