'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


// curl -X POST 'https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies' \
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs" \
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs" \
// -H "Content-Type: application/json" \
// -H "Prefer: return=minimal" \
// -d '{ "some_column": "someValue", "other_column": "otherValue" }'

const postUrl='https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies'
const postHeader={
    headers:{
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs",
        "Content-Type": "application/json"
    }
}

const AddMovie = () => {
    const [imageUrl, setImageUrl]=useState('')
    const [directorInput,setDirectorInput]=useState('')
    const [castInput,setCastInput]=useState({
        characterName:'',
        realName:''
    })
    const [newMovieData, setNewMovieData]=useState({
        title:'',
        type:'',
        year:'',
        rating:'',
        description:'',
        poster:'',
        poster_bg:'',
        trailer_url:'',
        genre:[],
        images:[],
        director:[],
        cast:[]
    })

    const handleChange=(e)=>{
        setNewMovieData(prevState=>{
            return {...prevState,[e.target.name]:e.target.value}
        })
    }

    const handleCastInputChange=(e)=>{
        setCastInput(prevState=>{
            return {...prevState,[e.target.name]:e.target.value}
        })
    }

    const addCast=(cast)=>{
        setNewMovieData(prevData=>({...prevData, cast:[...newMovieData.cast, cast]}))
    }
    
    const genres=['Crime','Drama','Thriller','Adventure', 'Mystery','Fantasy','Horror','Comedy','Action','Sport']

    const selectGenres=(selectedgenre)=>{
        setNewMovieData(prevData=>({...prevData, genre:[...newMovieData.genre, selectedgenre]}))
    }

    const addImages=(selectedimage)=>{
        setNewMovieData(prevData=>({...prevData, images:[...newMovieData.images, selectedimage]}))
    }

    const addDirectors=(selecteddirector)=>{
        setNewMovieData(prevData=>({...prevData, director:[...newMovieData.director, selecteddirector]}))
    }


    const sendNewMovie=async(e)=>{
        e.preventDefault()
        axios.post(postUrl, newMovieData, postHeader)
    }

    useEffect(()=>{
        console.log(newMovieData)
    },[newMovieData])
    
  return (
    <main>
        <section>
            <form className='flex flex-col' onSubmit={sendNewMovie}>
                <div className='grid grid-cols-3'>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Title</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='title' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Type</label> 
                        </div>
                        <div className='w-4/5'>
                            <select className='border my-2' defaultValue={'Movie'} onChange={handleChange}>
                                <option>Movie</option>
                            </select>
                        </div>
                    
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Year</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='year' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Rating</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='rating' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Description</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='description' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Poster</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='poster' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Poster_bg</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='poster_bg' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='border flex justify-between items-center'>
                        <div className='w-1/5'>
                            <label>Trailer_url</label>
                        </div>
                        <div className='w-4/5'>
                            <input type='text' name='trailer_url' className='border my-2' onChange={handleChange}/>
                        </div>
                    </div>
                </div>

                <div className=''>

                    <div>
                    {/* genre */}
                    <div className=' border-b py-3 my-3 genre-box'>
                    <h2 className='font-bold text-3xl border-b inline'>Genre</h2>
                        <h2 className='font-semibold'>Select Genre</h2>
                        <div className='py-4 '>
                            {
                                genres.map((genre)=>{
                                    return(
                                        <span className='border mx-2 p-1 rounded-md cursor-pointer' title='click to add' onClick={()=>selectGenres(genre)}>{genre}</span>
                                    )
                                })
                            }
                        </div>
                        <h2 className='font-bold'>Selected Genres</h2>
                        <div className='py-4'>
                            {
                                newMovieData.genre.length!==0?
                                newMovieData.genre.map((selectedGenre)=>{
                                    return(
                                        <span className='border mx-2 bg-white text-black p-1 cursor-pointer rounded-sm' title='click to remove'>{selectedGenre}</span>
                                    )
                                })
                                :
                                <h2 className=''>No Genres Selected</h2>
                            }
                        </div>
                    </div>
                    {/* genre */}

                    {/* images */}
                    <div className='image-scene my-3  border-b'>
                        <h2 className='font-bold text-3xl inline'>Images</h2>
                        <div className=''>
                            <input type='text' placeholder='type image url' onChange={(e)=>setImageUrl(e.target.value)}/>
                            <button type='button' className='border px-2' onClick={()=>addImages(imageUrl)}>Add Image</button>
                        </div> 
                            <div className='my-2'>
                                <h2 className='font-semibold'>Selected Images</h2>
                                <div className='flex justify-around items-center py-2'>
                                    {
                                        newMovieData.images.length!==0?
                                        newMovieData.images.map((imgurl)=>{
                                            return(
                                                <img src={imgurl} alt="" width={300} />
                                            )
                                        })
                                        :
                                        <h2>No Images Selected</h2>
                                    }
                                </div>
                            </div>
                    </div>
                    {/* images */}

                    {/* directors */}
                    <div className='director border-b my-3'>
                        <h2 className='font-bold text-3xl'>Director/s</h2>
                        <input type='text' onChange={(e)=>setDirectorInput(e.target.value)}/>
                        <button type='button' className='border px-2' onClick={()=>addDirectors(directorInput)}>Add Director</button>
                            <div className='my-3'>
                                <h2 className='font-bold'>Selected Directors</h2>
                                <div className='flex items-center'>
                                    {
                                        newMovieData.director.length!==0?
                                        newMovieData.director.map((directorname)=>{
                                            return(
                                                <h2 className='m-2 border inline-block p-1 mx-2 bg-white text-black'>{directorname}</h2>
                                            )
                                        })
                                        :
                                        <h2>No Director Selected</h2>
                                    }
                                </div>
                            </div>
                    </div>
                    {/* directors */}

                    {/* cast */}
                    <div className='my-3 border-b'>
                        <h2 className='font-bold text-3xl'>Cast</h2>
                        <input type='text' name='characterName' placeholder='charactername' onChange={handleCastInputChange}/>
                        <br/>
                        <input type='text' name='realName' placeholder='realname' onChange={handleCastInputChange}/>
                        <br/>
                        <button type='button' className='border px-2' onClick={()=>addCast(castInput)}>Add Cast</button>
                            <div>
                                <h2 className='font-semibold'>Selected Cast</h2>
                                {
                                    newMovieData.cast.length!==0?
                                    newMovieData.cast.map((cast)=>{
                                        return(
                                            <div className='border border-red-500'>
                                                <h2>{cast.characterName}</h2>
                                                <h2>{cast.realName}</h2>
                                            </div>
                                        )
                                    }):
                                    <h2>No Cast Selectedd</h2>
                                }
                            </div>
                    </div>
                    {/* cast */}


                    </div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </section>
        <section>
            
                
                
                
                
                
                
                
                
                
                <div className='border border-red-500 my-3'>
                    
                    
                    

                    
                    
                </div>
            
        </section>
    </main>
  )
}

export default AddMovie
