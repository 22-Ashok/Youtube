import { Outlet } from "react-router-dom"
import NavBar from './NavBar'
import { useSelector } from "react-redux"
import SearchList from './SearchList'

const Body = () => {
     const isToggle = useSelector((store) => store.toggle.toggleHam);
     const isPresent = useSelector((store) => store.toggle.suggestions);
    return (
        <>
        {isToggle && <NavBar />}
        { isPresent.length > 0 && <SearchList /> }
        <Outlet />
        </>
    )
}

export default Body