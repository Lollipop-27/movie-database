import { useState, useEffect } from 'react';
import { getPopularMovies, getTopRated, getNowPlaying, getUpcoming } from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import '../App.css';

const categories = {
    Popular: getPopularMovies,
    'Top Rated': getTopRated,
    'Now Playing': getNowPlaying,
    Upcoming: getUpcoming,
};

export default function Home({ searchTerm }) {
    const [category, setCategory] = useState('Popular');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        categories[category]().then((data) => setMovies(data.results.slice(0, 12)));
    }, [category]);

    // Filter movies by search term
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Current Category: {category}</h2>
            <div className="category-select">
                {Object.keys(categories).map((cat) => (
                    <button
                        key={cat}
                        className={category === cat ? 'active' : ''}
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="movie-grid">
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
