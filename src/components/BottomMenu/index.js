import React from "react";
// get our fontawesome imports
import style from "./index.css";
import MultipleStyle from "classnames";
import {
  faUser,
  faMap,
  faCamera,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const selectColor = (iconName, selectIconName) => {
  return iconName === selectIconName ? style.currentIconColor : style.iconColor;
};
const BottomMenu = props => {
  const { changePage, selectIconName } = props;
  return (
    <div className={style.bottomMenu}>
      <div className={style.divButton} onClick={() => changePage("InfoPage")}>
        <div
          className={MultipleStyle(
            style.iconBox,
            selectColor("Profile", selectIconName)
          )}
        >
          <div className={style.fz15}>
            <FontAwesomeIcon icon={faUser} className={style.TopAnimate} />
          </div>
          <div className={style.fz12}>Profile</div>
        </div>
      </div>
      <div className={style.divButton} onClick={() => changePage("MapPage")}>
        <div
          className={MultipleStyle(
            style.iconBox,
            selectColor("Map", selectIconName)
          )}
        >
          <div className={style.fz15}>
            <FontAwesomeIcon icon={faMap} className={style.TopAnimate} />
          </div>
          <div className={style.fz12}>Map</div>
        </div>
      </div>
      <div className={style.divButton} onClick={() => changePage("CameraPage")}>
        <div
          className={MultipleStyle(
            style.iconBox,
            selectColor("Camera", selectIconName)
          )}
        >
          <div className={style.fz15}>
            <FontAwesomeIcon icon={faCamera} className={style.TopAnimate} />
          </div>
          <div className={style.fz12}>Camera</div>
        </div>
      </div>
      <div
        className={style.divButton}
        onClick={() => changePage("FriendsPage")}
      >
        <div
          className={MultipleStyle(
            style.iconBox,
            selectColor("Friends", selectIconName)
          )}
        >
          <div className={style.fz15}>
            <FontAwesomeIcon
              icon={faUserFriends}
              className={style.TopAnimate}
            />
          </div>
          <div className={style.fz12}>Friends</div>
        </div>
      </div>
    </div>
  );
};
export default BottomMenu;
