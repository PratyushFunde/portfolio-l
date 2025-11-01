import React from 'react'
import styles from "../DownloadResume/DownloadResume.module.css"

const DownloadResume = () => {

  const handleDownload=()=>{
    const link=document.createElement("a");
    link.href="/files/Pratyush_Resume.pdf";
    link.download="Pratyush_Resume_8767627948.pdf"
    link.click();
  }

  return (
    <div className={`${styles.main}`} onClick={handleDownload}>
        <p>Download Resume</p>
    </div>
  )
}

export default DownloadResume