import React, { useContext, useEffect, useState } from "react";
import { FoxbelContext } from "../../App";
import axios from "axios";

export default function Card() {
  const { album, setAlbum, search } = useContext(FoxbelContext);

  const [albumObj, setAlbumObj] = useState({});

  useEffect(() => {
    getAlbum(album);
  }, [search]);

  function getAlbum(album) {
    const options = {
      method: "GET",
      url: `https://deezerdevs-deezer.p.rapidapi.com/album/${album}`,
      headers: {
        "X-RapidAPI-Key": "9afc103fb7msh3273c4fd7dcdff1p153192jsn0566c3dff09a",
        // "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setAlbum(response.data.id);
        setAlbumObj(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  
  return (
    <div class="flex h-[250px] font-quicksand mb-10">
      <div class="w-[250px] h-full bg-yellow-900">
        <img alt="imgsong" src={albumObj.cover_medium} />
      </div>
      <div
        class="flex flex-col justify-between w-[calc(100%-250px)] h-[250px] p-8"
        style={{
          // backgroundImage: `url(${albumObj.cover_xl})`,
          background: `linear-gradient(0deg, rgba(167, 0, 0, 0.2), rgba(167, 0, 0, 0.3)), url(${albumObj.cover_xl})`
        }}
      >
        <h1 class="text-white font-bold text-22px opacity font-quicksand">{albumObj.title}</h1>
        <p class="text-[18px] font-normal text-white font-quicksand">
          Lo mejor de  &nbsp;  &nbsp; 
          <span class="text-[14px] text-darkred font-normal font-quicksand">
            numero seguidores {albumObj.fans}
          </span>
        </p>
        <div class="flex">
          <button class="w-[120px] text-white bg-principalred hover:bg-transparent hover:outline-1 hover:ring-1 hover:ring-principalred  focus:bg-white focus:text-principalred font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Reproducir
          </button>
          <button class="w-[120px] text-white bg-transparent ring-1 ring-principalred hover:bg-principalred hover:outline-1 hover:ring-1 hover:ring-principalred  focus:bg-white focus:text-principalred font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
}
