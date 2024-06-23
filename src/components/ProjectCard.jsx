import React from "react";

const ProjectCard = ({ title, text, imageAlt, link1, link2, button1Text, button2Text }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt={imageAlt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={link1} target='_blank' rel="noopener noreferrer">{button1Text}</a>
          <a className="btn btn-primary" href={link2} target='_blank' rel="noopener noreferrer">{button2Text}</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
