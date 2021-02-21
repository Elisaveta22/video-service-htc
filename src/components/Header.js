const Header = () => {
  return (
    <div className="header">
      <h1>Видеосервис</h1>
      <form action="">
        <input type="text" placeholder="Поиск..." />
        <button className="find-btn" type="submit">
          Найти
        </button>
      </form>
      <button className="sign-in">Войти</button>
    </div>
  );
};

export default Header;
