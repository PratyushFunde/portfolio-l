import styles from "./Projects.module.css"
import ProjectCard from '../ProjectCard/ProjectCard';
import type { project } from '../../models/project.model';

const Projects = () => {

    const projects: project[] = [
        {
            title: "WE Learn AI POWERED PLATFORM",
            description: "WE Learn is an AI-powered learning platform that adapts to your pace and goals.Practice interviews personalized according to your resume and requirements .",
            images:[
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762006089/portfolio/project_13_zubxtj.png",
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762005788/portfolio/project_1_zarq92.png",
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762006075/portfolio/project_12_ybfpvw.png"
            ],
            tags:["AI/ML","Angular","Node","Express","CSS","Mongodb"],
            github:'https://github.com/PratyushFunde/Welearn_frontend',
            live:'http://welearn-frontend-8dkd.vercel.app'
        },
        {
            title:"Deorbit Calculator",
            description:"A project I worked on during my internship at OnelabVentures, this is a tool which is useful to calculate the deorbit time of satellite,it hleps users to understand the trajectory easily through graphs and reports.",
            images:[
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762006655/portfolio/Screenshot_2025-11-01_194517_mgel4m.png",
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762006656/portfolio/Screenshot_2025-11-01_194450_us5tlx.png",
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762006656/portfolio/Screenshot_2025-11-01_194606_cxowcp.png",
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762006656/portfolio/Screenshot_2025-11-01_194626_hpdb7m.png",
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762006656/portfolio/Screenshot_2025-11-01_194554_jgqphn.png"
            ],
            tags:["React","FastAPI","Node","React Charts","EC2","Vercel"],
            github:"",
            live:"https://orboticsystems.com/calculator"
        },
        {
            title:"Youtube Summary Generator",
            description:"A simple platform to get summary of youtube videos with experties of AI,just by giving the link of the video.",
            images:[
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762007118/portfolio/Screenshot_2025-11-01_195436_gvtbxy.png",
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762007123/portfolio/Screenshot_2025-11-01_195454_o4txwv.png"
            ],
            tags:["ML","React","Node","SCSS"],
            github:"https://github.com/PratyushFunde/YoutubeVideoSummaryGenerator",
            live:""
        },
        {
            title:"Expense Manager",
            description:"A smart expense management app designed to track spending, categorize transactions, and help you stay financially aware. Visualize your financial habits with intuitive charts and detailed graphs for clearer money decisions.",
            images:[
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762005851/portfolio/project_2_n17q6y.png",
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762007297/portfolio/Screenshot_2025-11-01_195716_zrajto.png",
                "https://res.cloudinary.com/ddi4m85kc/image/upload/v1762007307/portfolio/Screenshot_2025-11-01_195736_d39mdq.png"
            ],
            tags:["React","Google Cloud","Angular","Node","Mongodb",],
            github:"https://github.com/PratyushFunde/Expense-Manager",
            live:""
        }
    ]

    return (
        <div className={`${styles.main} bg4`}>
            <div className={`${styles.card_container} bg2`}>
                {projects.map((project,index)=>(

                <ProjectCard key={index} project={project}/>
                ))}

            </div>
        </div>
    );
}

export default Projects