import React from "react";
import ProjectCard from "../../components/ProjectCard";
import PetImage from "../../images/readme-patients.png";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Pet2Vet",
      description: "Application description HERE",
      github: "https://github.com/KatieThompson704/pet-to-vet",
      website: "https://damp-forest-39395.herokuapp.com/",
      image: PetImage,
    },
    {
      id: 2,
      title: "Project2",
      description: "Application description HERE",
      github: "https://github.com/KatieThompson704/pet-to-vet",
      website: "https://damp-forest-39395.herokuapp.com/",
      image: PetImage,
    },
    {
      id: 3,
      title: "Project3",
      description: "Application description HERE",
      github: "https://github.com/KatieThompson704/pet-to-vet",
      website: "https://damp-forest-39395.herokuapp.com/",
      image: PetImage,
    },
    {
      id: 4,
      title: "Project4",
      description: "Application description HERE",
      github: "https://github.com/KatieThompson704/pet-to-vet",
      website: "https://damp-forest-39395.herokuapp.com/",
      image: PetImage,
    },
    {
      id: 5,
      title: "Project5",
      description: "Application description HERE",
      github: "https://github.com/KatieThompson704/pet-to-vet",
      website: "https://damp-forest-39395.herokuapp.com/",
      image: PetImage,
    },
    {
      id: 6,
      title: "Project6",
      description: "Application description HERE",
      github: "https://github.com/KatieThompson704/pet-to-vet",
      website: "https://damp-forest-39395.herokuapp.com/",
      image: PetImage,
    },
  ];
  return (
    <main>
      <h2>Portfolio</h2>
      <div
        style={{
          border: "1px solid black",
          margin: "0 auto",
          maxWidth: "1000px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {projects.map(({ id, title, description, github, website, image }) => (
          <ProjectCard
            key={id}
            title={title}
            description={description}
            github={github}
            website={website}
            image={image}
          />
        ))}
      </div>
    </main>
  );
}

export default Portfolio;
