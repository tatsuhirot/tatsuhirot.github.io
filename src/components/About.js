import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <a href="https://www.linkedin.com/in/tatsuhiroterada/" target="_blank" rel="noopener noreferrer">
                    <span className="iconify title-icon" data-icon="logos:linkedin-icon" data-inline="false" style={{ fontSize: '50px', margin: "9% 5% 0 5%", cursor: 'pointer' }}></span>
                  </a>
                  <a href="https://github.com/tatsuhirot" target="_blank" rel="noopener noreferrer">
                    <span className="iconify title-icon" data-icon="logos:github-icon" data-inline="false" style={{ fontSize: '50px', margin: "9% 5% 0 5%", cursor: 'pointer' }}></span>
                  </a>
                  {/* <span className="iconify title-icon" data-icon="logos:pytorch-icon" data-inline="false" style={{ fontSize: '50px', margin: "9% 5% 0 5%"}}></span> */}
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
            <div className="row center mx-auto">
            <a
              href="https://drive.google.com/drive/folders/11WnDfqnb2I-0ZystaRqU_vZNNZ7Z4mTT?usp=drive_link"
              className="btn btn-primary download-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
