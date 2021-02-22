import { useState } from "react";
import MainHeader from "./MainHeader";
import MoviesPage from "./MoviesPage";
import ChannelsPage from "./ChannelsPage";

const Main = () => {
  const [showMovie, setShowMovie] = useState(false);
  const [showChannel, setShowChannel] = useState(true);

  return (
    <div className="main">
      <div className="main-headers">
        <MainHeader title="Фильмы" />
        <MainHeader title="Телеканалы" />
      </div>
      {showMovie && (
        <MoviesPage
          onClick={() => {
            setShowChannel(false);
            setShowMovie(true);
          }}
        />
      )}
      {showChannel && (
        <ChannelsPage
          onClick={() => {
            setShowChannel(true);
            setShowMovie(false);
          }}
        />
      )}
    </div>
  );
};

export default Main;
