import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux";
import CommentContainer from './CommentContainer'

const MainVideo = () => {
    const loction = useLocation();
    const query = new URLSearchParams(location.search);
    const vidId = query.get('v');
    const isToggle = useSelector((store) => store.toggle.toggleHam)

    return (
        <div className={`pt-20 ${isToggle? 'ml-[20%]' : 'w-screen' } flex flex-col`}>
            <iframe width="760" height="380" src={`https://www.youtube.com/embed/${vidId}?si=hOwM1o3aID-g6Dc7`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

           <CommentContainer />
        </div>
    )
}

export default MainVideo