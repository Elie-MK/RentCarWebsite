import Button from './Button'
import { FaLocationDot } from "react-icons/fa6";


function SearchBar() {
  return (
    <div className='md:shadow-xl md:p-5 p-5 md:flex items-center gap-3 justify-between md:bg-white rounded-lg w-64 md:w-full'>
        <div className='mt-5 md:mt-0 '>
            <h1 className='font-bold'>Location</h1>
            <div className='flex items-center gap-2 mt-1'>
                <FaLocationDot />
                <input placeholder='choose a location'  className=' outline-none'/>
            </div>
        </div>
        <div className='mt-5 md:mt-0'>
        <h1 className='font-bold'>Pick-up Date</h1>
            <div className='flex items-center gap-2 mt-1'>
                <FaLocationDot />
                <input placeholder='Add date' className=' outline-none' />
            </div>
        </div>
        <div className='mt-5 md:mt-0'>
        <h1 className='font-bold'>Return Date</h1>
            <div className='flex items-center gap-2 mt-1'>
                <FaLocationDot />
                <input placeholder='Add date' className=' outline-none' />
            </div>
        </div>
        <div className='mt-5 md:mt-0'>
            <Button title="Search" />
        </div>
    </div>
  )
}

export default SearchBar