import React from "react";
import NavBar from "../../components/NavBar";
import "./Settings.css";

function Settings() {
  return (
    <div>
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="vewport" content="width=device-width, initial-scale=1" />
          <title>Atrable</title>
        </head>
        <body>
          <NavBar />
          <h1
            style={{
              marginTop: "8rem",
              marginLeft: "3rem",
              marginRight: "3rem",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Not ready yet
          </h1>

          <div class="message">
            <span role="img" aria-label="i'm tired">
              💻🥱
            </span>
            <h1>This Page Isn't Available,</h1>
            <p>
              But the link is not broken, and not removed. You don't need to
              check if the link you're trying to open is correct.
            </p>
            <p></p>
          </div>
        </body>
      </html>
    </div>
  );
}

export default Settings;
