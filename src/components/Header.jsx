import { useState, useEffect } from 'react'
import { Menu, AccountCircle, Search } from '@mui/icons-material'
import ytLogo from '../logo/youtube.svg'
import { useDispatch,useSelector } from 'react-redux';
import { togglefunction, searchSuggestions } from '../redux/slices/toggleSlice'
import { addSearchList } from '../redux/slices/searchSlice'

const Header = () => {
  const[searchQuerry, setSearchQuerry ] = useState('');
  const dispatch = useDispatch();
  const cacheSearch = useSelector((store) => store.searchList);

  const searchList = async () => {
      const response = await fetch(` http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuerry}`);
      const json = await response.json();
      dispatch(searchSuggestions(json[1]));
      dispatch(addSearchList({[searchQuerry]:json[1]}));
  }

  useEffect(() => {
    
   const timmer = setTimeout(() => {
      if(!searchQuerry)  dispatch(searchSuggestions([]));

       if(cacheSearch[searchQuerry]) {
         return;
       } else {
        searchList();
       }
   }, 200);

   return () => clearTimeout(timmer);
  },[searchQuerry])
   
    return (
        <div className='flex justify-between px-4 py-1 items-center fixed w-screen bg-white shadow-md z-20'>
        {/* Left Section: Menu Icon and Logo */}
        <div className='flex items-center'>
          <Menu className='cursor-pointer' style={{fontSize: '28px'}} onClick={() => dispatch(togglefunction())} />
          <img src={ytLogo} alt='logo' className='h-16 w-16 ml-3' />
        </div>
        
        {/* Middle Section: Search Bar */}
        <div className='flex items-center w-5/12 mr-5'>
          <input 
            type='text' 
            className='w-full border-2 border-r-0 rounded-l-full px-4 py-1 focus:outline-none' 
            placeholder='Search here...'
            value={searchQuerry}
            onChange={(e) => setSearchQuerry(e.target.value)}
          />
          <button className='rounded-r-full border-2 px-4 py-1 bg-gray-100 h-9'>
            <Search style={{fontSize: '28px'}} />
          </button>
        </div>
      
        {/* Right Section: Account Icon */}
        <div className='flex items-center'>
          <AccountCircle style={{fontSize: '36px'}} className='cursor-pointer' />
        </div>
      </div>
      
    )
}

export default Header 

