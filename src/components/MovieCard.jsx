import { Link } from 'react-router-dom';
import FavouriteButton from './FavouriteButton';

export default function MovieCard({ movie, onUnfavourite }) {
    return (
        <div className="movie-card">
            <img
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : '/placeholder.png'
                }
                alt={movie.title}
            />
            <h3>{movie.title}</h3>

            <p>Release: {movie.release_date}</p>
            <p>Rating: {Math.round(movie.vote_average * 10)}%</p>

            <FavouriteButton movie={movie} onToggle={onUnfavourite} />

            <Link to={`/movie/${movie.id}`} className="more-info">
                More Info
            </Link>
        </div>
    );
}
