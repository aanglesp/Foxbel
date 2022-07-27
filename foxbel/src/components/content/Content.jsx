import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import SearchProfile from "./SearchProfile";
import CardItem from "./CardItem";

export default function Content() {
  const [artist, setArtist] = useState([]);
  function getArtists() {
    const options = {
      method: "GET",
      url: "https://api.deezer.com/search?q=artist:a",
      headers: {
        "X-RapidAPI-Key": "057d839cc3msh5aa4db1d24ed65ap12d188jsn497cd31caf38",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(() => {
    getArtists();
    console.log(artist);
  }, []);
  return (
    <div class="flex-col  px-48 w-[100%] pt-10">
      <SearchProfile />
      <Card />
      <h2>title</h2>
      <CardItem />
    </div>
  );
}
