import { Footer, FooterIcon } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube,FaGithub } from "react-icons/fa";

function Foot() {
  return (
  <Footer container className=' border border-t-8 border-teal-500'>
    <div className='w-full max-w-7xl mx-auto '>
      <div className=' grid w-full justify-between sm:flex md:grid-cols-1'>
      <Link to="/" className=' self-center  whitespace-nowrap  text-sm sm:text-xl'> 
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white px-2 py-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg text-white">EphicxBlog</span>
             </Link>
    

      <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>

       <div className='mt-4'>
       <Footer.Title title='About'  />
       <Footer.LinkGroup col>
        <Footer.Link href="/about"
        target='__blank'
        rel='noopener noreferrer'
        >
          About Us
        </Footer.Link>


        <Footer.Link href="/"
        target='__blank'
        rel='noopener noreferrer'
        >
          Ephicx_blog
        </Footer.Link>
       </Footer.LinkGroup>
       </div>

       <div className='mt-4'>
       <Footer.Title title='Follow'  />
       <Footer.LinkGroup col>
        <Footer.Link href="http://www.github.com/ephicx16"
        target='__blank'
        rel='noopener noreferrer'
        >
          Github
        </Footer.Link>


        <Footer.Link href="http://www.dailydev.io/"
        target='__blank'
        rel='noopener noreferrer'
        >
          DailyDev
        </Footer.Link>
       </Footer.LinkGroup>
       </div>
       

       <div className='mt-4'>
       <Footer.Title title='Policy'  />
       <Footer.LinkGroup col>
        <Footer.Link href="#"
        target='__blank'
        rel='noopener noreferrer'
        >
          Privacy Policy
        </Footer.Link>


        <Footer.Link href="#"
        target='__blank'
        rel='noopener noreferrer'
        >
          Terms & Conditions
        </Footer.Link>
       </Footer.LinkGroup>
       </div>

       </div>

      </div>
 

     <Footer.Divider />
     <div className='w-full sm:flex sm:items-center sm:justify-between'>
       <Footer.Copyright href='#' by='EphicxBlog'  year={new Date().getFullYear()}/>


<div className=' flex gap-4 mt-4 sm:mt-0  justify-center'>
     <FooterIcon  href='' icon={FaFacebook}/>
     <FooterIcon  href='' icon={FaInstagram}/>
      <FooterIcon  href='' icon={FaLinkedin}/>
      <FooterIcon  href='' icon={FaTwitter}/>
      <FooterIcon  href='' icon={FaYoutube}/>
      <FooterIcon  href='' icon={FaGithub}/>
     </div>

     </div>

     

    </div>
     
  </Footer>
  )
}

export default Foot