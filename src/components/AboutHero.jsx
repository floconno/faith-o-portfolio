import React from "react";

const AboutHero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="src/assets/images/IMG_2885 (1).jpeg"
          className="max-w-xs rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Me!</h1>
          <p className="py-6">
            I graduated from ASU with a B.A. in Art History in December 2023. Towards the end of completing my degree I decided to take on a new and exciting challenge and enrolled in a Full-Stack Coding Bootcamp. My bootcamp was six months long and pushed me to learn things I had never even heard of before. HTML, CSS, JavaScript, React, Node.js, and MySQL are just a few of the skills I was able to learn about. My passion for creativity and art fuels my desire to continue learning and challenging my web development skills. Check out the rest of my skills below!
          </p>
        </div>
      </div>
    </div>
  );
};


export default AboutHero;