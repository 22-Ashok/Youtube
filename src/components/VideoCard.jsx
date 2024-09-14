import { Link } from "react-router-dom"
const VideoCard = ({video}) => {

    return (
        <Link to={`/watch?v=${video.id}`}>
           <div
          key={video.id}
          className="w-60 shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
          onClick={() => console.log(video.snippet.title)}
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className="w-full h-36 object-cover"
          />
          <div className="p-2">
            <h3 className="font-semibold text-sm truncate">
              {video.snippet.title}
            </h3>
            <p className="text-gray-600 text-xs">
              {video.snippet.channelTitle}
            </p>
          </div>
        </div>
        </Link>
    )
}

export default VideoCard