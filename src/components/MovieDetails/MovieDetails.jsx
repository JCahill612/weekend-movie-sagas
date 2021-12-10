import {useSelector} from 'react-redux'

function MovieDetails () {

    const selectedMovie = useSelector(store => store.selectedMovie)

    // const selectedMovieGenres = useSelector(store => store.selectedMovieGenres)

    return (
        <>
            <h1>Movies Details</h1>

            <div>
                <p>{selectedMovie[0]?.title}</p>
                <p>{selectedMovie[0]?.description}</p>
                <img src={selectedMovie[0]?.poster} alt={selectedMovie[0]?.title}/>
            </div>

            {/* <ul>
                {selectedMovieGenres.map(genre =>{
                    return (<li>{genre.name}</li>)
                })}
            </ul> */}
        </>
    )
}

export default MovieDetails;