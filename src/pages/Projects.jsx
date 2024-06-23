import React from 'react';
import ProjectCard from '../components/ProjectCard';



    const projectData = [
        {
            title: 'Rx Reflection',
            text: 'Medication Tacker',
            imageSrc: '',
            link1: 'https://rx-reflection-9623b73a46aa.herokuapp.com/',
            link2: 'https://github.com/sfmacdonald/Rx-Reflection',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'Block Buddies',
            text: 'Lego build tracker',
            imageSrc: '',
            link1: 'https://block-buddies-e3447dd8369c.herokuapp.com/',
            link2: 'https://github.com/sfmacdonald/Block-Buddies',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'Coding Quiz',
            text: 'A quiz to test your coding knowledge',
            imageSrc: '',
            link1: 'https://floconno.github.io/code-quiz/',
            link2: 'https://github.com/floconno/code-quiz',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'Work Day Scheduler',
            text: 'Help you schedule your work day',
            imageSrc: '',
            link1: 'https://floconno.github.io/work-day-scheduler/',
            link2: 'https://github.com/floconno/work-day-scheduler',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'E-commerce Back End',
            text: 'ORM for the backend of an e-commerce site',
            imageSrc: '',
            link1: 'https://drive.google.com/file/d/1_p2i2beqb1lHknH8tVfJSaiF6BJoLFo6/view',
            link2: 'https://github.com/floconno/ecom-backend',
            button1Text: 'Check out the demo!',
            button2Text: 'GitHub Repo'
        }
    ];

    const Projects = () => {
        return (
            <div className="container mx-auto p-4">
                <h1 className='text-3xl font-bold mb-6'>Check out my projects!</h1>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        );
    };


export default Projects;