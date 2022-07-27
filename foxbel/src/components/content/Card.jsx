import React from "react";

export default function Card() {
  return (
    <div class="flex h-[250px] bg-black font-quicksand">
      <div class="w-[250px] h-full bg-yellow-900">
        <img alt="imgsong" />
      </div>
      <div class=" flex-col justify-between bg-blue-900 w-[calc(100%-250px)] p-8">
        <h1 class="text-white font-bold text-22px">aaaaaa</h1>
        <p class="text-[14px] font-normal text-white"> Lo mejor de 
        <span class="text-[10px] text-darkred font-normal">numero seguidores</span>
        </p>
        <p class="text-white font-normal font-[12px]">lorem Ipsum</p>
        <div class="flex">
          <button class="w-[120px] text-white bg-principalred hover:bg-transparent hover:outline-1 hover:ring-1 hover:ring-principalred  focus:bg-white focus:text-principalred font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Reproducir</button>
          <button class="w-[120px] text-white bg-transparent ring-1 ring-principalred hover:bg-principalred hover:outline-1 hover:ring-1 hover:ring-principalred  focus:bg-white focus:text-principalred font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Seguir</button>
        </div>
      </div>
    </div>
  );
}
