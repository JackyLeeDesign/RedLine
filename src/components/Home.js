import React, { Fragment, Component } from "react";
import { observer, inject } from "mobx-react";
import LoginPage from "./LoginPage";
import InfoPage from "./InfoPage";
import MapPage from "./MapPage";
import CameraPage from "./CameraPage";
import FriendsPage from "./FriendsPage";
import ChangePageStore from "../store/ChangePageStore";
const changePageStore = new ChangePageStore();
const loadCurrentPage = (currentPage, changePage, userLocation) => {
  switch (currentPage) {
    case "InfoPage":
      return <InfoPage changePage={changePage} />;
    case "MapPage":
      return <MapPage changePage={changePage} userLocation={userLocation} />;
    case "CameraPage":
      return <CameraPage changePage={changePage} />;
    case "FriendsPage":
      return <FriendsPage changePage={changePage} />;
    default:
      return <LoginPage changePage={changePage} />;
  }
};
@inject("changePageStore")
@observer
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    changePageStore.getLocation();
    return (
      <Fragment>
        {loadCurrentPage(
          changePageStore.currentPage,
          changePageStore.changePage,
          changePageStore.userLocation
        )}
      </Fragment>
    );
  }
}
export default Home;
