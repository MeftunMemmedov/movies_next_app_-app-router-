import React from 'react'
import { LiaImdb } from "react-icons/lia";
import { FaRegBookmark, FaPlay } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import CarouselContainer from '@/components/movies/CarouselContainer';

const url='https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies?select=*'
const apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
const authorization='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'

const options={
  headers:{
    apikey:apiKey,
    Authorization:authorization
  }
}   


const getMovies=async(title)=>{
  const response=await fetch(url, options).then(res=>res.json())
  return response
}

const MovieDetails = async({params}) => {
const movieName=decodeURIComponent(params.movieName)
console.log(movieName)
const movies=await getMovies()
const movie=movies.find(mov=>mov.title==movieName)

const fileredForSimilarToMovie=movies.filter((mov)=>mov.genre.includes(movie.genre[0]) || mov.genre.includes(movie.genre[1]) || mov.genre.includes(movie.genre[2]) )
const similarToMovie=fileredForSimilarToMovie.filter((mov)=>mov.title!=movie.title)
const filteredMoviesBySameDirector=movies.filter((mov)=>mov.director.includes(movie.director[0]))
const moviesBySameDirector=filteredMoviesBySameDirector.filter((mov)=>mov.title!=movie.title)
  return (
    <main className=''>
        <section>
          <div className='relative movie-page lg:h-[100vh] h-[300vh] md:h-[100vh] '>
            <div className='w-full h-full movie-page absolute z-10'></div>
              <Image 
              src={movie.poster_bg} 
              width={1000} height={400} 
              className='w-full blur bgimg'
              />
            <div className=' absolute top-10 w-full shadow-[100px]'>
              <div className='lg:container md:pl-14 mx-auto flex md:flex-row flex-col justify-around absolute z-20'>
                <div className='sm:w-full md:w-1/4 relative py-10 '>
                  <Image 
                  src={movie.poster} 
                  width={1920} 
                  height={1080} 
                  className='w-full'/>
                </div>
                <div className='md:w-3/4 w-full p-10 '>
                  <h2 className='text-4xl font-bold mb-1'>{movie.title}</h2>
                  <p className='mb-4'>Directed by {movie.director.map((director)=>{return <Link href={`/person/${director}`}>{director}</Link>})}</p>
                  <p className='mb-2'>{movie.year}</p>
                  <div className='flex mb-2'>
                    {movie.genre.map((genre)=>{return <h4 className='mr-2'>{genre}</h4>})}
                  </div>
                <div className='flex items-center'>
                  <LiaImdb size={30} color='gold' className='inline mr-2'/><h5 className='font-bold'>{movie.rating}</h5>
                </div>
                <div className='my-10 flex'>
                  <Link href={`${movie.trailer_url}`} className='border rounded-3xl bg-white text-black p-2 mr-3 flex justify-around items-center'><FaPlay size={20} className='inline mx-1 mb-1'/>Watch Trailer</Link>
                </div>
                <div className=''>
                  <p>{movie.description}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
        <div className='bg-black relative h-[400px]'>
          <div className='flex justify-around container m-auto'>
            {
              movie.images.map((img,i)=>{
                return (
                  <div className='w-[32%] h-64  relative' key={i}>
                      <Image 
                      src={img} 
                      fill 
                      objectFit='cover'/>
                  </div>
                )
              })
            }
          </div>
        </div>
        </section>

        <section>
          <div className='bg-black'>
            <h2 className='text-2xl font-bold text-orange-400 ml-5'>Cast</h2>
            <div className=' flex justify-around'>
              {movie.cast.map((actor,i)=>{
                return (
                  <div className='flex flex-col w-36 text-center' key={i}>
                    <div className=''>
                      <img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className='w-full rounded-full'/>
                    </div>
                    <div>
                      <h2>{actor.realName}</h2>
                      <h2 className='text-gray-700'>{actor.characterName}</h2>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section>
        <div className='relative w-full bg-black py-16 '>
          <h2 className='text-4xl font-bold ml-5 text-orange-400'>Similar to {movie.title}</h2>
          <div className='container m-auto'>    
              <CarouselContainer movies={similarToMovie}/>
          </div>
        </div>
        </section>

        <section>
        <div className='relative w-full bg-black h-[90vh] py-16 '>
          <h2 className='text-4xl font-bold ml-5 text-orange-400'>Other movies by {movie.director}</h2>
          <div className='container m-auto'>    
              <CarouselContainer movies={moviesBySameDirector}/>
          </div>
        </div>
    
        </section>
    </main>
  )
}

export default MovieDetails
