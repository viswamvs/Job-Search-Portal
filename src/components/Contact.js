import React from "react";
import { emailAddress } from "../utilities/helper";
import "./main.scss";
import "./Contact.scss";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      formOpen: false,
    };
  }
  render() {
    return (
      <>
        <div className="bubble" onClick={this.toggleFormOpen}>
          {this.state.formOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.90857 3.51569L20.4649 19.072C20.8552 19.4624 20.8552 20.0959 20.4649 20.4863C20.0746 20.8766 19.441 20.8766 19.0507 20.4863L3.49436 4.9299C3.10403 4.53958 3.10403 3.90601 3.49435 3.51569C3.88468 3.12537 4.51824 3.12537 4.90857 3.51569Z"
                fill="white"
              />
              <path
                d="M20.6777 5.12146L5.12132 20.6778C4.731 21.0681 4.09743 21.0681 3.70711 20.6778C3.31678 20.2875 3.31678 19.6539 3.70711 19.2636L19.2635 3.70725C19.6538 3.31693 20.2873 3.31693 20.6777 3.70725C21.068 4.09757 21.068 4.73114 20.6777 5.12146Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.50114 1.46044C3.79505 4.25002 9.57483 9.15773 11.2736 10.688C11.5016 10.8945 11.7462 10.9995 12.0001 10.9995C12.2535 10.9995 12.4977 10.8955 12.7253 10.6899C14.4255 9.1582 20.2052 4.25002 23.4992 1.46044C23.7043 1.28709 23.7355 0.982406 23.5695 0.770484C23.1857 0.280781 22.6134 0 22.0001 0H2.00016C1.38689 0 0.814593 0.280781 0.430828 0.770531C0.264796 0.982406 0.296062 1.28709 0.50114 1.46044Z"
                fill="white"
              />
              <path
                d="M23.71 2.9724C23.5327 2.8899 23.3242 2.91868 23.1768 3.04468C19.5239 6.14133 14.8618 10.1106 13.395 11.4323C12.5717 12.1755 11.4292 12.1755 10.604 11.4314C9.0405 10.0227 3.80512 5.57199 0.823219 3.04463C0.674766 2.91863 0.465797 2.89083 0.290016 2.97235C0.113297 3.05443 0 3.23119 0 3.426V16.0002C0 17.1033 0.896953 18.0002 2.00002 18.0002H22C23.103 18.0002 24 17.1033 24 16.0002V3.426C24 3.23119 23.8867 3.05396 23.71 2.9724Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        <div
          className={
            this.state.formOpen ? "contact-form visible" : "contact-form"
          }
        >
          <div className="contact-form__main">
            <h1>Hello! ????</h1>
            <p>
              If you would like to contact me regarding any opportunities, I
              would love to hear from you! ????{" "}
            </p>
          </div>
          <div className="contact-form__bottom">
            <a
              className="btn btn--contact"
              href={`mailto:${emailAddress}?subject=Reg - Job Search Portal`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.50114 1.46044C3.79505 4.25002 9.57483 9.15773 11.2736 10.688C11.5016 10.8945 11.7462 10.9995 12.0001 10.9995C12.2535 10.9995 12.4977 10.8955 12.7253 10.6899C14.4255 9.1582 20.2052 4.25002 23.4992 1.46044C23.7043 1.28709 23.7355 0.982406 23.5695 0.770484C23.1857 0.280781 22.6134 0 22.0001 0H2.00016C1.38689 0 0.814593 0.280781 0.430828 0.770531C0.264796 0.982406 0.296062 1.28709 0.50114 1.46044Z"
                  fill="white"
                />
                <path
                  d="M23.71 2.9724C23.5327 2.8899 23.3242 2.91868 23.1768 3.04468C19.5239 6.14133 14.8618 10.1106 13.395 11.4323C12.5717 12.1755 11.4292 12.1755 10.604 11.4314C9.0405 10.0227 3.80512 5.57199 0.823219 3.04463C0.674766 2.91863 0.465797 2.89083 0.290016 2.97235C0.113297 3.05443 0 3.23119 0 3.426V16.0002C0 17.1033 0.896953 18.0002 2.00002 18.0002H22C23.103 18.0002 24 17.1033 24 16.0002V3.426C24 3.23119 23.8867 3.05396 23.71 2.9724Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </>
    );
  }
  toggleFormOpen = () => {
    this.state.formOpen
      ? this.setState({ formOpen: false })
      : this.setState({ formOpen: true });
  };
}

export default Contact;
