import { useState } from "react";
import Movies from "./Movies";
import MainHeader from "./MainHeader";
import Genre from "./Genre";

const Main = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Мульт в кино. Выпуск №103. Некогда грустить!",
      description: "",
      img: "../images/cat.png",
    },
    {
      id: 2,
      name: "Новый бэтмен",
      description: "",
      img: "../images/batman.png",
    },
    {
      id: 3,
      name: "Однажды... в Голливуде",
      description: "",
      img: "../images/hollywood.png",
    },
    {
      id: 4,
      name: "Стриптизёрши",
      description: "",
      img: "../images/girl.png",
    },
  ]);

  return (
    <div className="main">
      <div className="main-headers">
        <MainHeader title="Фильмы" />
        <MainHeader title="Телеканалы" />
      </div>
      <h1>Новинки</h1>
      <Movies movies={movies} />
      <h1>Жанры</h1>
      <div className="genres">
        <Genre title="Комедии" />
        <Genre title="Драмы" />
        <Genre title="Фантастика" />
        <Genre title="Ужасы" />
      </div>
    </div>
  );
};

export default Main;
