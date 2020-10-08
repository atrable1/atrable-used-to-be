import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import LoginToUse from "../../components/LoginToUse";
import NavBar from "../../components/NavBar";
import UsLeftMenu from "../../components/UsLeftMenu";
import "./UsTodo.css";

function UsTodo() {
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
              <UsLeftMenu currentPage={0} />
              <NavBar />
            </body>
          </html>
        </div>
      );
    } else {
      return <LoginToUse />;
    }
  } else {
    return <Loading />;
  }
}

export default UsTodo;
