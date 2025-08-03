import VideoCard from "../components/videoCard";
import {videoData} from "../data/videoData"
import Footer from "../components/footer"


const Videos = () => {
    return (
        <>
            <div>
                <div className="videoContainer">
                {videoData.map((item) => <VideoCard data={item}/>)}
                </div>
            </div>
            <Footer />
        
        </>
    ) 
}

export default Videos;


