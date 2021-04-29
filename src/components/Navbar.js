import { NavLink } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./Navbar.scss";
const firebase = require("firebase");

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }
  render() {
    return (
      <>
        <nav>
          <NavLink
            to="/jobs"
            style={{
              visibility: this.state.menuOpen ? "hidden" : "visible",
              pointerEvents: this.state.menuOpen ? "none !important" : "auto",
              cursor: this.state.menuOpen ? "default" : "pointer",
            }}
          >
            <img src="https://svgshare.com/i/W3S.svg" className="logo" alt="" />
          </NavLink>
          <div className="collapsible">
            <div
              onClick={this.toggleHamburger}
              className={
                this.state.menuOpen
                  ? "collapsible__menu-btn open"
                  : "collapsible__menu-btn"
              }
            >
              <span class="line line-1"></span>
              <span class="line line-2"></span>
              <span class="line line-3"></span>
            </div>
          </div>
        </nav>
        <div
          className={
            this.state.menuOpen ? "mobile-menu visible" : "mobile-menu"
          }
        >
          <ul className="mobile-menu__links">
            <NavLink to="/jobs" style={{ textDecoration: "none" }}>
              <li className="mobile-menu__links__link">Jobs</li>
            </NavLink>
            <NavLink
              to={{
                pathname: `/likes`,
                state: {
                  email: this.props.email,
                  nickname: this.props.nickname,
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <li className="mobile-menu__links__link">My Likes</li>
            </NavLink>
            <li
              className="mobile-menu__links__link mobile-menu__links__link__logout"
              onClick={this.logOut}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7527 9.52072L17.6127 8.01205C17.225 7.73873 16.6891 8.01705 16.6891 8.49096V9.41369H6.4141C6.09051 9.41369 5.82812 9.67604 5.82812 9.99967C5.82812 10.3233 6.09051 10.5856 6.4141 10.5856H16.689V11.5083C16.689 11.9853 17.2278 12.2585 17.6126 11.9872L19.7526 10.4785C20.0794 10.2483 20.086 9.75619 19.7527 9.52072Z"
                  fill="#5D6598"
                />
                <path
                  d="M16.8153 13.7625C16.5352 13.6005 16.1767 13.6962 16.0146 13.9763C14.6382 16.3559 12.0653 17.9533 9.12512 17.9533C4.73973 17.9533 1.17191 14.3855 1.17191 10.0001C1.17191 5.61473 4.73973 2.04691 9.12512 2.04691C12.0673 2.04691 14.639 3.64586 16.0146 6.02383C16.1766 6.30398 16.5352 6.39957 16.8152 6.23766C17.0954 6.07562 17.1911 5.71715 17.0291 5.43703C15.446 2.70039 12.4894 0.875 9.12512 0.875C4.08164 0.875 0 4.95621 0 10.0001C0 15.0436 4.08121 19.1252 9.12512 19.1252C12.4909 19.1252 15.4467 17.2986 17.0291 14.5631C17.1911 14.283 17.0954 13.9246 16.8153 13.7625Z"
                  fill="#5D6598"
                />
              </svg>
              Log Out
            </li>
          </ul>
        </div>
      </>
    );
  }
  toggleHamburger = () => {
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true });
    } else {
      this.setState({ menuOpen: false });
    }
  };
  logOut = () => {
    firebase.auth().signOut();
  };
}

export default Navbar;