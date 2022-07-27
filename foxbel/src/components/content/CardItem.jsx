import React, { useContext, useEffect, useState } from "react";
import { FoxbelContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function CardItem() {
  const { recientes, radios, screenActive, artists, albums, tracks } = useContext(FoxbelContext);
  console.log(radios);
  const actualArray = [];
  // const objectToShow = {
  //   id:0,
  //   name:"",
  //   img:"",
  //   artist:""
  // }

  if (screenActive === "Recientes") {
    actualArray.shift();
    if (recientes.length > 0) {
      actualArray.shift();
      for (let i = 0; i < recientes.length; i++) {
        const objectToShow = {
          id: recientes[i].id,
          name: recientes[i].title,
          img: recientes[i].album.cover_medium,
          artist: recientes[i].artist.name,
        };
        actualArray.push(objectToShow);
      }
    }
  } else if (screenActive === "Artists") {
    actualArray.shift();
    if (artists.length > 0) {
      console.log(artists);
      for (let i = 0; i < artists.length; i++) {
        const objectToShow = {
          id: artists[i].id,
          name: artists[i].name,
          img: artists[i].picture_medium,
          artist: "",
        };
        actualArray.push(objectToShow);
      }
    }
  } else if (screenActive == "Albums") {
    actualArray.shift();
    if (albums.length > 0) {
      console.log(albums);
      for (let i = 0; i < albums.length; i++) {
        const objectToShow = {
          id: albums[i].id,
          name: albums[i].name,
          img: albums[i].picture_medium,
          artist: "",
        };
        actualArray.push(objectToShow);
      }
    }
  } else if (screenActive == "Canciones") {
    console.log(tracks);
    for (let i = 0; i < albums.length; i++) {
      const objectToShow = {
        id: tracks[i].id,
        name: tracks[i].name,
        img: tracks[i].picture_medium,
        artist: "",
      };
      actualArray.push(objectToShow);
    }
  } else if (screenActive === "Estaciones") {
    actualArray.shift();
    if (radios.length > 0) {
      console.log(radios);
      for (let i = 0; i < radios.length; i++) {
        const objectToShow = {
          id: radios[i].id,
          name: radios[i].title,
          img: radios[i].picture_medium,
          artist: "",
        };
        actualArray.push(objectToShow);
      }
    }
  }

  return (
    <div class="flex flex-wrap w-full">
      {actualArray.map((item, i) => {
        return (
          <div key={i} class="w-[160px] font-quicksand mr-8 mb-8">
            <div class="relative">
              <div class="absolute top-1 right-1 w-2 z-2">
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  class="text-white hover:text-principalred cursor-pointer"
                />
              </div>
              <img alt="imgsong" src={item.img} />
            </div>
            <h3 class="text-graydark font-[14px] font-bold">{item.name}</h3>
            <p class="text-gray font-[12px] font-normal">{item.artist}</p>
          </div>
        );
      })}
    </div>
  );
}
