import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import axios from "axios";

const NavBar = props => {
  const handleLogout = () => {
    axios.delete("/auth/logout");
    props.clearUser(null);
  };

  return (
    <Navbar
      className=" navbar- flex-row-reverse d-flex "
      style={{
        backgroundColor: "#0E4D92"
      }}
    >
      <Navbar.Brand>
        {/* <Link
          className="text-white"
          style={{ textDecoration: "none", fontSize: "25px" }}
          to="/"
        >
          GloChat
        </Link> */}
      </Navbar.Brand>

      <Nav className="flex-row-reverse d-flex  ">
        {props.user ? (
          <React.Fragment>
            <Link
              className="text-white ml-4"
              style={{ textDecoration: "none", fontSize: "20px" }}
              to="/"
              onClick={handleLogout}
            >
              Logout
            </Link>
            <Link
              className="text-white ml-4"
              style={{ textDecoration: "none", fontSize: "20px" }}
              to="/About"
            >
              About
            </Link>

            <Link
              className="text-white ml-4"
              style={{ textDecoration: "none", fontSize: "20px" }}
              to="/Settings"
            >
              Settings
            </Link>
            <Link
              className="text-white ml-4"
              style={{
                textDecoration: "none",
                fontSize: "20px"
              }}
              to="/"
            >
              Chat
            </Link>
            <div className="d-flex justify-content-start ">
              <img
                src={props.user.profilePic}
                style={{
                  width: "30px",
                  height: "30px",
                  alt: "user-image"
                }}
              />
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "  flex-end"
                }}
              >
                Welcome ! {props.user.username}
              </p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <a
              className="text-white ml-4"
              style={{ textDecoration: "none", fontSize: "20px" }}
              href={`${process.env.REACT_APP_SERVER_URL || ""}/auth/google`}
            >
              Sign in with Google
            </a>

            <Link
              className="text-white ml-4"
              style={{ textDecoration: "none", fontSize: "20px" }}
              to="/login"
            >
              Login
            </Link>

            <Link
              className="text-white ml-4"
              style={{ textDecoration: "none", fontSize: "20px" }}
              to="/signup"
            >
              Signup
            </Link>
          </React.Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
