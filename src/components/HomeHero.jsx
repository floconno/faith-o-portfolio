import React from "react";

const HomeHero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 w-full">
      <div className="hero-content text-center w-full">
        <div className="max-w-full mx-auto">
          <h1 className="text-5xl font-bold m-3">Welcome to my portfolio!</h1>
          <p className="py-6">
            Thank you for taking the time to view my portfolio! Please browse my projects and the rest of my site. Below are links to view my resume and GitHub!
          </p>
          <a className="btn btn-primary m-5" href='https://docs.google.com/document/d/1BihOwOeDVsYWpfUOpa2GJQ555Tdubr-XzQC--uZtKgU/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>View my resume</a>
          <a className="btn btn-primary" href='https://github.com/floconno' target='_blank' rel='noopener noreferrer'>View my GitHub!</a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
