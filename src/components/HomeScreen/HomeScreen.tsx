import styles from "./HomeScreen.module.css"
import Poster from '../Poster/Poster'
import ContactMeBtn from '../ContactmeBtn/ContactMeBtn'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import GetInTouch from '../GetInTouch/GetInTouch'
import Footer from '../Footer/Footer'

const HomeScreen = () => {


  return (
    <div className={`${styles.main} bd5`}>
      <section id='home'>
        <div className={`${styles.content} bd1`}>
          <Poster />
          <div className={`${styles.title} bd2`}>
            <p className={`${styles.name}`}>Pratyush Funde</p>
            <p className={`${styles.profession}`}>Software Engineer</p>
          </div>
          <div className={`${styles.introduction} bd4`}>
            <p>As a passionate full-stack developer, with expertise in both <span className={`${styles.keyword}`}> frontend </span> and <span className={`${styles.keyword}`}> backend </span> technologies, I thrive on building scalable, <span className={`${styles.keyword}`}> high-performance </span> applications. My work bridges user experience and robust system design, while my growing knowledge in <span className={`${styles.keyword}`}> AI </span> and <span className={`${styles.keyword}`}> DevOps </span> enables me to create intelligent, automated, and efficient digital solutions.</p>
          </div>
          <div className={`${styles.contact_me_btn_container} bd2`}>
            <ContactMeBtn />
          </div>


        </div>
      </section>


      <section id="experience" className={`${styles.page_section}`}>
        <p className='page-title' style={{ alignSelf: "center", justifySelf: 'center' }}>EXPERIENCE</p>
        <Experience />
      </section>

      <section id="projects" className={`${styles.page_section}`}>
        <p className='page-title' style={{ alignSelf: "center", justifySelf: 'center' }}>PROJECTS</p>
        <Projects />
      </section>

      <section id="about" className={`${styles.about_section} ${styles.page_section}`}>
        <About />
      </section>
      <section id="getInTouch">
        <p className='page-title' style={{ alignSelf: "center", justifySelf: 'center' }}>Get In Touch</p>
        <GetInTouch />
      </section>

      <section>
        <Footer />

      </section>

      <section id='resume' className={`${styles.page_section}`}>
        {/* <Resume /> */}
      </section>
    </div>
  )
}

export default HomeScreen