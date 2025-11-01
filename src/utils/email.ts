import emailjs from "emailjs-com";

export const sendMail = async (name: string, email:string, message: string,phone:string) => {
    try {
        const templateParams = {
            from_name: name,
            reply_to: email,
            message: message,
            phone:phone
        };

        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        console.log("Email sent ✅", response.status);
        return { success: true };
    } catch (error) {
        console.error("Email send error ❌", error);
        return { success: false };
    }
};
