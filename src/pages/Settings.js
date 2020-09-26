import React from "react";
import NavBar from "../components/NavBar";
import "./404.css";

class Settings extends React.Component {
  render() {
    return (
      <div>
        <html>
          <head>
            <meta charSet="utf-8" />
            <meta
              name="vewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Atrable</title>
          </head>
          <body>
            <NavBar currentPage={0} />
            <h1
              style={{
                marginTop: "10rem",
                marginLeft: "3rem",
                marginRight: "3rem",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Not ready yet
            </h1>

            <NavBar currentPage={0} />
            <div class="message">
              <h2>💻🥱</h2>
              <h1>This Page Isn't Available,</h1>
              <p>
                But the link is not broken, and have not been removed. You don't
                need to check if the link you're trying to open is correct.
              </p>
              <p></p>
            </div>
          </body>
        </html>
      </div>
    );
  }
}

export default Settings;
