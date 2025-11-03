import styles from "./Poster.module.css"
import poster from "../../assets/bgrpreview.png"

const Poster = () => {
  return (
    <div className={`${styles.main} bd1`}>
      <img className='' src={poster} alt="" />
    </div>
  )
}

export default Poster