import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../data";
import './Details.css'

const Details = () => {
  const { Id } = useParams();
  const project = ProjectList.find((project) => project.id === Number(Id));
  console.log("Id", typeof Id);
  console.log("project", project);

  return (
    <div className="row">
      {project && (
        
          <div className="col-12 col-md-8 col-lg-12">
          <h1>Clicked detail: {project.id}</h1>
          <h1>Project Name: {project.name}</h1>
          <p> Project Desc: {project.desc}</p>
          <p> Project livesite: {project.liveLink}</p>
          <p>Project Repo: {project.gitRepo}</p>
          {project.img.map((img, i) => (
            <img className="image-size" src={img} key={i} alt=""/> 
          ))}
          </div>
          
        
      )}
    </div>
  );
};

export default Details;
