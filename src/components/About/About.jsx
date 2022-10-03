import "./About.scss"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const CubeFace = (props) => {
    const animation = {
        visible: { opacity: 1, transition: {duration: 0.6} },
        hidden: { opacity: 0 }
    }

    const control = useAnimation()
    const [ref, inView] = useInView()
  
    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])
  
    return (
        <motion.div className={"cube-face cube-face-" + props.facePosition} style={props.style}
            ref={ref}
            variants={animation}
            animate={control}
            initial="hidden"></motion.div>
    )
}

const Cube = (props) => {
    const animation = {
        visible: { translateX: 0, rotateX: -30, rotateY: -45, transition: {duration: 0.6} },
        hidden: { translateX: 12, rotateX: -30, rotateY: -45 }
    }

    const control = useAnimation()
    const [ref, inView] = useInView()
  
    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])
  
    return (
        <motion.div className={"cube " + props.size}
            ref={ref}
            variants={animation}
            animate={control}
            initial="hidden">
            <CubeFace facePosition="left" style={{"--i" : "0"}} />
            <CubeFace facePosition="front" style={{"--i" : "1"}} />
            <CubeFace facePosition="top" />
            <CubeFace facePosition="bottom" />
        </motion.div>
    )
}

const H1 = () => {
    const animation = {
        visible: { opacity: 1, translateX: 0,  transition: {duration: 0.6} },
    hidden: { opacity: 0, translateX: -16 }
    }

    const control = useAnimation()
    const [ref, inView] = useInView()
  
    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    return (
        <motion.h1
            ref={ref}
            variants={animation}
            animate={control}
            initial="hidden">--What I do</motion.h1>
    )
}

const H2 = () => {
    const animation = {
        visible: { opacity: 1, translateY: 0, transition: {duration: 0.6} },
        hidden: { opacity: 0, translateY: 8 }
    }

    const control = useAnimation()
    const [ref, inView] = useInView()
  
    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    return (
        <motion.h2
            ref={ref}
            variants={animation}
            animate={control}
            initial="hidden">I enjoy creating delightful website</motion.h2>
    )
}

const ContactBtn = () => {
    const animation = {
        visible: { opacity: 1, translateX: 0, transition: {duration: 0.6} },
        hidden: { opacity: 0, translateX: 16 }
    }

    const control = useAnimation()
    const [ref, inView] = useInView()
  
    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    return (
        <motion.a className="contact-btn" href="#contact"
            ref={ref}
            variants={animation}
            animate={control}
            initial="hidden">
                Contact me
        </motion.a>
    )
}

export const About = () => {
    return (
        <div id="about">
            <div className="scene">
                <div className="scene-pattern"></div>
                <Cube />
                <Cube size="small" />
                <Cube size="small" />
            </div>
            <div className="about-content">
                <H1 />
                <H2 />
                <ContactBtn />
            </div>
        </div>
    )
}