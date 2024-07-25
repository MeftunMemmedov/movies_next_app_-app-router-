import Link from 'next/link'
import React from 'react'

const SearchResults = ({results, resutlsVisible, setResultsVisible, searchInput}) => {
    const noResults=results.length==0
  return (
    <>
    <div className={`w-full h-96 overflow-y-scroll my-2 bg-zinc-800 absolute z-30 rounded-xl px-2 ${resutlsVisible?'block':'hidden'}`}>
        <Link 
        href={{
          pathname:'/search',
          query:{q:searchInput}
        }}
        className='border-b block py-3 hover:bg-gray-600'
        >
          Search for <span className='font-bold '>{searchInput}</span>..
        </Link>
        {
            noResults?
            <h2 className='text-white my-4'>No Results {':('}</h2>
            :
            results.slice(0,8).map((result)=>{
                return (
                    <Link href={`/allmovies/${result.title}`}>
                        <div className='w-full flex my-3 hover:bg-gray-600'>
                            <div className='w-1/5  overflow-hidden rounded-md'>
                                <img src={result.poster} className='w-full h-full object-cover'/>
                            </div>
                            <div className='w-4/5 p-2'>
                                <h3 className='font-semibold'>{result.title}</h3>
                                <p className='text-xs text-gray-400 my-1'>{result.type}</p>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
      </div>
    </>
  )
}

export default SearchResults
