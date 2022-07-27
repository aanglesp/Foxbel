import React from "react";
import LogoFoxbel from "../../assets/foxbel-music.png";

export default function sidenav() {
  return (
    <aside
      class="flex-col w-[20%] bg-darkred min-h-screen pl-10 pt-10"
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
            <button class="text-base font-quicksand font-normal text-white hover:text-principalred focus:text-principalred">
              Recientes
            </button>
          </li>
          <li>
            <button class="text-base font-quicksand font-normal text-white hover:text-principalred focus:text-principalred">
              Álbums
            </button>
          </li>
          <li>
            <button class="text-base font-quicksand font-normal text-white hover:text-principalred focus:text-principalred">
              Canciones
            </button>
          </li>
          <li>
            <button class="text-base font-quicksand font-normal text-white hover:text-principalred focus:text-principalred">
              Estaciones
            </button>
          </li>
        </ul>
        <h2 class="font-quicksand font-bold text-white text-22px">
          Playlist
        </h2>
        <ul class="space-y-2">
          <li>
          </li>
        </ul>
      </div>
    </aside>
  );
}
