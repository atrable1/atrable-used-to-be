import React from "react";
import "./LeftMenu.css";

class LeftMenu extends React.Component {
  render() {
    return <div className="leftmenu">{this.props.children}</div>;
  }
}

export default LeftMenu;
