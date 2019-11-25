import React from "react";
// get our fontawesome imports
import style from "./index.css";
import infoUser from "../../../assets/images/infoUser.png";
import infoTitleName from "../../../assets/images/infoTitleName.png";
import infoTitleButton from "../../../assets/images/infoTitleButton.png";
import infoGllery from "../../../assets/images/infoGallery.png";
import BottomMenu from "../BottomMenu";
import MultipleStyle from "classnames";
const InfoPage = props => {
  const { changePage } = props;
  return (
    <div className={style.infoPage}>
      <div className={style.infoTitle}>
        <img src={infoTitleName} className={style.infoTitleName}></img>
        <img src={infoTitleButton} className={style.infoTitleButton}></img>
      </div>
      <div className={style.infoUser}>
        <img src={infoUser}></img>
      </div>
      <div className={style.infoGllery}>
        <img src={infoGllery}></img>
      </div>
      <BottomMenu selectIconName="Profile" changePage={changePage} />
    </div>
  );
};
export default InfoPage;
