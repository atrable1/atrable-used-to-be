import React from "react";

function HomeFilledIcon(props) {
  return (
    <div style={props.style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 24 24"
        width="100%"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    </div>
  );
}

export default HomeFilledIcon;
