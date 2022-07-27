import React, { useContext, useEffect } from "react";
import axios from "axios";
import { FoxbelContext } from "../../App";

export default function SearchProfile() {
  const {
    setWord,
    word,
    searchArray,
    setSearchArray,
    setSearch,
    search,
    setRecientes,
    setAlbum
  } = useContext(FoxbelContext);

  function getSearch(input) {
    console.log(search)
    if (input.length !== "") {
      const options = {
        method: "GET",
        url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${input}`,
        headers: {
          "X-RapidAPI-Key":
            "9afc103fb7msh3273c4fd7dcdff1p153192jsn0566c3dff09a",
          // "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          setSearchArray(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      console.log("a");
    }
  }

  useEffect(() => {
    getSearch(word);
  }, [word]);

  useEffect(() => {
    if(search.id != null){
      setRecientes((oldArray) =>[...oldArray, search]);
    }
  }, [search]);

  

  const listItems = searchArray?.map((item, index) => (
    <li
      class="list-none text-base font-quicksand cursor-pointer pb-2 px-2 hover:bg-principalred hover:text-white rounded-xl"
      key={index}
      onClick={() => {
        setSearch(item);
        setAlbum(item.album.id)
      }}
    >
      {item.title}
    </li>
  ));
  return (
    <div class="flex items-center justify-between w-full bg-blue pb-10">
      <div class="relative">
        <input
          type="search"
          id="default-search"
          class="block p-4 w-[500px] h-[36px] text-softgray bg-white rounded-[6.25rem] border border-gray font-quicksand font-normal text-base"
          placeholder="Buscar"
          required
          onChange={(e) => {
            setWord(e.target.value);
          }}
        ></input>
        {/* <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button> */}
        {word.length !== 0 ? (
          <div class="absolute right-30 top-10 drop-shadow-2xl bg-white border-gray border-solid w-[500px] h-40 overflow-auto rounded-md">
            <div class="p-3">{listItems}</div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <span>name</span>
      </div>
    </div>
  );
}
