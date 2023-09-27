import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row.css';
// data retereving
// destructring method
function Row({ title, fetchUrl,isPoster }) {
  const base_url = "https://image.tmdb.org/t/p/original/";



  // state creation
  const [allMovies, setAllMovies] = useState([])
  // api call
  const fetchData = async () => {
    //  {data}:-destructring method 
    const { data } = await tmdbAxiosInstance.get(fetchUrl)
    setAllMovies(data.results);
  }
 // console.log(allMovies);
  // hook for side effects
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className='rows1'>
      <h2 className='heading'>{title}</h2>
      <div className='movies_row'>
        {
         allMovies.map(items => (
            <img className={`${isPoster&&'movie_large'} netflixOrg`} src={`${base_url}/${isPoster?items.poster_path: items.backdrop_path}`} alt='no img'/>
          ))
        }
      </div>
    </div>
  )
}

export default Row