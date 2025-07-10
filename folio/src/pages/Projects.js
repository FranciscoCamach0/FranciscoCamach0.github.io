import React, { useState } from "react";
import '../css/background.css';
import '../css/contactPage.css'

import projectsData from '../projectsInfo.json';

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

    const currentProject = projectsData[currentIndex];

    return (
        <div className="projects-container">
            <div className="navigation-header">
                <button 
                    onClick={prevProject}
                    className="nav-button"
                    disabled={projectsData.length <= 1}
                >
                    ← Back
                </button>
                
                <span className="project-counter">
                    {currentIndex + 1} of {projectsData.length}
                </span>
                
                <button 
                    onClick={nextProject}
                    className="nav-button"
                    disabled={projectsData.length <= 1}
                >
                    Next →
                </button>
            </div>

            <div className="project-card">
                <h3>{currentProject.name}</h3>
                <p className = "card-text"><strong>Type:</strong> {currentProject.type}</p>
                <p className = "card-text"><strong>Description:</strong> {currentProject.description}</p>
                <p className = "card-text"><strong>Languages:</strong> {currentProject.languages.join(', ')}</p>
                <p className = "card-text"><strong>Tech:</strong> {currentProject.tech.join(', ')}</p>
                <p className = "card-text"><strong>Status:</strong> {currentProject.status}</p>
                <p className = "card-text"><strong>Duration:</strong> {currentProject.start} - {currentProject.end}</p>
                
                <div className="project-links">
                    {currentProject.repo_link && (
                        <a 
                            href={currentProject.repo_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Repository
                        </a>
                    )}
                    {currentProject.project_link && (
                        <a 
                            href={currentProject.project_link} 
                            className="project-link"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
                
                {currentProject.images && (
                    <div className="project-images">
                        {Array.isArray(currentProject.images) ? 
                            currentProject.images.map((image, imgIndex) => (
                                <img 
                                    key={imgIndex} 
                                    src={image} 
                                    alt={`${currentProject.name} screenshot ${imgIndex + 1}`}
                                    className="project-image"
                                />
                            )) : 
                            <img 
                                src={currentProject.images} 
                                alt={`${currentProject.name} screenshot`}
                                className="project-image"
                            />
                        }
                    </div>
                )}
            </div>

            <div className="dots-indicator">
                {projectsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                    >
                        ●
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Projects;