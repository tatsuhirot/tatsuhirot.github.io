import React, { Component } from 'react';

class Skills extends Component {
  renderSkillsByCategory(category) {
    // Filter skills by category and map to list items
    return this.props.sharedSkills.icons
      .filter(skill => skill.category === category)
      .map((skill, i) => (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={skill.class} style={{ fontSize: '220%' }}>
                <p className="text-center" style={{ fontSize: '30%', marginTop: '4px' }}>
                  {skill.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      ));
  }

  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var knowledge = this.renderSkillsByCategory('knowledge');
      var programmingSkills = this.renderSkillsByCategory('programming');
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
                <span className="text-white">Knowledge</span>
              </h2>
              <ul className="list-inline mx-auto skill-icon">{knowledge}</ul>

              <h2 className="subsection-title">
                <span className="text-white">Programming Skills</span>
              </h2>
              <ul className="list-inline mx-auto skill-icon">{programmingSkills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
