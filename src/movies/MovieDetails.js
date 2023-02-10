import React,{useEffect} from 'react'
// import YouTube from 'react-youtube'
// import movieTrailer from 'movie-trailer'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MovieRow from './MovieRow'
import request from "../request"
import { useSelector } from 'react-redux';
import './MovieDetails.css'

const MovieDetails = () => {

    // const [trailerUrl, setTrailerUrl] = useState();

    const movie = useSelector(state => state.movieState.movie)

    useEffect(()=> {

    },[movie])
    const baseURL = "https://image.tmdb.org/t/p/original/"

    // const opts = {
    //     height: '390',
    //     width: '100%',
    //     playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 1,
    //     },
    // };
    // const handleClick = (mov) => {
    //     if (trailerUrl) {
    //         setTrailerUrl('')
    //     } else {
    //         movieTrailer(mov?.original_title || mov?.name || mov?.title || "")
    //             .then(url => {
    //                 const urlParams = new URLSearchParams(new URL(url).search)
    //                 console.log(urlParams)
    //                 setTrailerUrl(urlParams.get("v"))
    //             })
    //             .catch(error => console.log(error));
    //         // https://youtube.com/v=fyhgfjksd
    //     }
    // };

    return (
        <>
            <div className='details-movie'>
    {/*trailerUrl && <YouTube className='youtube' videoId={trailerUrl} opts={opts} />*/}
                <div className="left">
                    <img src={`${baseURL}${movie.poster_path}`} alt="Movie Poster" />
                </div>
                <div className="right">
                    <div className="head-details">
                        <h1>{movie.title}</h1>
                        <div className="head-in">
                            <span className='first'>Release Year</span>
                            <span className="year">{movie.release_date}</span>
                        </div>

                    </div>
                    <div className="rating">
                        <div className="circle">
                            <div className="inner-circle">7.5</div>
                        </div>
                        <p>User <br /> Rating</p>
                        <PlayCircleIcon style={{ fontSize: "60px", color: "#032541",cursor:"pointer" }}/>
                        <p>Play Trailer</p>
                    </div>
                    <div className="story">
                        <h1>Brief Synopsis</h1>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
            <MovieRow title={"NETFLIX ORIGINALS"} fetchUrl={request.fetchNetflixOriginal} isLargeRow />
            <MovieRow title={"Trending Now"} fetchUrl={request.fetchTrending} />
            <MovieRow title={"Top Rated"} fetchUrl={request.fetchTopRated} />
        </>
    )
}

export default MovieDetails