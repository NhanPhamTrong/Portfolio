import "./Works.scss"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
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

export const Works = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [control, inView])

    const [count, setCount] = useState(0)

    const ClickBack = () => {
        control.start("hidden")
        setTimeout(() => {
            setCount(count !== 0 ? count - 1 : workList.length - 1)
            control.start("visible")
        }, 400)
    }

    const ClickForward = () => {
        control.start("hidden")
        setTimeout(() => {
            setCount(count === workList.length - 1 ? 0 : count + 1)
            control.start("visible")
        }, 400)
    }

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div id="works">            
            <button className="back-btn" type="button" onClick={ClickBack}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button className="forward-btn" type="button" onClick={ClickForward}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
            <motion.div className="work-content"
                ref={ref}
                variants={animation}
                animate={control}
                initial="hidden">
                    <div className="illustrator">
                        <img src={workList[count].image} alt="" />
                    </div>
                <div className="text">
                    <button type="button" onClick={() => {openInNewTab(workList[count].link)}}>{workList[count].title}</button>
                    <p>{workList[count].description}</p>
                </div>
            </motion.div>
            <button className="my-dribble" onClick={() => {openInNewTab("https://dribbble.com/Nhan_Pham")}}>
                My Dribble
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
        </div>
    )
}