import React, { useEffect, useRef } from 'react'
import styles from './Experience.module.css'

const experiences = [
  {
    company: 'Onelab Ventures',
    role: 'SDE',
    period: '2025— Present',
    bullets: [
        'Built UI components with React + TypeScript', 
        'Improved performance and accessibility', 
        'Led small cross-functional feature teams', 
        "Shipped end-to-end features and CI pipelines"
    ]
  },
  {
    company: 'iMocha',
    role: 'Intern',
    period: '2024 — 2024',
    bullets: [
        "Worked on binding RSET API's to the frontend on Angular", 
        'Shipped features on the platform as per equirement', 
        "Explored the field of Prompt Engineering"]
  },
  {
    company: 'Chegg',
    role: 'Subject Matter Expert (Freelance)',
    period: '2024',
    bullets: [
        'Worked on the Chegg platform as SME (Mathemetics)', 
        'Solved more than 200 question', 
        '4 star rating on work.']
  }
]

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // reveal children with stagger
            const cards = Array.from(el.querySelectorAll(`.${styles.card}`)) as HTMLElement[]
            cards.forEach((c, i) => {
              c.style.transitionDelay = `${i * 120}ms`
              c.classList.add(styles.visible)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      
      <div className={styles.grid}>
        {experiences.map((exp, idx) => (
          <article key={idx} className={styles.card} aria-label={`${exp.role} at ${exp.company}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.role}>{exp.role}</h3>
              <span className={styles.period}>{exp.period}</span>
            </div>
            <p className={styles.company}>{exp.company}</p>
            <ul className={styles.bullets}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Experience
