import React, { useContext, useEffect, useState } from "react";
import { FoxbelContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const { search } = useContext(FoxbelContext);
  const [stateMusic, setStateMusic] = useState(false);
  const [state, setState] = useState(50);

  useEffect(()=>{
    var x = document.getElementById("cancionSonando");
    if (stateMusic){
      return x.play()
    } else {
      x.pause()
    }
  },[stateMusic])

  useEffect(()=>{
    var track = document.getElementById("cancionSonando");
    track.volume = state /100
  },[state])


  return (
    <div class="fixed bottom-0 w-full bg-rose h-[100px]">
      <audio src={search.preview} id="cancionSonando">

      </audio>
      <div class="flex items-center justify-between">
        {search.id && (
          <div class="flex">
            <img class="w-[100px]" src={search.album.cover_medium} alt="" />
            <div>
              <h2 class="font-quicksand text-white">{search.title}</h2>
              <p class="font-quicksand text-white">
                <span>{search.artist.name}</span> -{" "}
                <span>{search.album.title}</span>
              </p>
            </div>
          </div>
        )}
        <div class="flex items-center">
          <div class="text-white hover:text-gray">
            <FontAwesomeIcon
              icon={faBackwardStep}
              class="w-[36px] h-[36px]  "
            />
          </div>
          <div
            class="bg-lightred w-[60px] h-[60px] rounded-full flex items-center justify-center text-white hover:text-gray"
            onClick={() => {
              setStateMusic(!stateMusic);
            }}
          >
            {!stateMusic ? (
              <FontAwesomeIcon icon={faPlay} class="w-[21px] h-[16px]  " />
            ) : (
              <FontAwesomeIcon icon={faPause} class="w-[21px] h-[16px]  " />
            )}
          </div>
          <div class="text-white  hover:text-gray">
            <FontAwesomeIcon icon={faForwardStep} class="w-[36px] h-[36px]  " />
          </div>
        </div>
        <div class="flex items-center">
          <input
            id="typeinp"
            type="range"
            min="0"
            max="100"
            value={state}
            onChange={(e) => {
              setState(e.target.value)
            }}
            step="1"
          />
          <div class="text-white  hover:text-gray">
            <FontAwesomeIcon icon={faVolumeOff} class="w-[36px] h-[36px]  " />
          </div>
        </div>
      </div>
    </div>
  );
}
