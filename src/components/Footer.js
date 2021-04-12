import { Link } from "react-router-dom";
import React from "react";
import { emailAddress } from "../utilities/helper";
import "./main.scss";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/jobs">
          <img
            className="footer__img"
            src="https://svgshare.com/i/W3n.svg"
            alt=""
          />
        </Link>
        <ul className="footer__links">
          <br />
          <br />
          <li>
            <Link to="/jobs" style={{ textDecoration: "none" }}>
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/likes`,
                state: {
                  email: this.props.email,
                  nickname: this.props.nickname,
                },
              }}
              style={{ textDecoration: "none" }}
            >
              My Likes
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
