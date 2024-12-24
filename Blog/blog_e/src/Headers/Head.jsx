import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import { Button, Navbar, TextInput } from "flowbite-react";
import { MdDarkMode } from "react-icons/md";
import { IoSearchCircleOutline } from "react-icons/io5"

function Head() {
const path = useLocation().pathname;
  return (
    <Navbar fluid rounded className='border-b-2'>
        <Link to="/" className=' self-center  whitespace-nowrap  text-sm sm:text-xl'> 
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white px-2 py-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg text-white">EphicxBlog</span>
             </Link>

       <form>
        <TextInput
        type='text'
        placeholder='Search..'
        rightIcon={ IoSearchCircleOutline}
        className=' hidden lg:inline'
        />
       </form>
       <Button className='  w-12 h-10 lg:hidden'color='gray' pill>
       <IoSearchCircleOutline/>
       </Button>
       <div className='flex gap-2 md:order-2'>
        <Button className='  w-12 h-10 hidden sm:inline' color='gray' pill>
            <MdDarkMode/>
        </Button>
         <Link to="/signin" >
         <Button gradientDuoTone='purpleToBlue'>Signin</Button>
         </Link>
         <Navbar.Toggle color='blue' />
       </div>
       <Navbar.Collapse>
      <Navbar.Link href="#" active={path === "/"} as={"div"} >
        <Link to = "/">Home</Link>
      </Navbar.Link>
      <Navbar.Link href="#" active={path === "/About"} as={"div"}  >
        <Link to = "/About">About</Link>
        </Navbar.Link>
        <Navbar.Link href="#" active ={path === "/Project"} as={"div"} >
            <Link to = "/Project">Project</Link>
            </Navbar.Link>
            <Navbar.Link href="#" active={path === "/Dashboard"}  as={"div"}>
                <Link to = "/Dashboard">Dashboard</Link>
                </Navbar.Link>
                <Navbar.Link href="#" active={path === "/Contact"} as={"div"}>
                    <Link to = "/Contact">Contact</Link>
                    </Navbar.Link>
                    <Navbar.Link href="#" active={path === "/signup"} as={"div"}>
                    <Link to = "/signup">Signup</Link>
                    </Navbar.Link>
                    
     </Navbar.Collapse> 
    
    </Navbar>
  );
}



export default Head