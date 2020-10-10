import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "../firebase";
import "./Me.css";
import Loading from "../components/Loading";
import LoginToUse from "../components/LoginToUse";
import NavBar from "../components/NavBar";
import VerifyEmail from "../components/VerifyEmail";

function Me() {
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
      if (firebase.auth().currentUser.emailVerified) {
        return (
          <>
            <NavBar />
            <div>
              <div
                className="background_image"
                style={{
                  backgroundImage: "url(https://picsum.photos/1000/1000)",
                }}
              />
              <div
                className="profile_image"
                style={{
                  backgroundImage: "url(https://picsum.photos/100/100)",
                }}
              />
              <div className="container">
                <h1 className="name">Shawn</h1>
              </div>
              <div className="container">
                <p>message</p>
              </div>
              <div className="me_navbar"></div>
              <div className="space_h_100"></div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <NavBar />
            <VerifyEmail />
          </>
        );
      }
    } else {
      return <LoginToUse />;
    }
  } else {
    return <Loading />;
  }
}

export default Me;
