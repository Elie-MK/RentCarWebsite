import { CiSearch } from "react-icons/ci";
import { IoOptionsOutline } from "react-icons/io5";
import { CiMenuBurger, CiMenuFries  } from "react-icons/ci";

import {Colors }from "../../src/utilities/Color.js"
import Button from "./Button.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [openMenu, setOpenMenu]=useState(false)
  return (
   <div className=" shadow-xl fixed left-0 right-0 z-10 bg-white">
     <div className="my-5 md:mx-24 mx-8  ">
        <div className="flex  items-center justify-between" >
            <div className="flex justify-between items-center md:gap-28">
            <div>
                    <Link to={"/"}>
                        <h1 className=" text-3xl font-bold">RentCar</h1>
                    </Link>
                </div>
              
                <div className="border pl-2 pr-10 rounded-xl w-[25rem] md:flex hidden">
                    <div className="flex items-center justify-between">
                        <CiSearch size={30} color={Colors.gray}  />
                        <input className="p-2 pl-2 outline-none mr-20  placeholder:text-gray-400" placeholder="Search something here" />
                        <div className="-mr-5 cursor-pointer">
                            <IoOptionsOutline size={30} color={Colors.gray} />
                        </div>
                    </div>
                </div>
                <div className="md:hidden ml-52" onClick={()=>setOpenMenu(!openMenu)}>
                    {
                        openMenu?<CiMenuFries size={30}/>
                        :<CiMenuBurger size={30}/>
                    }
                </div>
            </div>
            <div className="hidden gap-5 md:flex ">
                <Button   title="Login" />
                <Button title="Register" />
            </div>
        </div>
        {
            openMenu && (
                <div className="bg-white h-24 md:h-0   ">
                    
            <div className="md:hidden mt-5 ">
                <div>
                    <Button title="Login" />
                </div>
                <div className="mt-5">
                    <Button title="Register" />
                </div>
            </div>
                </div>
            )
        }
    </div>
   </div>
  )
}

export default NavBar