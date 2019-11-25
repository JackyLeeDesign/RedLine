import React from "react";
// get our fontawesome imports
import style from "./index.css";
import mapTitleName from "../../../assets/images/mapTitleName.png";
import BottomMenu from "../BottomMenu";
import MultipleStyle from "classnames";

import GoogleMapReact from "google-map-react";
const MapPage = props => {
  const { changePage, userLocation } = props;
  return (
    <div className={style.mapPage}>
      <div className={style.mapTitle}>
        <img src={mapTitleName} className={style.mapTitleName}></img>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBYLBjGpeYBMHuBLiVpCG0paOPilqlQ0Z0" }}
        defaultCenter={userLocation}
        defaultZoom={16}
      >
        <div lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
      <BottomMenu selectIconName="Map" changePage={changePage} />
    </div>
  );
};
export default MapPage;
