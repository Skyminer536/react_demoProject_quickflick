import VideoCard from "../components/videoCard";
import {videoData} from "../data/videoData"
import Footer from "../components/footer"

const Home = () => {

    let featuredVid = Math.floor(Math.random() * videoData.length); 
    return (
        <>
        <h1>Home</h1>
        <div>
            <h2>Welcome to QuickFlick!</h2>
            <p>Kick back, find a snack, and pick a video to watch!</p>
        </div>
        <h2>Popular Videos:</h2>
        <div className="popularVideoDiv">
            
                <div className="featuredVideo">
                    <VideoCard data={videoData[featuredVid]}/>
                </div>
                <div className="featuredVideo">
                    <VideoCard data={videoData[featuredVid+1]}/>
                </div>
            
            
        </div>

        <Footer />
        </>
    ) 
}

export default Home;