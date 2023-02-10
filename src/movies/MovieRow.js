import React, { useState, useEffect } from 'react'
import axios from "../axios"
import { useDispatch } from 'react-redux'
import { movieAction } from '../store'
import { useNavigate } from 'react-router-dom'

import './MovieRow.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"

function MovieRow({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            console.log(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    const handleClick = (movie) => {
        dispatch(movieAction.addMovie(movie))
        if(!window.location.pathname === "/moviedetails")
        navigate("moviedetails")
        if(window.location.pathname === "/")
        navigate("moviedetails")
    }
    
    return (
        <div className='row'>
            
            <h3>{title}</h3>
            <div className="row_poster">
                {
                    movies.map(movie => (
                        <div className='movieinfo'>
                            <img
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                className={`row_image ${isLargeRow && "row_post"}`}
                                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.poster_path}`}
                                alt={movie?.name || movie?.title || movie?.original_name} />
                                <h4 onClick={() => handleClick(movie)}>Movie Name : {movie.title}</h4>
                                <span>Release Year : {movie.release_date}</span>
                                <span>Rating : {movie.vote_average}</span>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MovieRow