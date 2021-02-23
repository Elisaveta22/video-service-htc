import SignInModalWindow from "./SignInModalWindow";
import { useState } from "react";

const Header = () => {
  const [signInModalActive, setSignInModalActive] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <img src="../images/logo.png" alt="" />
        <h1>Видеосервис</h1>
      </div>

      <form action="" className="finder">
        <input type="text" placeholder="Поиск..." className="input-field" />
        <button className="find-btn" type="submit">
          Найти
        </button>
      </form>
      <button
        className="sign-in-btn"
        onClick={() => setSignInModalActive(true)}
      >
        Войти
      </button>

      <SignInModalWindow
        active={signInModalActive}
        setActive={setSignInModalActive}
      />
    </div>
  );
};

export default Header;
