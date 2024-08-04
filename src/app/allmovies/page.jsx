import SingleMovie from '@/components/movies/SingleMovie'
import React from 'react'

const url='https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies?select=*'
const apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
const authorization='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'

const options={
  headers:{
    apikey:apiKey,
    Authorization:authorization
  }
} 



const getAllMovies=async()=>{
    const response=await fetch(url, options).then(res=>res.json())
    return response
}

const AllMovies = async() => {

const movies=await getAllMovies()

  return (
    <main>
        <section>
            <div className='container m-auto grid lg:grid-cols-4 md:grid-cols-3'>
                {
                    movies.map((movie)=>{
                        return(
                            <SingleMovie movie={movie}/>
                        )
                    })
                }
            </div>      
        </section>
    </main>
  )
}

export default AllMovies
