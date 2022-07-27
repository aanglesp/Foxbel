import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import SearchProfile from "./SearchProfile";
import CardItem from "./CardItem";
import { FoxbelContext } from "../../App";

export default function Content() {
  const { word, screenActive } = useContext(FoxbelContext);
  return (
    <div class="flex-col  px-48 w-[100%] pt-10">
      <SearchProfile />
      <Card />
      <h2 class="mb-10 text-principalred text-22px font-bold">
        {screenActive}
      </h2>
      <div class="flex flex-wrap">
        <CardItem/>
      </div>
    </div>
  );
}
