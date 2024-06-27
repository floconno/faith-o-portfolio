import React from 'react';
import ProjectCard from '../components/ProjectCard';



    const projectData = [
        {
            title: 'Rx Reflection',
            text: 'This application allows users to track medications they are currentl taking or have taken. They can create a profile that allows them to add medications to their profile with details regarding the name, dose, route, frequency, and more. This application uses Node.js and Express.js to make up a RESTful API, as well as Handlebars.js.',
            imageSrc: 'src/assets/images/rx-reflection-9623b73a46aa.herokuapp.com_.png',
            link1: 'https://rx-reflection-9623b73a46aa.herokuapp.com/',
            link2: 'https://github.com/sfmacdonald/Rx-Reflection',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'Block Buddies',
            text: 'A fun application that allows users to track lego builds that they have put together. The user is able to include details about the set including the name, the build number, how many pieces it has, the theme, the builder age, and the ability to rate the build. They are able to save their builds to their profile and continue to add more as they grow their collection! The technologies used in the application include MongoDB, Express.js, React, and Node.js.',
            imageSrc: 'src/assets/images/block-buddies-e3447dd8369c.herokuapp.com_.png',
            link1: 'https://block-buddies-e3447dd8369c.herokuapp.com/',
            link2: 'https://github.com/sfmacdonald/Block-Buddies',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'Coding Quiz',
            text: 'Are you ready to test your coding knowledge? This application uses HTML, JavaScript, and CSS files that work together to create a coding quiz. The quiz is timed and contains five coding related questions. Be careful, if you answer a question incorrectly, five seconds will be deducted from your time. At the end of the quiz check out the highscores and add your score to the leaderboard!',
            imageSrc: 'src/assets/images/floconno.github.io_code-quiz_.png',
            link1: 'https://floconno.github.io/code-quiz/',
            link2: 'https://github.com/floconno/code-quiz',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'Work Day Scheduler',
            text: 'A work day scheduling application that helps you plan the big day ahead. HTML, JavaScript, and CSS make up this scheduling application and allow the user to input any plans, meetings, appointments, and more to each hour of the day. The hours are color coded based on the past (grey), present (red), and future (green).',
            imageSrc: 'src/assets/images/floconno.github.io_work-day-scheduler_.png',
            link1: 'https://floconno.github.io/work-day-scheduler/',
            link2: 'https://github.com/floconno/work-day-scheduler',
            button1Text: 'Visit the site!',
            button2Text: 'GitHub Repo'
        },
        {
            title: 'E-commerce Back End',
            text: 'Check out the backend of an e-commerce site that allows the user to GET, POST, PUT, and DELETE different categories, products, and tags within the database to manage the products sold on their e-commerce site. ',
            imageSrc: 'src/assets/images/drive.google.com_file_d_1_p2i2beqb1lHknH8tVfJSaiF6BJoLFo6_view.png',
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