const Genre = ({ genre }) => {
  return (
    <div
      className="genre"
      style={{
        background: `linear-gradient(to right, ${genre.colorFrom}, ${genre.colorTo})`,
      }}
    >
      <p>{genre.emoji}</p>
      <p>{genre.title}</p>
    </div>
  );
};

export default Genre;
