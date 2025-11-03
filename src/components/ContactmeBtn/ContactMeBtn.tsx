import styles from "./ContactMeBtn.module.css"

const ContactMeBtn = () => {
  const handleEmail = () => {
    window.location.href = "mailto:pratyushfunde04@gmail.com?subject=Contact From Portfolio&body=Hi, I would like to connect.";
  };
  return (
    <div className={`${styles.main}`} onClick={handleEmail}>
      <p>Contact Me</p>
    </div>
  )
}

export default ContactMeBtn