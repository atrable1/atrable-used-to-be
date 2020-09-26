import React from "react";
import "./NavBar.css";
import "../pages/Home";
import { Link } from "react-router-dom";
import AddIcon from "../assets/icons/AddIcon";
import ArrowDropDownIcon from "../assets/icons/ArrowDropDownIcon";
import AddCollectionIcon from "../assets/icons/AddCollectionIcon";
import SubjectIcon from "../assets/icons/SubjectIcon";
import StarIcon from "../assets/icons/StarIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import ExploreFilledIcon from "../assets/icons/ExploreFilledIcon";
import HomeFilledIcon from "../assets/icons/HomeFilledIcon";
import ExploreOutlinedIcon from "../assets/icons/ExploreOutlinedIcon";
import HomeOutlinedIcon from "../assets/icons/HomeOutlinedIcon";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown1Opened: false,
      dropDown2Opened: false,
    };

    this.toggleDropDown1 = this.toggleDropDown1.bind(this);
    this.toggleDropDown2 = this.toggleDropDown2.bind(this);
  }

  toggleDropDown1() {
    this.setState((state) => ({
      dropDown1Opened: !state.dropDown1Opened,
      dropDown2Opened: false,
    }));
  }

  toggleDropDown2() {
    this.setState((state) => ({
      dropDown1Opened: false,
      dropDown2Opened: !state.dropDown2Opened,
    }));
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="navbar_container_1">
            <div className="navbar_name"></div>
          </div>
          <Container2 currentPage={this.props.currentPage} />
          <div className="navbar_container_3">
            <div className="navbar_container_3_column">
              <button
                className="navbar_round_icon_button_2"
                onClick={this.toggleDropDown2}
              >
                <ArrowDropDownIcon />
              </button>
            </div>
            <div className="navbar_container_3_column">
              <button
                className="navbar_round_icon_button_1"
                onClick={this.toggleDropDown1}
              >
                <AddIcon />
              </button>
            </div>
          </div>
        </div>
        <DropDown1 show={this.state.dropDown1Opened} />
        <DropDown2 show={this.state.dropDown2Opened} />
      </div>
    );
  }
}

function DropDown1(props) {
  if (props.show === true) {
    return (
      <div className="navbar_dropdown1">
        <Link to="/new/collection" style={{ textDecoration: "none" }}>
          <div className="navbar_dropdown_button">
            <div className="navbar_dropdown_button_icon">
              <AddCollectionIcon />
            </div>
            <div className="navbar_dropdown_button_title">Collection</div>
          </div>
        </Link>
        <Link to="/new/story" style={{ textDecoration: "none" }}>
          <div className="navbar_dropdown_button">
            <div className="navbar_dropdown_button_icon">
              <SubjectIcon />
            </div>
            <div className="navbar_dropdown_button_title">Story</div>
          </div>
        </Link>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function DropDown2(props) {
  if (props.show === true) {
    return (
      <div className="navbar_dropdown2">
        <Link to="/us/review" style={{ textDecoration: "none" }}>
          <div className="navbar_dropdown_button">
            <div className="navbar_dropdown_button_icon">
              <StarIcon />
            </div>
            <div className="navbar_dropdown_button_title">Rate us</div>
          </div>
        </Link>
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <div className="navbar_dropdown_button">
            <div className="navbar_dropdown_button_icon">
              <SettingsIcon />
            </div>
            <div className="navbar_dropdown_button_title">Settings</div>
          </div>
        </Link>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function Container2(props) {
  if (props.currentPage === 1) {
    return (
      <div className="navbar_container_2">
        <div className="navbar_menu">
          <div className="navbar_menu_child">
            <Link to="/home">
              <button className="navbar_icon_button">
                <HomeFilledIcon
                  style={{
                    verticalAlign: "middle",
                    display: "tableCell",
                    fill: "#2196f3",
                    height: "2.5rem",
                  }}
                />
              </button>
            </Link>
          </div>
          <div className="navbar_menu_child">
            <Link to="/explore">
              <button className="navbar_icon_button">
                <ExploreOutlinedIcon
                  style={{
                    verticalAlign: "middle",
                    display: "tableCell",
                    fill: "gray",
                    height: "2.5rem",
                  }}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    if (props.currentPage === 2) {
      return (
        <div className="navbar_container_2">
          <div className="navbar_menu">
            <div className="navbar_menu_child">
              <Link to="/home">
                <button className="navbar_icon_button">
                  <HomeOutlinedIcon
                    style={{
                      verticalAlign: "middle",
                      display: "tableCell",
                      fill: "gray",
                      height: "2.5rem",
                    }}
                  />
                </button>
              </Link>
            </div>
            <div className="navbar_menu_child">
              <Link to="/explore">
                <button className="navbar_icon_button">
                  <ExploreFilledIcon
                    style={{
                      verticalAlign: "middle",
                      display: "tableCell",
                      fill: "#2196f3",
                      height: "2.5rem",
                    }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar_container_2">
          <div className="navbar_menu">
            <div className="navbar_menu_child">
              <Link to="/home">
                <button className="navbar_icon_button">
                  <HomeOutlinedIcon
                    style={{
                      verticalAlign: "middle",
                      display: "tableCell",
                      fill: "gray",
                      height: "2.5rem",
                    }}
                  />
                </button>
              </Link>
            </div>
            <div className="navbar_menu_child">
              <Link to="/explore">
                <button className="navbar_icon_button">
                  <ExploreOutlinedIcon
                    style={{
                      verticalAlign: "middle",
                      display: "tableCell",
                      fill: "gray",
                      height: "2.5rem",
                    }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default NavBar;
