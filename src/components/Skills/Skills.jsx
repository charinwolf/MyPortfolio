import React, { useState } from 'react'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import './Skills.css'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {
  const [selectedSkill, SetSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    SetSelectedSkill(data)
  }

  return (
   <section className='skills-container'>
    <h5>Capacidades Técnicas</h5>

    <div className="skills-content">
      <div className="skills">
        {SKILLS.map((item) => (
          <SkillCard 
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkill.titlle === item.title}
            onClick={() => {
              handleSelectedSkill(item)
            }} />
        ))}
      </div>

      <div className="skills-info">
        <SkillsInfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills} />
      </div>
    </div>
   </section>
  )
}

export default Skills