import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRegistrationAction } from "../../../store/actions";
import { getUserData } from "../../../store/selectors";
import Input from "../../common/Input";

import style from "../registration.module.scss";

const RegistrationForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const userData = useSelector(getUserData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.firstName && userData.lastName) {
      navigate("/");
    }
  }, [userData.firstName, userData.lastName]);

  const handler = () => {
    if (repeatPassword === password) {
      setTimeout(
        () => dispatch(userRegistrationAction({ lastName, firstName })),
        3000
      );
    } else {
      console.log("Пароли не совпадают");
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };
  return (
    <div className={style.container}>
      <h1 className={style["section-title"]}>Регистрация</h1>
      <div className={style["form-wrap"]}>
        <Input
          value={firstName}
          setValue={setFirstName}
          placeholder="Введите имя"
          type="text"
          title="User First Name"
        />
        <Input
          value={lastName}
          setValue={setLastName}
          placeholder="Введите фамилию"
          type="text"
          title="User Last Name"
        />
        <Input
          value={email}
          setValue={setEmail}
          placeholder="Введите почту"
          type="email"
          title="User email"
        />
        <Input
          value={password}
          setValue={setPassword}
          placeholder="Введите пароль"
          type="password"
          title="User password"
        />
        <Input
          value={repeatPassword}
          setValue={setRepeatPassword}
          placeholder="Повторите пароль"
          type="password"
          title="User repeat password"
        />
        <div className={style["form-btn"]}>
          <button className={style.btn} onClick={handler} type="submit">
            Отправить
          </button>
          <button className={style.btn} onClick={clearForm} type="button">
            Очистить форму
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
