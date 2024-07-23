import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='border h-16 flex justify-around items-center'>
            <h2>Header</h2>
            <Link href={'/allmovies'} className='text-red-500 font-bold'>toAllMovies</Link>
            <Link href={'/genres'} className='text-red-500 font-bold'>toCategories</Link>
        </div>
    </header>
  )
}

export default Header
