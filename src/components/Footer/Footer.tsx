import styles from "./Footer.module.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div>

            <div className={`${styles.main}`}>
                <div className={`${styles.left}`}>
                    <p>Let's <br /> Work Together</p>
                </div>
                <div className={`${styles.right}`}>
                    <MdEmail size={20} style={{ marginTop: "0.3rem" }} />
                    <p>pratyushfunde04@gmail.com</p>
                </div>
            </div>

            <hr />

            <div className={`${styles.footer}`} style={{
                display: "flex",
                justifyContent: "space-between",
                padding: '1rem'
            }}>
                <div>

                    <p>© 2025 All rights reserved.</p>
                </div>

                <div className={`${styles.social_links}`}>
                    <a href="https://www.linkedin.com/in/pratyush-funde-254270316/" target='blank'><FaLinkedin size={25} /></a>
                    <a href="https://github.com/PratyushFunde" target='blank'><FaGithubAlt size={25} /></a>
                    <a href="https://peerlist.io/pratyushfunde" target='blank'><SiPeerlist size={25} /></a>
                    <a href="https://x.com/pratyushfunde" target='blank'><BsTwitterX size={25} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer