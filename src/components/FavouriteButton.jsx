import { useState, useEffect } from 'react';
import { addFavourite, removeFavourite, isFav } from '../utils/favourites';

export default function FavouriteButton({ movie, onToggle }) {
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        setIsFavourite(isFav(movie.id));
    }, [movie.id]);

    const handleClick = () => {
        if (isFavourite) {
            removeFavourite(movie.id);
            setIsFavourite(false);
        } else {
            addFavourite(movie);
            setIsFavourite(true);
        }
        if (onToggle) onToggle(); // ✅ refresh parent (MyFavourites)
    };

    return (
        <button
            className={`fav-btn ${isFavourite ? 'active' : ''}`}
            onClick={handleClick}
        >
            {isFavourite ? '♥' : '♡'}
        </button>
    );
}
