import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome.js'; 
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";

const Skills = () => {

    const skillsIcons = [
        { name: 'JavaScript', icon: ['fab', 'js'], color:'text-blue-200 hover:text-blue-700', type: 'font-awesome' },
        { name: 'React', icon: ['fab', 'react'], color:'text-blue-200 hover:text-blue-700', type: 'font-awesome' },
        { name: 'HTML', icon: ['fab', 'html5'], color:'text-blue-200 hover:text-blue-700', type: 'font-awesome' },
        { name: 'CSS', icon: ['fab', 'css3-alt'], color:'text-blue-200 hover:text-blue-700', type: 'font-awesome' },
        { name: 'Node.js', icon: ['fab', 'node'], color:'text-blue-200 hover:text-blue-700', type: 'font-awesome' },
        { name: 'MongoDB', icon: SiMongodb, color:'text-blue-200 hover:text-blue-700', type: 'react-icons' },
        { name: 'Express.js', icon: SiExpress, color:'text-blue-200 hover:text-blue-700', type: 'react-icons' },
        { name: 'MySQL', icon: SiMysql, color:'text-blue-200 hover:text-blue-700', type: 'react-icons' },
        { name: 'Git', icon: ['fab', 'git-alt'], color:'text-blue-200 hover:text-blue-700', type: 'font-awesome' },

    ];

    const renderSkillsIcons = () => {
        return skillsIcons.map((skillsIcon, index) => (
          <div key={index} className="flex flex-col items-center mx-2">
            <a key={index} href={skillsIcon.link} target='_blank' rel='noopener noreferrer'>
              {skillsIcon.type === 'font-awesome' ? (
                <FontAwesomeIcon icon={skillsIcon.icon} className={`h-20 w-20 ${skillsIcon.color} mx-2`} />
              ) : (
                <skillsIcon.icon className={`h-20 w-20 ${skillsIcon.color} mx-2`} />
              )}
            </a>
            <span className="mt-2 text-base">{skillsIcon.name}</span>
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