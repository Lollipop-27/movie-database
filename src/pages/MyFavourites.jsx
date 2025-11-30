import { useState, useEffect } from 'react';
import { getFavourites } from '../utils/favourites';
import MovieCard from '../components/MovieCard';
import '../App.css';

export default function MyFavourites() {
    const [movies, setMovies] = useState([]);

    const refreshFavourites = () => {
        setMovies(getFavourites());
    };

    useEffect(() => {
        refreshFavourites();
    }, []);

    if (movies.length === 0) {
        return (
            <div>
                <h1>My Favourites</h1>
                <p>
                    Sorry, you have no favourited movies. Return to the home page to add a
                    favourite movie.
                </p>
            </div>
        );
    }

    return (
        <div>
            <h1>My Favourites</h1>
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onUnfavourite={refreshFavourites} 
                    />
                ))}
            </div>
        </div>
    );
}
