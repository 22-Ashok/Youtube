import VideoCardContainer from "./VideoCardContainer"
import { useSelector } from "react-redux"

const BodyContainer = () => {
  const isToggle = useSelector((store) => store.toggle.toggleHam)
  return (
    <div className='flex'>
       <div className={`pt-20 flex-grow ${!isToggle ? 'w-screen' : 'ml-[20%]' }`} >
         <VideoCardContainer /> 
       </div>
     
    </div>
  )
}

export default BodyContainer 