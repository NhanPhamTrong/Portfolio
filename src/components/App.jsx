import { Navbar } from "./Navbar/Navbar"
import { Header } from "./Header/Header"
import { About } from "./About/About"
import { Works } from "./Works/Works"
import { Contact } from "./Contact/Contact"

export const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <main>
                <About />
                <Works />
            </main>
            <Contact />
        </>
    )
}