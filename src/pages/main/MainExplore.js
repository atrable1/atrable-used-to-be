import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "../../firebase";
import "./MainExplore.css";
import Loading from "../../components/Loading";
import LoginToUse from "../../components/LoginToUse";
import NavBar from "../../components/NavBar";

function MainExplore() {
  const [init, setInit] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  if (init) {
    if (loggedIn) {
      return (
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
            <NavBar explore={true} />
            <div>
              <h1>{firebase.auth().currentUser.uid}</h1>
            </div>
          </body>
        </html>
      );
    } else {
      return <LoginToUse />;
    }
  } else {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="vewport" content="width=device-width, initial-scale=1" />
          <title>Atrable</title>
        </head>
        <body>
          <Loading />
        </body>
      </html>
    );
  }
}

export default MainExplore;
