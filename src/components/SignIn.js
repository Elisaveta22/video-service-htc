const SignIn = () => {
  return (
    <div className="sign-in-card" onClick={(e) => e.stopPropagation()}>
      <h1>Вход</h1>
      <form action="">
        <input type="text" placeholder="Логин" className="input-field" />
        <input type="text" placeholder="Пароль" className="input-field" />
        <div className="sign-in-checkbox">
          <input type="checkbox" name="" id="" />
          <p>Запомнить</p>
        </div>
        <button type="submit" className="sign-in-btn">
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignIn;
