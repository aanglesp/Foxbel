import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import SearchProfile from "./SearchProfile";
import CardItem from "./CardItem";
import { FoxbelContext } from "../../App";

export default function Content() {
  const { word } = useContext(FoxbelContext);

  return (
    <div class="flex-col  px-48 w-[100%] pt-10">
      <SearchProfile />
      <Card />
      <h2>title</h2>
      <CardItem />
    </div>
  );
}
