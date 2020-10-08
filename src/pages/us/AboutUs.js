import React from "react";
import NavBar from "../../components/NavBar";
import UsLeftMenu from "../../components/UsLeftMenu";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="vewport" content="width=device-width, initial-scale=1" />
          <title>Atrable</title>
        </head>
        <body>
          <UsLeftMenu currentPage={2} />
          <NavBar />
          <div className="container_1">
            <div className="container_2">
              <div className="container_row">
                <div className="container_row_key">Framework</div>
                <div className="container_row_value">React</div>
              </div>
              <div className="container_row">
                <div className="container_row_key">Icons</div>
                <div className="container_row_value">material.io</div>
              </div>
              <div className="space_h_2"></div>
              <div className="container_row_title">Browser support</div>
              <div className="container_row">
                <div className="container_row_key">
                  <a
                    href="https://www.google.com/chrome/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#007BFC" }}
                  >
                    Chrome
                  </a>
                </div>
                <div className="container_row_value">O</div>
              </div>
              <div className="container_row">
                <div className="container_row_key">
                  <a
                    href="https://www.microsoft.com/edge"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#007BFC" }}
                  >
                    Edge
                  </a>
                </div>
                <div className="container_row_value">O</div>
              </div>
              <div className="container_row">
                <div className="container_row_key">
                  <a
                    href="https://www.mozilla.org/firefox/new/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#007BFC" }}
                  >
                    Firefox
                  </a>
                </div>
                <div className="container_row_value">△</div>
              </div>
              <div className="container_row">
                <div className="container_row_key">
                  <a
                    href="https://www.opera.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#007BFC" }}
                  >
                    Opera
                  </a>
                </div>
                <div className="container_row_value">Seems to be O</div>
              </div>
              <div className="container_row">
                <div className="container_row_key">
                  <a
                    href="https://whale.naver.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#007BFC" }}
                  >
                    Whale
                  </a>
                </div>
                <div className="container_row_value">O</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}

export default AboutUs;
