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

    renderSkillsSection(sectionName, skillsCategory) {
      const skills = this.renderSkillsByCategory(skillsCategory);
      if (skills.length > 0) {
        return (
          <div className="col-md-12 text-center">
            <h2 className="subsection-title">
              <span className="text-white">{sectionName}</span>
            </h2>
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        );
      }
      return null;
    }
  
    render() {
      const { resumeBasicInfo, sharedSkills } = this.props;
      const sectionTitle = resumeBasicInfo?.section_name?.skills || '';
      const subsections = sharedSkills?.categories || [];
  
      return (
        <section id="skills">
          <div className="col-md-12">
            <div className="col-md-12">
              <h1 className="section-title">
                <span className="text-white">{sectionTitle}</span>
              </h1>
            </div>
            {subsections.map(({ section_name, category }) => (
              resumeBasicInfo?.subsection_name?.[section_name] &&
              this.renderSkillsSection(resumeBasicInfo.subsection_name[section_name], category)
            ))}
          </div>
        </section>
      );
    }
  }
      
export default Skills;
