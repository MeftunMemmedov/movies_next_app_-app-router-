import CarouselContainer from '@/components/movies/CarouselContainer'
import Image from 'next/image'
import React from 'react'



// curl 'https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies-Persons?select=*' \
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs" \
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs"
// movies
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
// movies

// persons
const personurl='https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies-Persons?select=*'
const personapiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs"
const personauthorization="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs"

const personoptions={
  headers:{
    apikey:personapiKey,
    Authorization:personauthorization
  }
}

const getPersons=async()=>{
  const response=await fetch(personurl, personoptions).then(res=>res.json())
  return response
}
// persons

const AboutPerson = async({params}) => {
  const personName=decodeURI(params.personName)
  const persons=await getPersons()
  const movies=await getAllMovies()

  const person=persons.find(person=>person.name===personName)
  const moviesByDirector=person.isDirector?movies.filter(movie=>movie.director.includes(personName)):null

  return (
    <main>

      <section>
        <div className="container m-auto">
          <div className='w-11/12 '>
            <div className="w-full flex py-5">
              <div className="w-1/3 relative h-[350px]">
                <Image src={person?.image} fill objectFit='cover' className='rounded-full'/>
              </div>
              <div className="w-3/4  pl-10">
                <div>
                  <h2 className='text-3xl font-bold mb-5'>{person?.name}</h2>
                  <p className='text-2 text-gray-400'>{person.isDirector?' Director':'Actor'}</p>
                  <p className='text-2 text-gray-400 mb-5'>Born {person?.birthday}</p>
                </div>
                <div className='w-full'>
                  <p className={''}>{person?.about.slice(0,600)}...</p>
                  {/* <button className={` text-orange-300 font-bold`}>{lessText?'More':'Less'}</button> */}
                </div>    
              </div>
            </div>
          
          </div>
        </div>
      </section>

      <section>
        <div className='py-5 container m-auto'>
          <h2 className='font-bold text-4xl'>Known For</h2>
          <div>
            <CarouselContainer movies={moviesByDirector}/>
          </div>
        </div>
      </section>

    </main>
  )
}

export default AboutPerson
