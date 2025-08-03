
import Footer from "../components/footer"

const About = () => {
    return (
        <>
            <h1>About</h1>
            <p>Here at QuickFlick, we pride ourselves on offering the highest quality of internet entertainment to our users. </p>
            <div className="aboutDiv">
                <h2>Movies</h2>
                <p>QuickFlick will occasionally add new movies to it's movie collection for viewers to watch, so check back often to see whats new!</p>
            </div>
            <div className="aboutDiv">
                <h2>Videos</h2>
                <p>From funny cats to how-to videos, QuickFlick has got your back with our growing collection of digital internet videos for you to browse to your hearts content!</p>
            </div>

            <Footer />

        </>

    ) 
}

export default About;