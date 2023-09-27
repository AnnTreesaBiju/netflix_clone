import React, { useState, useEffect } from 'react';
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Banner.css';
function Banner({ fetchUrl }) {

    const base_url = "https://image.tmdb.org/t/p/original/";

    // state creation
    const [movie, setMovie] = useState({})
    // api call
    const fetchData = async () => {
        //  {data}:-destructring method 
        const { data } = await tmdbAxiosInstance.get(fetchUrl)
        // rand movie generater:-Math.random() 
        // to avoid decimal number:-Math.floor()
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
    }
    console.log(movie);
    // hook for side effects
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='banner' style={{
            height: "600px",
            backgroundSize: "cover",
            backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
            backgroundAttachment: "fixed",
        }}>

            <div className='banner_content'>
                <h1>{movie.name}</h1>
                <h2>{movie?.overview?.slice(0,280)}...</h2>

            </div>
        </div>
    )
}

export default Banner