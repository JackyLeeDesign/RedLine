import React from "react";
// get our fontawesome imports
import style from "./index.css";
import BottomMenu from "../BottomMenu";
import MultipleStyle from "classnames";
const Camera = props => {
  const iframe = () => {
    return {
      __html: props.iframe
    };
  };
  return (
    <div>
      <div dangerouslySetInnerHTML={iframe()} />
    </div>
  );
};
const InfoPage = props => {
  const { changePage } = props;
  const iframe =
    '<iframe src="../../../camera" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden;"></iframe>';
  return (
    <div className={style.infoPage}>
      <Camera iframe={iframe} />
      <BottomMenu selectIconName="Camera" changePage={changePage} />
    </div>
  );
};

export default InfoPage;
