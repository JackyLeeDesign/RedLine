import React from "react";
// get our fontawesome imports
import style from "./index.css";
import loginTitle from "../../../assets/images/loginTitle.png";
import loginInput from "../../../assets/images/loginInput.png";
import loginSignIn from "../../../assets/images/loginSignIn.png";
import loginBottomText from "../../../assets/images/loginBottomText.png";
import MultipleStyle from "classnames";
import { faMedal, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LoginPage = props => {
  const { changePage } = props;
  return (
    <div className={style.loginPage}>
      <div className={style.title}>
        <img src={loginTitle}></img>
      </div>
      <div className={style.input}>
        <img src={loginInput}></img>
      </div>
      <div className={style.signIn}>
        <img src={loginSignIn} onClick={() => changePage("InfoPage")}></img>
      </div>
      <div className={style.loginBottomText}>
        <img src={loginBottomText}></img>
      </div>
    </div>
  );
};
export default LoginPage;
