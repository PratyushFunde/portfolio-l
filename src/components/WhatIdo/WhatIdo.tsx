import React from 'react'
import styles from "../WhatIdo/WhatIdo.module.css"
import bulb from "../../assets/bulb.svg"

const WhatIdo = () => {

    const services = [
        {
            id: 1,
            title: "Full Stack Web Development",
            description: "Build responsive and high-performance web applications using modern technologies like React, Node.js, and MongoDB.",
            priceRange: "₹50,000 - ₹2,00,000",
            icon: "💻",
        },
        {
            id: 2,
            title: "API Design & Integration",
            description: "Develop secure RESTful and GraphQL APIs, and integrate third-party services for smooth data exchange.",
            priceRange: "₹20,000 - ₹80,000",
            icon: "🔗",
        },
        {
            id: 3,
            title: "Custom SaaS Product Development",
            description: "End-to-end development of scalable SaaS applications with authentication, billing, and cloud deployment.",
            priceRange: "₹1,00,000 - ₹5,00,000",
            icon: "🚀",
        },
        {
            id: 4,
            title: "E-Commerce Development",
            description: "Create modern e-commerce platforms with product management, secure payments, and user dashboards.",
            priceRange: "₹40,000 - ₹1,50,000",
            icon: "🛍️",
        },
        {
            id: 5,
            title: "Automation & Workflow Tools",
            description: "Build automation scripts to streamline repetitive business tasks and data workflows.",
            priceRange: "₹10,000 - ₹60,000",
            icon: "⚙️",
        },
        {
            id: 6,
            title: "DevOps & CI/CD Setup",
            description: "Set up continuous integration and deployment pipelines for faster, error-free software delivery.",
            priceRange: "₹30,000 - ₹1,00,000",
            icon: "🧰",
        },
        {
            id: 7,
            title: "Performance Optimization",
            description: "Enhance website speed, reduce loading times, and improve Core Web Vitals for SEO and UX.",
            priceRange: "₹15,000 - ₹50,000",
            icon: "⚡",
        },
        {
            id: 8,
            title: "Mobile App Development",
            description: "Build cross-platform mobile apps using React Native with seamless backend integration.",
            priceRange: "₹80,000 - ₹3,00,000",
            icon: "📱",
        },
    ];


    return (
        <div className={`${styles.main}`}>
            <p className='page-title'>What I do</p>


                <div className={`${styles.services} bg4`}>

                    {
                        services.map((service) => (

                            <div className={`${styles.card} bd2`} key={service.id}>
                                <img src={bulb} className={`${styles.bulb_icon}`} alt="bulb_icon" />
                                {/* <p>{service.icon}</p> */}
                                <p className={`${styles.title}`}>{service.title}</p>
                                <p className={`${styles.description}`}>{service.description}</p>
                            </div>
                        ))
                    }

                </div>
        </div>
    )
}

export default WhatIdo