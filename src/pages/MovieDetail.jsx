import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails, getMovieCredits } from '../api/tmdb';
import FavouriteButton from '../components/FavouriteButton';
import '../App.css';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieDetails(id).then(setMovie).catch(console.error);
    getMovieCredits(id).then(data => setCast(data.cast.slice(0, 5))).catch(console.error);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail-page">
      <div className="movie-info">
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder.png'}
          alt={movie.title}
        />
        <div className="movie-text">
          <h1>{movie.title}</h1>
          <p><strong>Release date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {Math.round(movie.vote_average * 10)}%</p>
          <p>{movie.overview}</p>
          <FavouriteButton movie={movie} />
        </div>
      </div>

      {cast.length > 0 && (
        <>
          <h3>Top Cast</h3>
          <div className="cast-container">
            {cast.map(actor => (
              <div key={actor.id} className="cast-card">
                <img
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : '/placeholder.png'}
                  alt={actor.name}
                />
                <p className="actor-name">{actor.name}</p>
                <p className="actor-character">as {actor.character}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

}
