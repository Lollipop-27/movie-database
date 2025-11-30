const LS_KEY = 'movie_app_favourites_v1';

export function getFavourites() {
    try {
        return JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    } catch { return []; }
}

export function isFav(movieId) {
    return getFavourites().some(m => m.id === movieId);
}

export function addFavourite(movieObj) {
    const favs = getFavourites();
    if (!favs.some(m => m.id === movieObj.id)) {
        favs.push(movieObj);
        localStorage.setItem(LS_KEY, JSON.stringify(favs));
    }
}

export function removeFavourite(movieId) {
    const favs = getFavourites().filter(m => m.id !== movieId);
    localStorage.setItem(LS_KEY, JSON.stringify(favs));
}
