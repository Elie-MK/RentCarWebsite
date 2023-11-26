import { CiSearch } from "react-icons/ci";
import { IoOptionsOutline } from "react-icons/io5";

import {Colors }from "../../src/utilities/Color.js"
import Button from "./Button.js";

function NavBar() {
  return (
   <div className=" shadow-xl fixed left-0 right-0 z-10 bg-white">
     <div className="my-5 mx-24  ">
        <div className="flex  items-center justify-between" >
            <div className="flex  items-center gap-28">
            <div>
                    <h1 className=" text-3xl font-bold">RentCar</h1>
                </div>
                <div className="border pl-2 pr-10 rounded-xl w-[25rem]">
                    <div className="flex items-center justify-between">
                        <CiSearch size={30} color={Colors.gray}  />
                        <input className="p-2 pl-2 outline-none mr-20  placeholder:text-gray-400" placeholder="Search something here" />
                        <div className="-mr-5 cursor-pointer">
                        <IoOptionsOutline size={30} color={Colors.gray} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <Button   title="Login" />
                <Button title="Register" />
            </div>
        </div>
    </div>
   </div>
  )
}

export default NavBar