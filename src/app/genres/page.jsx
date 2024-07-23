import Link from 'next/link'

const Genres = () => {
    
    const genres = [
        {
            genre:'action',
            color:'orange'
        },
        {
            genre:'drama',
            color:'gray'
        },
        {
            genre:'crime',
            color:'red'
        },
        {
            genre:'comedy',
            color:'blue'
        },
        {
            genre:'thriller',
            color:'green'
        },
        {
            genre:'horror',
            color:'gold'
        },
        {
            genre:'sci-fi',
            color:'violet'
        },
        {
            genre:'romance',
            color:'violet'
        },

     ]
    
    // const categoriesFromMovies=movies.map((movie,i)=>movie.genre)
    // const ctgr=categories.concat(categoriesFromMovies.map((category)=>category))
    // const allCategories=ctgr.filter((ct)=>ct)


  return (
    <main>
        <section>
        <div className=''>
            <h2 className='text-5xl font-bold text-center py-10'>Categories</h2>
            <div className='container m-auto flex flex-wrap justify-center gap-x-10'>
            {
                genres.map((g)=>{
                    return (
                        <Link href={`/genres/${g.genre}`} className={`w-1/6 hover:border hover:scale-110 transition duration-300 rounded-xl h-32 my-10 flex justify-center items-center`} style={{backgroundColor:g.color}}>
                            <h2 className='text-2xl font-bold'>{g.genre.charAt(0).toUpperCase()+g.genre.slice(1)}</h2>
                        </Link>
                    )
                })
            }
            </div>
        </div>
        </section>
    </main>
  )
}

export default Genres