import React from "react";

export default function SearchProfile() {
  return (
    <div class="flex items-center justify-between w-full bg-blue pb-10">
      <div class="relative">
        <input
          type="search"
          id="default-search"
          class="block p-4 w-[500px] h-[36px] text-softgray bg-white rounded-[6.25rem] border border-gray font-quicksand font-normal text-base"
          placeholder="Buscar"
          required
        ></input>
        {/* <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button> */}
      </div>
      <div>
        <span>name</span>
      </div>
    </div>
  );
}
