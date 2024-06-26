import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome.js'; 

const Skills = () => {

    const skillsIcons = [
        { name: 'LinkedIn', link: 'www.linkedin.com/in/faith-o-connor', icon: ['fab', 'linkedin'], color:'text-blue-700 hover:text-blue-800' }
    ];

    const renderSkillsIcons = () => {
        return skillsIcons.map((skillsIcons, index) => (
            <a key={index} href={skillsIcons.link} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={skillsIcons.icon} className={`h-8 w-8 ${skillsIcons.color} mx-2`} />
            </a>
        ));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">My Skills</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
            <div className="flex flex-wrap justify-center">
            {renderSkillsIcons()}
          </div>
          </div>
        </div>
      </div>
    );
};

export default Skills;