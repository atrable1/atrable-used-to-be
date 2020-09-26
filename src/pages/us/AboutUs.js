import React from "react";
import NavBar from "../../components/NavBar";
import UsLeftMenu from "../../components/UsLeftMenu";
import "./AboutUs.css"

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta
              name="vewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Atrable</title>
          </head>
          <body>
            <UsLeftMenu currentPage={2} />
            <NavBar currentPage={0} />
          </body>
        </html>
      </div>
    );
  }
}

export default AboutUs;
