const Genre = ({ genre }) => {
  return (
    <div className="genre">
      <p>{genre.emoji}</p>
      <p>{genre.title}</p>
    </div>
  );
};

export default Genre;
