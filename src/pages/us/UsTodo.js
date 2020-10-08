import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import LoginToUse from "../../components/LoginToUse";
import NavBar from "../../components/NavBar";
import UsLeftMenu from "../../components/UsLeftMenu";
import "./UsTodo.css";
import firebase from "firebase";
import "../../firebase";

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
        <>
          <UsLeftMenu currentPage={0} />
          <NavBar />
        </>
      );
    } else {
      return <LoginToUse />;
    }
  } else {
    return <Loading />;
  }
}

export default UsTodo;
