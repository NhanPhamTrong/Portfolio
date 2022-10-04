import "./Works.scss"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { wrap } from "popmotion"
import toDoApp from "../../assets/images/to-do-app.PNG"

const workList = [
    {
        image: toDoApp,
        title: "To do app 1",
        link: "https://dribbble.com/Nhan_Pham",
        description: "Description",
        isActive: false
    },
    {
        image: toDoApp,
        title: "To do app 2",
        link: "https://dribbble.com/Nhan_Pham",
        description: "Description Description",
        isActive: false
    },
    {
        image: toDoApp,
        title: "To do app 3",
        link: "https://dribbble.com/Nhan_Pham",
        description: "Description Description Description",
        isActive: false
    },
    {
        image: toDoApp,
        title: "To do app 4",
        link: "https://dribbble.com/Nhan_Pham",
        description: "Description Description Description Description",
        isActive: false
    },
    {
        image: toDoApp,
        title: "To do app 5",
        link: "https://dribbble.com/Nhan_Pham",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        isActive: false
    }
]

const animation = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        }
    }
}

const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
}

export const Works = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    const [[page, direction], setPage] = useState([0, 0])
    
    const workIndex = wrap(0, workList.length, page)

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <div id="works">            
            <button className="back-btn" type="button" onClick={() => paginate(-1)}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button className="forward-btn" type="button" onClick={() => paginate(1)}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
            <motion.div className="work-content"
                ref={ref}
                variants={animation}
                animate={control}
                initial="hidden">
                <AnimatePresence custom={direction}>
                    <div className="illustrator">
                        <motion.img alt=""
                            key={page}
                            src={workList[workIndex].image}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 }
                            }}
                        />
                    </div>
                    <div className="text">
                        <motion.div className="container"
                            key={page}
                            workIndex={workIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 }
                            }}>
                                <button type="button" onClick={() => {openInNewTab(workList[workIndex].link)}}>{workList[workIndex].title}</button>
                                <p>{workList[workIndex].description}</p>
                        </motion.div>
                    </div>
                </AnimatePresence>
            </motion.div>
            <button className="my-dribble" onClick={() => {openInNewTab("https://dribbble.com/Nhan_Pham")}}>
                My Dribble
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
        </div>
    )
}