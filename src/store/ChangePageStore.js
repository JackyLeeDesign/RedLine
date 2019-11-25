import { observable, computed, action } from "mobx";
class changePageStore {
  @observable userLocation = [25.0422, 121.5355];
  @observable
  currentPage = "LogingPage";
  @action
  changePage = targetPage => {
    this.currentPage = targetPage;
  };
  @action
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  };
  @action
  showPosition = position => {
    this.userLocation = [position.coords.latitude, position.coords.longitude];
  };
}
export default changePageStore;
