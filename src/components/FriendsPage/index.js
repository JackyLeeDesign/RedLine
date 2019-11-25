import React, { Component } from "react";
// get our fontawesome imports
import style from "./index.css";
import friendsList from "../../../assets/images/friendsList.png";
import friendsTitleName from "../../../assets/images/friendsTitleName.png";
import BottomMenu from "../BottomMenu";
import friendsDetail from "../../../assets/images/friendsDetail.png";

class FriendsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPic: friendsList };
  }
  render() {
    const { changePage } = this.props;
    const changePic = () => {
      this.setState({
        currentPic:
          this.state.currentPic === friendsList ? friendsDetail : friendsList
      });
    };
    return (
      <div className={style.friendsPage}>
        <div className={style.friendsList} onClick={() => changePic()}>
          <img src={this.state.currentPic}></img>
        </div>
        <BottomMenu selectIconName="Profile" changePage={changePage} />
      </div>
    );
  }
}
export default FriendsPage;
