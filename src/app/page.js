import CarouselContainer from "@/components/movies/CarouselContainer";
import Image from "next/image";
import Link from "next/link";


// curl 'https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies?select=*' \
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs" \
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs"
const url='https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies?select=*'
const apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
const authorization='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'

const options={
  headers:{
    apikey:apiKey,
    Authorization:authorization
  }
}   

const getMovies=async()=>{
  const response=await fetch(url, options).then(res=>res.json())

  return response
}

export default async function Home() {
  const  data=await getMovies()

  return (
    <main className="">
      <section className="">
        <div className="mx-auto relative lg:h-[89.6vh] md:h-[85vh] h-[600px]  home-box-1 overflow-hidden ">
        <div className='w-full h-full '>

          <div className='lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center items-end h-full '>          
            <div className='w-4/5 mr-8 text-center lg:text-start md:text-start'>
              <h2 className='font-bold  text-4xl mb-8'>Go ahead, stream free</h2>
              <p className=' mb-12'>With Plex you can watch over 20,000 free movies and shows, plus Live TV on almost any device. What are you waiting for?</p>
                <Link href={'/allmovies'} className=' py-3 px-10 rounded-3xl bg-amber-500 text-black font-bold'>Go and Watch Movies</Link>
            </div>         
          </div>
          
        </div>
        
        <div className=' absolute sm:w-full lg:w-3/4 md:w-3/4 h-full lg:top-0 md:top-0 top-[-200px]  right-0 z-[-1000] home-box-1-video'>
    
        </div>
      </div>
      </section>

      <section className="">
        <div className='container m-auto'>
          <h2 className='ml-5 text-3xl font-bold text-orange-400'>Top Movies</h2>
          <CarouselContainer movies={data.filter(mov=>mov.rating>7)}/>
        </div>
      </section>
    </main>
  );
}
