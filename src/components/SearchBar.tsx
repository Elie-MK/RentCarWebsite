import Button from './Button'
import { FaLocationDot } from "react-icons/fa6";


function SearchBar() {
  return (
    <div className='shadow-xl p-5 flex items-center gap-3 justify-between bg-white rounded-lg'>
        <div>
            <h1 className='font-bold'>Location</h1>
            <div className='flex items-center gap-2 mt-1'>
                <FaLocationDot />
                <input placeholder='choose a location'  className=' outline-none'/>
            </div>
        </div>
        <div>
        <h1 className='font-bold'>Pick-up Date</h1>
            <div className='flex items-center gap-2 mt-1'>
                <FaLocationDot />
                <input placeholder='Add date' className=' outline-none' />
            </div>
        </div>
        <div>
        <h1 className='font-bold'>Return Date</h1>
            <div className='flex items-center gap-2 mt-1'>
                <FaLocationDot />
                <input placeholder='Add date' className=' outline-none' />
            </div>
        </div>
        <Button title="Search" />
    </div>
  )
}

export default SearchBar