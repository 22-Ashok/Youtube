import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideoCardContainer = () => {
     const [allVideos, setAllVideos] = useState(null);

    const videoFetching = async () => {
        try{
            const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&regionCode=IN&key="+import.meta.env.VITE_YT_API_KEY)
            const json = await response.json();
            setAllVideos(json.items)
        } catch (error) {
            console.log('error:',error);
        }
    }

      useEffect(() => {
         videoFetching();
      },[])

      if(!allVideos) {
        return <div> loading... </div>
      }

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
      {allVideos.map((video) => <VideoCard key={video.id} video={video} /> )}
    </div>
    )
}

export default VideoCardContainer;