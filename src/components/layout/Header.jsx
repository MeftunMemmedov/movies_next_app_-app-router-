'use client'
import Link from 'next/link'
import { BiMoviePlay } from "react-icons/bi";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchBar from '../header/SearchBar';

const Header = ({isLoggedIn=false}) => {
  return (
    <header className='backdrop-blur-xl h-16 sticky top-0 z-50'>
        <div className='container flex justify-around m-auto h-full'>

          <div className='lg:w-4/12 md:w-3/5  flex justify-around items-center '>
            <Link href={'/'}>
              <h2 className={`font-bold md:text-2xl text-xl lg:ml-5 m-0 w-1/5 text-orange-400`}>Movies</h2>
            </Link>
            <div className='w-3/5 h-8 relative'>
              <SearchBar />
            </div>
          </div>

          <div className='lg:w-2/5 lg:block hidden '>
            <nav className=' h-full flex items-center flex gap-x-2'>
              <Link href={'/allmovies'} className='border border-slate-600 p-2 rounded-3xl'><BiMoviePlay className='inline mb-1 mx-1' size={20}/>All Movies</Link>
              <Link href={'/genres'} className='border border-slate-600 p-2 rounded-3xl'><BsFillCameraReelsFill className='inline mb-1 mx-1' size={20}/>Categories</Link>
            </nav>
          </div>

          <div className='w-1/4 flex justify-end items-center '>
            {
              isLoggedIn?
              <>
              <div className='lg:mr-20 md:mr-10 font-bold bg-zinc-800 w-14 h-14 flex justify-center items-center rounded-full'>
                username
              </div>
              <div className='relative'>
                Dropdown
              </div>
              </>
              :
              <Link 
              href={'/sign-in'} 
              className='lg:mr-20 md:mr-10 font-bold bg-zinc-800 w-20 h-10 flex justify-center items-center rounded-3xl'><p>Sign In</p></Link>
            }
          </div>

        </div>        
      </header>
  )
}

export default Header
