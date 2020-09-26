import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "../assets/icons/CheckCircleIcon";
import HelpIcon from "../assets/icons/HelpIcon";
import ThumbsUpIcon from "../assets/icons/ThumbsUpIcon";
import "./UsLeftMenu.css";

class UsLeftMenu extends React.Component {
  render() {
    if (this.props.currentPage === 0) {
      return (
        <div className="usleftmenu">
          <Link to="/us/todo" style={{ textDecoration: "none" }}>
            <div className="usleftmenu_tile">
              <div className="usleftmenu_tile_icon">
                <CheckCircleIcon
                  style={{ fill: "#2196f3", backgroundColor: "transparent" }}
                />
              </div>
              <div
                className="usleftmenu_tile_title"
                style={{ color: "#2196f3" }}
              >
                To do
              </div>
            </div>
          </Link>
          <Link to="/us/review" style={{ textDecoration: "none" }}>
            <div className="usleftmenu_tile">
              <div className="usleftmenu_tile_icon">
                <ThumbsUpIcon />
              </div>
              <div className="usleftmenu_tile_title">Review</div>
            </div>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <div className="usleftmenu_tile">
              <div className="usleftmenu_tile_icon">
                <HelpIcon />
              </div>
              <div className="usleftmenu_tile_title">About</div>
            </div>
          </Link>
        </div>
      );
    } else {
      if (this.props.currentPage === 1) {
        return (
          <div className="usleftmenu">
            <Link to="/us/todo" style={{ textDecoration: "none" }}>
              <div className="usleftmenu_tile">
                <div className="usleftmenu_tile_icon">
                  <CheckCircleIcon />
                </div>
                <div className="usleftmenu_tile_title">To do</div>
              </div>
            </Link>
            <Link to="/us/review" style={{ textDecoration: "none" }}>
              <div className="usleftmenu_tile">
                <div className="usleftmenu_tile_icon">
                  <ThumbsUpIcon
                    style={{ fill: "#2196f3", backgroundColor: "transparent" }}
                  />
                </div>
                <div
                  className="usleftmenu_tile_title"
                  style={{ color: "#2196f3" }}
                >
                  Review
                </div>
              </div>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <div className="usleftmenu_tile">
                <div className="usleftmenu_tile_icon">
                  <HelpIcon />
                </div>
                <div className="usleftmenu_tile_title">About</div>
              </div>
            </Link>
          </div>
        );
      } else {
        if (this.props.currentPage === 2) {
          return (
            <div className="usleftmenu">
              <Link to="/us/todo" style={{ textDecoration: "none" }}>
                <div className="usleftmenu_tile">
                  <div className="usleftmenu_tile_icon">
                    <CheckCircleIcon />
                  </div>
                  <div className="usleftmenu_tile_title">To do</div>
                </div>
              </Link>
              <Link to="/us/review" style={{ textDecoration: "none" }}>
                <div className="usleftmenu_tile">
                  <div className="usleftmenu_tile_icon">
                    <ThumbsUpIcon />
                  </div>
                  <div className="usleftmenu_tile_title">Review</div>
                </div>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <div className="usleftmenu_tile">
                  <div className="usleftmenu_tile_icon">
                    <HelpIcon style={{ fill: "#2196f3" }} />
                  </div>
                  <div
                    className="usleftmenu_tile_title"
                    style={{ color: "#2196f3" }}
                  >
                    About
                  </div>
                </div>
              </Link>
            </div>
          );
        } else {
          return (
            <div className="usleftmenu">
              <div className="usleftmenu_tile">
                <div className="usleftmenu_tile_icon">
                  <CheckCircleIcon />
                </div>
                <div className="usleftmenu_tile_title">To do</div>
              </div>
              <div className="usleftmenu_tile">
                <div className="usleftmenu_tile_icon">
                  <ThumbsUpIcon />
                </div>
                <div className="usleftmenu_tile_title">Review</div>
              </div>
              <div className="usleftmenu_tile">
                <div className="usleftmenu_tile_icon"></div>
                <div className="usleftmenu_tile_title">About</div>
              </div>
            </div>
          );
        }
      }
    }
  }
}

export default UsLeftMenu;
