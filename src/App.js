import "./App.css";
import React from "react";
//import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3 className="p-2 mt-4">Login</h3>
            <div className="card mt-4">
              <div className="card-body p-4">
                <h3 className="card-title text-dark">
                  Sign in to your account
                </h3>
                <div className="mt-4 form-group">
                  <label className="text-dark d-block" htmlFor="email">
                    <b>Email</b>
                  </label>
                  <input id="email" type="text" className="form-control" />
                </div>
                <div className="mt-4 form-group">
                  <label className="text-dark" htmlFor="password">
                    <b>Password</b>
                  </label>
                  <span className="text-dark float-right">
                    <a href="/#">Forgot your password?</a>
                  </span>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="mt-4 form-group">
                  <input id="checkbox" type="checkbox" />
                  <label className="text-dark ml-1" htmlFor="checkbox">
                    <b>Stay signed in for a week</b>
                  </label>
                </div>
                <div className="mt-4 form-group">
                  <button
                    style={{ width: "100%" }}
                    className="btn btn-primary form-group"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default App;
