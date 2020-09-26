import React from "react";
import "./Home.css";
import NavBar from "../components/NavBar";
import GoBackIcon from "../assets/icons/GoBackIcon";

class Home extends React.Component {
  render() {
    if (window.innerHeight / window.innerWidth < 1) {
      // computer
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
            <NavBar currentPage={0} />
            <div className="row">
              <div className="column_left">
                <div className="welcome">Built for you</div>
                <div className="description">
                  Atrable is a platform where you can share your travel stories.
                  You can view traveler's stories, follow travelers, and share
                  your travel story.
                </div>
              </div>
              <div className="column_right">
                <LoginCard />
              </div>
            </div>
          </body>
        </html>
      );
    } else {
      alert("Recommend you to access from a device with a wider screen");
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
            <div className="row">
              <div className="column_right_for_mobile">
                <div className="welcome_for_mobile">Welcome</div>
                <LoginCard />
              </div>
            </div>
            {/* <BottomNavBar /> */}
          </body>
        </html>
      );
    }
  }
}

class LoginCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0 };

    this.moveToNextPage = this.moveToNextPage.bind(this);
    this.moveToPreviousPage = this.moveToPreviousPage.bind(this);
  }

  moveToNextPage() {
    this.setState((state) => ({
      currentPage: state.currentPage + 1,
    }));
  }

  moveToPreviousPage() {
    this.setState((state) => ({
      currentPage: state.currentPage - 1,
    }));
  }

  render() {
    if (this.state.currentPage === 0) {
      return (
        <div>
          <div className="card">
            <p className="p">Email</p>
            <input type="email"></input>
            <p className="p">Password</p>
            <input type="password"></input>
            <button className="button_2">Log in</button>
            <button className="button_3" onClick={this.moveToNextPage}>
              Create new account
            </button>
          </div>
        </div>
      );
    } else {
      if (this.state.currentPage === 1) {
        return (
          <div>
            <div className="card">
              {/* <div className="title">Sign up</div> */}
              {/* <p className="p">Name</p> */}
              {/* <input></input> */}
              <p className="p">Email</p>
              <input type="email"></input>
              <p className="p">Password</p>
              <input type="password"></input>
              <div className="row_2">
                <div className="column_1">
                  <button
                    className="button_4"
                    onClick={this.moveToPreviousPage}
                  >
                    <GoBackIcon />
                  </button>
                </div>
                <div className="column_2">
                  <button className="button_5" onClick={this.moveToNextPage}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        //on submit: 잘 쓰였는지 확인, verification email 전송
      } else {
        if (this.state.currentPage === 2) {
          return (
            <div>
              <div className="card">
                <p>Sign up: verify email | on submit: verification code 비교</p>
                <button onClick={this.moveToPreviousPage}>Go Back</button>
                <button onClick={this.moveToNextPage}>moveToNextPage</button>
              </div>
            </div>
          );
        } else {
          if (this.state.currentPage === 3) {
            return (
              <div>
                <div className="card">
                  <p>this.state.currentPage === 3</p>
                  <button onClick={this.moveToPreviousPage}>Go Back</button>
                  <button onClick={this.moveToNextPage}>moveToNextPage</button>
                </div>
              </div>
            );
          } else {
            return (
              <div className="card">
                <button onClick={this.moveToPreviousPage}>Go Back</button>
              </div>
            );
          }
        }
      }
    }
  }
}

export default Home;
