import { Home,Subscriptions,SlowMotionVideo,SwitchAccount,PlaylistPlay,History,ThumbUpOffAlt,WatchLater,PlayCircle,TrendingUp,ShoppingCart,LocalMovies,MusicNote,SportsEsports,OnlinePrediction,Settings,Feedback,Report } from '@mui/icons-material'

const NavBar = () => {

    return (
        <div className='pt-20 px-4 bg-gray-100 w-[20%] fixed  h-screen overflow-scroll'>
            {/* section-1 */}
            <div className='py-2 border-b border-b-black'>
                <ul className='py-1'>
                    <li className='font-bold text-lg hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <Home /> Home</li>
                    <li className='font-bold text-lg hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <SlowMotionVideo /> Shorts</li>
                    <li className='font-bold text-lg hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <Subscriptions /> Subscription</li>
                </ul>
            </div>

            {/* section-2 */}
            <div className='py-2 border-b border-b-black'>
                <h1 className='font-bold text-lg'>You</h1>
                <ul className='py-1'>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <SwitchAccount /> Your channel</li>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <PlaylistPlay /> Playlist</li>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <History /> History</li>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <PlayCircle /> Your Videos</li>
                    <li className='font-bold hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <WatchLater /> Watch later</li>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <ThumbUpOffAlt /> Liked Videos</li>
                </ul>
            </div>

            {/* section-3 */}
            <div className='py-2 border-b border-b-black'>
                <h1 className='font-bold text-lg'>Trending</h1>
                <ul className='pb-1'>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <TrendingUp /> Trending</li>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <ShoppingCart /> Shoping</li>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <MusicNote /> Music</li>
                    <li className='font-bold hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <LocalMovies /> Movies</li>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <OnlinePrediction /> Live</li>
                    <li className='font-bold  hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <SportsEsports /> Gamming</li>
                </ul>
            </div>

            {/* section-4 */}
            
            <div className='py-2 border-b border-b-black'>
                <ul className='py-1'>
                    <li className='font-bold text-lg hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <Settings /> Setting</li>
                    <li className='font-bold text-lg hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <Report /> Report</li>
                    <li className='font-bold text-lg hover:bg-gray-300 cursor-pointer px-2 rounded-full'> <Feedback /> Feed Back</li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar