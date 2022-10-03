import "./Header.scss"
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Header = () => {
    const { scrollYProgress } = useViewportScroll()

    return (
        <header>
            <div className="header-content">
                {/* <h1>Hello, my name is Nhan</h1>
                <h2>I'm a web designer</h2> */}
                <h1>Heading</h1>
                <h2>Subheading</h2>
                <motion.div className="heading-pattern" style={{
                    translateX: "-50%",
                    translateY: useTransform(scrollYProgress, [0, 1], [0, -1400]),
                    rotateX: "-30deg",
                    rotateY: "45deg"
                }}></motion.div>
            </div>
            
            <div className="scene">
                <div className="scene-pattern">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="box center">
                    <div className="box-face box-face-left" style={{"--i" : "0"}}></div>
                    <div className="box-face box-face-front" style={{"--i" : "1"}}></div>
                    <div className="box-face box-face-top"></div>
                </div>
                
                <div className="box left">
                    <div className="box-face box-face-front"></div>
                    <div className="box-face box-face-left"></div>
                    <div className="box-face box-face-top"></div>
                </div>
                
                <div className="box right">
                    <div className="box-face box-face-front"></div>
                    <div className="box-face box-face-left"></div>
                    <div className="box-face box-face-top"></div>
                </div>

                <motion.div className="cube center" style={{
                    translateX: "-50%",
                    translateY: useTransform(scrollYProgress, [0, 1], [-32, -500]),
                    rotateX: "-30deg",
                    rotateY: "-45deg"
                }}>
                    <div className="cube-face cube-face-left" style={{"--i" : "0"}}></div>
                    <div className="cube-face cube-face-front" style={{"--i" : "1"}}></div>
                    <div className="cube-face cube-face-top"></div>
                </motion.div>
                
                <motion.div className="cube top" style={{
                    translateX: "-50%",
                    translateY: useTransform(scrollYProgress, [0, 1], [-88, -1200]),
                    rotateX: "-30deg",
                    rotateY: "-45deg"
                }}>
                    <div className="cube-face cube-face-left" style={{"--i" : "0"}}></div>
                    <div className="cube-face cube-face-front" style={{"--i" : "1"}}></div>
                    <div className="cube-face cube-face-top"></div>
                </motion.div>
                
                <motion.div className="cube right" style={{
                    translateX: useTransform(scrollYProgress, [0, 1], [13.12, 410]),
                    translateY: useTransform(scrollYProgress, [0, 1], [-9.6, 300]),
                    rotateX: "-30deg",
                    rotateY: "-45deg"
                }}>
                    <div className="cube-face cube-face-left" style={{"--i" : "0"}}></div>
                    <div className="cube-face cube-face-front" style={{"--i" : "1"}}></div>
                    <div className="cube-face cube-face-top"></div>
                </motion.div>
                
                <motion.div className="cube left" style={{
                    translateX: useTransform(scrollYProgress, [0, 1], [-77.12, -474]),
                    translateY: useTransform(scrollYProgress, [0, 1], [-9.6, 300]),
                    rotateX: "-30deg",
                    rotateY: "-45deg"
                }}>
                    <div className="cube-face cube-face-left" style={{"--i" : "0"}}></div>
                    <div className="cube-face cube-face-front" style={{"--i" : "1"}}></div>
                    <div className="cube-face cube-face-top"></div>
                </motion.div>

                <div className="cube random-1">
                    <div className="cube-face cube-face-left" style={{"--i" : "0"}}></div>
                    <div className="cube-face cube-face-front" style={{"--i" : "1"}}></div>
                    <div className="cube-face cube-face-top"></div>
                </div>

                <div className="cube random-2">
                    <div className="cube-face cube-face-left" style={{"--i" : "0"}}></div>
                    <div className="cube-face cube-face-front" style={{"--i" : "1"}}></div>
                    <div className="cube-face cube-face-top"></div>
                </div>

                <div className="cube random-3">
                    <div className="cube-face cube-face-left" style={{"--i" : "0"}}></div>
                    <div className="cube-face cube-face-front" style={{"--i" : "1"}}></div>
                    <div className="cube-face cube-face-top"></div>
                </div>
                
                <div className="cube random-4">
                    <div className="cube-face cube-face-left" style={{"--i" : "0"}}></div>
                    <div className="cube-face cube-face-front" style={{"--i" : "1"}}></div>
                    <div className="cube-face cube-face-top"></div>
                </div>

                <motion.div className="sphere center" style={{
                    translateX: "-50%",
                    translateY: useTransform(scrollYProgress, [0, 1], [0, -1000])
                }}></motion.div>

                <div className="sphere left"></div>

                <motion.div className="sphere right" style={{
                    translateX: useTransform(scrollYProgress, [0, 1], [0, -820]),
                    translateY: useTransform(scrollYProgress, [0, 1], [0, 400])
                }}></motion.div>
            </div>
        </header>
    )
}