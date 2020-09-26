import React from "react";
import NavBar from "../../components/NavBar";

function MainHome() {
  return (
    <div>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="vewport" content="width=device-width, initial-scale=1" />
          <title>Atrable</title>
        </head>
        <body>
          <NavBar currentPage={1} />
        </body>
      </html>
    </div>
  );
}

export default MainHome;
