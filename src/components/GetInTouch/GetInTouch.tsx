import React, { useState } from 'react'
import styles from "./GetInTouch.module.css"
import { sendMail } from '../../utils/email';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import type { E164Number } from "libphonenumber-js/core"; // ← if needed

const GetInTouch = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState<E164Number | undefined>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page refresh
        setIsLoading(true);
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        console.log("Phone",phone)

       
    // Basic validation
    if (!name.trim()) {
        toast.error("Please enter your name");
        setIsLoading(false);
        return;
    }

    if (!email.trim()) {
        toast.error("Please enter your email");
        setIsLoading(false);
        return;
    }

    // Check valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        setIsLoading(false);
        return;
    }

    // if (!phone.trim()) {
    //     toast.error("Please enter your phone number");
    //     setIsLoading(false);
    //     return;
    // }

    // Optional phone validation (10 digits)
    // const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
        toast.error("Please enter phone number !");
        setIsLoading(false);
        return;
    }

    if (!message.trim()) {
        toast.error("Please enter your message");
        setIsLoading(false);
        return;
    }

        const res=await sendMail(name,email,message,String(phone)) ;

        if (res.success) {
            toast.success("Message sent successfully thanks for reaching out! 🎉");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            toast.error("Failed to send message! ❌");
        }

        setIsLoading(false);
    };

    return (
        <div className={`${styles.main}`}>
            <form className={`${styles.input_form} bd5`} onSubmit={handleSubmit}>
                <div className={`${styles.fields_container} bd2`}>

                    <div className={`${styles.input_field} bd1`}>
                        <label htmlFor="name">Name</label>
                        <input
                            className={`${styles.name_input}`}
                            id='name'
                            type="text"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className={`${styles.input_field} bd1`}>
                        <label htmlFor="email">Email</label>
                        <input
                            className={`${styles.name_input}`}
                            id='email'
                            type="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={`${styles.input_field} bd1`}>
                        <label htmlFor="phone">Phone Number</label>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone} />
                    </div>

                    <div className={`${styles.input_field} bd1`}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            className={`${styles.name_input}`}
                            id='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div className={`${styles.input_field}`}>
                        <button type="submit" disabled={isLoading}>{isLoading ? "Sending..." : "Get In Touch"} </button>

                    </div>
                    <ToastContainer position="top-center" />
                </div>
            </form>
        </div>
    )
}

export default GetInTouch
