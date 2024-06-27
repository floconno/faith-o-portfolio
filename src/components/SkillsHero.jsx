import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome.js'; 

const Skills = () => {

    const skillsIcons = [
        { name: 'JavaScript', icon: ['fab', 'js'], color:'text-blue-200 hover:text-blue-700' },
        { name: 'React', icon: ['fab', 'react'], color:'text-blue-200 hover:text-blue-700' }
    ];

    const renderSkillsIcons = () => {
        return skillsIcons.map((skillsIcons, index) => (
          <div key={index} className="flex flex-col items-center mx-2">
            <a key={index} href={skillsIcons.link} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={skillsIcons.icon} className={`h-20 w-20 ${skillsIcons.color} mx-2`} />
            </a>
            <span className="mt-2 text-base">{skillsIcons.name}</span>
            </div>
        ));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">My Skills</h1>
            <p className="py-6"></p>
            <div className="flex flex-wrap justify-center">
            {renderSkillsIcons()}
          </div>
          </div>
        </div>
      </div>
    );
};

export default Skills;