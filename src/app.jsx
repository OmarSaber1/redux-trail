import React, { useState } from "react";
import SongDetails from "./components/songDetails";
import Songslist from "./components/songs/songslist";

const App = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-5">
          <Songslist />
        </div>
        <div className="col">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
