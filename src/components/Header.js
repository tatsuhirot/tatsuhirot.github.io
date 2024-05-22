import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Typical from "react-typical";
import Switch from "react-switch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink as Link } from "react-router-hash-link";

class Header extends Component {
  titles = [];
  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return <Typical className="title-styles" steps={this.titles} loop={50} />
      },
      (props, prevProp) => true
    );

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
          <div className="container">
            <Navbar.Brand as={Link} to="/">Tatsuhiro Terada</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/#about">About</Nav.Link>
                <Nav.Link as={Link} to="/#portfolio">Projects</Nav.Link>
                <Nav.Link as={Link} to="/#skills">Skills</Nav.Link>
                <Nav.Link as={Link} to="/#resume">Experience</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <div className="row aligner" style={{ height: '100%' }}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="fa:ship" data-inline="false"></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#4f73ae"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
