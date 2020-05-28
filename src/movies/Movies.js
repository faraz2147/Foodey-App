import React, { useState, useEffect } from 'react'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isAPILoaded, setIsAPILoaded] = useState(false);
    const [input, setInput] = useState('')
    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=telugu&apikey=4a3b711b').then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search])
                setIsAPILoaded(true)
            }, 2000)
        })
    }, []);

    const handleInput = (e) =>{
        const {value}=e.target;
        setInput(value);
    }
    const Search = () =>{
        fetch(`https://www.omdbapi.com/?s=${input}&apikey=4a3b711b`).then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search])
                setIsAPILoaded(true)
            }, 2000)
        })
    }
    return (
        <>
        <div className="row card-header bg-dark py-1" >
			<h1 className="text-primary">MyMovies.Co</h1>
			<form style={{float:"right",display:"inline-block"}} className="mr-0 ml-5 mt-3 mb-3 d-flex" >
				<input type="text" onChange={handleInput} className="form-control"name="searchbar" placeholder="search.." size="80"/>
                <button type="button" onClick={Search} className="btn-sm btn-outline-primary">Search</button>
			</form>
		</div>
        <div className="container ">
            {!isAPILoaded && (<img src="https://giphy.com/gifs/foosball-y1ZBcOGOOtlpC" />)}
            <div className="row mt-4 ">
                {movies.map(({ Poster, Title, Year, Type }) => (
                    <div className="col-4 mb-3">
                        <div className="card bg-dark text-white" style={{ width: "20rem" }}>
                            <img src={Poster} width="300" height="200" className="card-img-top" alt="..." />
                            <div className="card-body py-2 ">
                                <h5 className="card-title ">{Title}</h5>
                            </div><hr/>
                            <div className="row text-center font-weight-bold">
                                <div className="col-sm-4 ">TYPE </div>:
                                <div className="col ">{Type}</div>
                                </div>
                                <div className="row">
                                <div className="col-sm-4 text-center">YEAR </div>:
                                <div className="col text-center">{Year}</div>
                                </div>
                            <div className="card-body">
                                <button className="card-link btn btn-primary">DOWNLOAD</button>
                                <button className="card-link btn btn-success">WATCH ONLINE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
</>
    )
}

export default Movies
