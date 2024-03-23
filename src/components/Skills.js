import React, { Component } from "react";

class Skills extends Component {
  renderSkillIcons(skills) {
    return skills.map((skill, i) => (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-tile">
            <i className={skill.class} style={{ fontSize: "220%" }}>
              <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                {skill.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    ));
  }

  render() {
    let technicalSkills = [];
    let programmingSkills = [];
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      if (this.props.sharedSkills.technical && this.props.sharedSkills.technical.icons) {
        technicalSkills = this.renderSkillIcons(this.props.sharedSkills.technical.icons);
      }
      if (this.props.sharedSkills.programming && this.props.sharedSkills.programming.icons) {
        programmingSkills = this.renderSkillIcons(this.props.sharedSkills.programming.icons);
      }
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <h2 className="subsection-title">
              <span className="text-white">Industrial Skills</span>
            </h2>
            <ul className="list-inline mx-auto skill-icon">{technicalSkills}</ul>
            <h2 className="subsection-title">
              <span className="text-white">programming Skills</span>
            </h2>
            <ul className="list-inline mx-auto skill-icon">{programmingSkills}</ul>
          </div>
        </div>
      </section>
    );
  }
}


export default Skills;
