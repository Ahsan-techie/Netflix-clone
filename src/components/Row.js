import React, { useState, useEffect } from "react";
import axios from "../apis/axios";
import './Row.css'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);
  const opts={
    height:"390",
    width:"100%",
    playerVars:{
        autoplay :1,
    }
  }
  const handleClick=(movie)=>{
     if(trailerUrl){
     // console.log(trailerUrl)
       setTrailerUrl("")
     }else{
       movieTrailer(movie?.title || movie?.name || movie?.source||"")
       .then(url=>{
          const urlParams=new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
          //console.log(trailerUrl)
       })
       .catch(
         error=>console.log(error)
       )
     }
  }
  console.table(movies)
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            onClick={()=>handleClick(movie)}
            src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;