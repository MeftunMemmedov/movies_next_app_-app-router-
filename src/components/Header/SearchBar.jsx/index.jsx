'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import SearchResults from '../SearchResults'


const url='https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies?select=*'
const apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
const authorization='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'

const options={
  headers:{
    apikey:apiKey,
    Authorization:authorization
  }
}   


const SearchBar = () => {
    const [movies, setMovies]=useState([])
    const [searchInput, setSearchInput]=useState('')
    const [resutlsVisible, setResutlsVisible]=useState(false)
    const pathname=usePathname()

    const getMovies=async()=>{
       await fetch(url, options)
       .then(res=>res.json())
       .then(data=>setMovies(data))
    }

    const results=movies.filter(mov=>mov.title.toLowerCase().includes(searchInput.toLowerCase()))
    
    const handleBlur=()=>{
      setTimeout(()=>{
        setSearchInput('')
      },500)
    }

    useEffect(()=>{
        getMovies()
    },[])
    useEffect(()=>{
        searchInput==''?setResutlsVisible(false):setResutlsVisible(true)
    },[searchInput])

    useEffect(()=>{
        setSearchInput('')
    },[pathname])
    
  return (
    <>
      <input 
      type='search' 
      placeholder='Type to search Movies'
      onChange={(e)=>setSearchInput(e.target.value)}
      className='w-full h-full rounded-2xl bg-zinc-800 text-white px-3' 
      onBlur={handleBlur}
      />

      <SearchResults 
      results={results} 
      resutlsVisible={resutlsVisible} 
      setResutlsVisible={setResutlsVisible}
      searchInput={searchInput}
      
      />
    </>
  )
}

export default SearchBar
