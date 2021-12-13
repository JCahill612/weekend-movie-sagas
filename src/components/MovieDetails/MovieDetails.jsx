import {useSelector} from 'react-redux'

function MovieDetails () {

    const selectedMovie = useSelector(store => store.selectedMovie)

    // const selectedMovieGenres = useSelector(store => store.selectedMovieGenres)

    return (
        <>
            <div>
                <h1>{selectedMovie[0]?.title}</h1>
                <img src={selectedMovie[0]?.poster} alt={selectedMovie[0]?.title}/>
                <p>{selectedMovie[0]?.description}</p>
                
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