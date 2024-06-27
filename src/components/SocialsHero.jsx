import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontAwesome.js';

const Socials = () => {

    const socialsIcons = [
        { name: 'GitHub', link:'https://github.com/floconno', icon: ['fab', 'github'], color:'text-blue-200 hover:text-blue-700' },
        { name: 'LinkedIn', link:'https://www.linkedin.com/in/faith-o-connor/', icon: ['fab', 'linkedin'], color:'text-blue-200 hover:text-blue-700' },

    ];

    const renderSocialsIcons = () => {
        return socialsIcons.map((socialIcon, index) => (
          <div key={index} className="flex flex-col items-center mx-2">
            <a href={socialIcon.link} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={socialIcon.icon} className={`h-20 w-20 ${socialIcon.color} mx-2`} />
            </a>
            <span className="mt-2 text-base">{socialIcon.name}</span>
            </div>
        ));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Let's Connect!</h1>
            <p className="py-6"></p>
            <div className="flex flex-wrap justify-center">
            {renderSocialsIcons()}
          </div>
          </div>
        </div>
      </div>
    );
};


export default Socials;
