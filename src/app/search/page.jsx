'use client'
import SingleMovie from '@/components/SingleMovie'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const url='https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies?select=*'
const apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
const authorization='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'

const options={
  headers:{
    apikey:apiKey,
    Authorization:authorization
  }
}   

const SearchPage = () => {
    const [searchResults, setSearchResults]=useState([])
    const searchParams=useSearchParams()
    const pathname=usePathname()
    const q=searchParams.get('q')
    
    const results=searchResults.filter(mov=>mov.title.toLowerCase().includes(q.toLowerCase()))
    console.log(results)
    useEffect(()=>{
        fetch(url, options)
        .then(res=>res.json())
        .then(data=>setSearchResults(data))  
    },[])
  return (
    <main>
        <section>
                {
                results.length==0?
                <div className='h-screen flex justify-center items-center'>
                    <h2 className='text-5xl'>No Results</h2>
                </div>
                :
                <div className='container m-auto grid lg:grid-cols-4 md:grid-cols-3'>
                    {
                        results.map((mov)=>{
                            return (
                                <SingleMovie movie={mov}/>
                            )
                        })
                    }
                </div>
                }
        </section>
    </main>
  )
}

export default SearchPage
