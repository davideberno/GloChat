import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck, Button } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <div>
        <Card className="text-center container border border-dark p-4 mt-4">
          <Card.Header
            style={{ fontWeight: "bolder", fontSize: "20px", color: "#1D2951" }}
          >
            About GloChat
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "15px", color: "  #5b342e" }}>
              GloChat is a web App which help people around the world to connect
              with each other and can also exchange messages with different
              people in different languages globally.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center container border border-dark p-4 mt-4">
          <Card.Header
            style={{ fontWeight: "bolder", fontSize: "20px", color: "#1D2951" }}
          >
            How to use this App?
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "15px", color: "#5b342e" }}>
              Simply Signup and Login with your credentials, choose the language
              in which you want to chat and connect with people around the
              globe.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center container border border-dark p-4 mt-4">
          <Card.Header
            style={{ fontWeight: "bolder", fontSize: "20px", color: "#1D2951" }}
          >
            About us!
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "15px", color: "#5b342e" }}>
              This project was made as part of the Ironhack Web Development
              bootcamp in Berlin by Davide Bernocchi, Floriano Albertini and
              Madhavi Yalamanchili. The aim of the project was to build our
              full-stack MERN web application. This was our final project during
              the bootcamp and the development time was one week. You can check
              out the Github repo here.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center container border border-dark p-4 mt-4">
          <Card.Header
            style={{ fontWeight: "bolder", fontSize: "20px", color: "#1D2951" }}
          >
            Technologies Used
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "15px", color: "#5b342e" }}>
              The tech stack we used was the MERN stack: HTML/CSS,
              JavaScript,Bootstrap, Node.js,MongoDB,Cloudinary(Pictures)
              Express.js,Socket.io,Microsoft Azure API(Translation) and
              React.js.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card.Footer className="text-center">
          Find the Project Repo on{" "}
          <a
            href="https://github.com/davideberno/GloChat"
            style={{ color: "#1D2951", fontWeight: "bold" }}
          >
            Github
          </a>
        </Card.Footer>
      </div>
    );
  }
}
export default About;