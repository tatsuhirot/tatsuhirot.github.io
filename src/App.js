import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import BlogLayout from "./BlogLayout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage) {
    document.documentElement.lang = pickedLanguage;
    this.swapCurrentlyActiveLanguage(pickedLanguage);

    var resumePath = '';
    if (document.documentElement.lang === window.$primaryLanguage) {
      resumePath = `./src/data/res_primaryLanguage.json`;
    } else if (document.documentElement.lang === window.$secondaryLanguage) {
      resumePath = `./src/data/res_secondaryLanguage.json`;
    } else if (document.documentElement.lang === window.$tertiaryLanguage) {
      resumePath = `./src/data/res_tertiaryLanguage.json`;
    }

    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(pickedLanguage) {
    var pickedLangIconId = '';
    document.querySelectorAll('.language-icon').forEach(icon => {
      icon.style.filter = "brightness(40%)";
    });

    if (pickedLanguage === window.$primaryLanguage) {
      pickedLangIconId = window.$primaryLanguageIconId;
    } else if (pickedLanguage === window.$secondaryLanguage) {
      pickedLangIconId = window.$secondaryLanguageIconId;
    } else if (pickedLanguage === window.$tertiaryLanguage) {
      pickedLangIconId = window.$tertiaryLanguageIconId;
    }
    document.getElementById(pickedLangIconId).style.filter = "brightness(100%)";
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(window.$primaryLanguage);
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `./data/portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Header sharedData={this.state.sharedData.basic_info} />
          <div className="col-md-12 mx-auto text-center language">
            <div
              onClick={() => this.applyPickedLanguage(window.$primaryLanguage)}
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon mr-5"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() => this.applyPickedLanguage(window.$secondaryLanguage)}
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon mr-5"
                data-icon="twemoji-flag-for-flag-japan"
                data-inline="false"
                id={window.$secondaryLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() => this.applyPickedLanguage(window.$tertiaryLanguage)}
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-spain"
                data-inline="false"
                id={window.$tertiaryLanguageIconId}
              ></span>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<MainPage resumeData={this.state.resumeData} sharedData={this.state.sharedData} />} />
            <Route path="/blog/*" element={<BlogLayout />} />
          </Routes>
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
      </Router>
    );
  }
}

const MainPage = ({ resumeData, sharedData }) => {
  return (
    <>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
    </>
  );
}

export default App;
