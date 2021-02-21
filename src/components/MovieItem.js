const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <div className="image-wrapper">
        <img src={movie.img} alt="" />
        <p class="movie-item-description">{movie.desrciption}</p>
      </div>
      <p class="movie-item-name">{movie.name}</p>
    </div>
  );
};

export default MovieItem;
