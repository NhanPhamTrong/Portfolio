import "./Contact.scss"
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useRef } from "react"

const animation = {
    "visible": { opacity: 1, translateY: 0, transition: { duration: 0.4 } },
    "hidden": { opacity: 0, translateY: 10 }
}

const ContactForm = () => {
    const form = useRef()    
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_q7dgv26', 'template_sqtf7vh', form.current, 'jLjfcL8cPM8AWxlFr')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <motion.div className="contact-form"
            ref={ref}
            variants={animation}
            animate={control}
            initial="hidden">
            <form ref={form} onSubmit={sendEmail}>
                <h1>Send a message</h1>
                <div className="input-box w50">
                    <input type="text" required />
                    <span>Last Name</span>
                </div>
                <div className="input-box w50">
                    <input type="text" required />
                    <span>First Name</span>
                    </div>
                <div className="input-box w50">
                    <input type="email" required />
                    <span>Email Address</span>
                </div>
                <div className="input-box w50">
                    <input type="text" required />
                    <span>Phone Number</span>
                </div>
                <div className="input-box w100">
                    <textarea name="message" required></textarea>
                    <span>Write your message here...</span>
                </div>
                <input type="submit" value="Send" />
            </form>
        </motion.div>
    )
}

const ContactInfo = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <motion.div className="contact-info"
            ref={ref}
            variants={animation}
            animate={control}
            initial="hidden">
            <ul>
                <li>
                    <button type="button" onClick={() => {openInNewTab("https://www.facebook.com/trongnhan.pham.1/")}}>
                        <ion-icon name="logo-facebook"></ion-icon>
                    </button>
                </li>
                <li>
                    <button type="button" onClick={() => {openInNewTab("https://github.com/NhanPhamTrong")}}>
                        <ion-icon name="logo-github"></ion-icon>
                    </button>
                </li>
                <li>
                    <button type="button" onClick={() => {openInNewTab("https://github.com/NhanPhamTrong")}}>
                        <ion-icon name="logo-twitter"></ion-icon>
                    </button>
                </li>
                <li>
                    <button type="button" onClick={() => {openInNewTab("https://dribbble.com/Nhan_Pham")}}>
                        <ion-icon name="logo-dribbble"></ion-icon>
                    </button>
                </li>
            </ul>
            <hr />
        </motion.div>
    )
}

export const Contact = () => {
    return (
        <footer id="contact">
            <ContactForm />
            <ContactInfo />
            <div className="mark"></div>
        </footer>
    )
}