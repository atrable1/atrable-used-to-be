import React from "react";
import "../../components/NavBar";
import NavBar from "../../components/NavBar";

function MainExplore() {
  return (
    <div>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="vewport" content="width=device-width, initial-scale=1" />
          <title>Atrable</title>
        </head>
        <body>
          <NavBar currentPage={2} />
        </body>
      </html>
    </div>
  );
}

export default MainExplore;
