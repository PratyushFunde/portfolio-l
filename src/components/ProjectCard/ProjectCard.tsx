import  { useEffect, useState } from 'react'
import styles from "../ProjectCard/ProjectCard.module.css"
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import type { project } from '../../models/project.model';

interface ProjectCardProps {
    project: project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const [currentImg, setCurrentImg] = useState(0);
    const [isHovering, setIsHovering] = useState(true);

    useEffect(() => {
        let interval: any;

        if (isHovering) {
            interval = setInterval(() => {
                setCurrentImg((prev: any) => (prev + 1) % project.images.length);
            }, 2000);
        } else {
            setCurrentImg(0);
        }

        return () => clearInterval(interval);
    }, [isHovering, project.images.length]);

    return (
        <div className={`${styles.card} bd5`}
            onMouseEnter={() => setIsHovering(false)}
            onMouseLeave={() => setIsHovering(true)}
        >

            <div className={`${styles.image_section} bd1`}>
                {/* <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174" alt="" /> */}
                <img key={currentImg}  className={styles.fadeImg}
                 src={`${project.images[currentImg]}`} alt="" />
            </div>

            <div className={`${styles.details} bd3`}>
                <div className={`${styles.title} bd5`}>
                    <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                        {project.title} </p>
                    <p style={{ color: "var(--secondary-color)", fontWeight: "200" }}>
                        {project.description}</p>
                </div>

                <div className={`${styles.tags}`}>
                    <div className={`${styles.tags_container}`} style={{ display: 'flex', gap: '0.2rem' }}>
                        {project.tags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                        ))}
                    </div>

                    <div className={`${styles.arrow}`}>
                        {project.github && <a href={`${project.github}`} target='blank'>
                            <FaGithub size={30} />
                        </a>}
                        {project.live && <a href={`${project.live}`} target='blank'>
                            <CiGlobe size={30} />
                        </a>}
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ProjectCard