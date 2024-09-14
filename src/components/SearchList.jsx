import { useSelector } from "react-redux"

const SearchList = () => {
    const suggestions = useSelector((store) => store.toggle.suggestions);
    
    return (
        <div className=' ml-[33%] mt-20 bg-[#ffffff] min-w-[400px] fixed rounded-lg'>
            <ul className='font-semibold'>
                {suggestions.map((element,idx) => (
                    <li key={idx} className='cursor-default hover:bg-gray-200 px-4 hover:rounded-lg py-1' >{ element }</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchList