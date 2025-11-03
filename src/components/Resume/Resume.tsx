import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import styles from "../Resume/Resume.module.css"

const Resume = () => {
    return (
        <div className={`${styles.main} bg2`}>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">


                <div className={`${styles.pdf_container}`}>
                    <Viewer fileUrl="/files/Pratyush_Resume.pdf" />
                </div>
            </Worker>
        </div>
    )
}

export default Resume;