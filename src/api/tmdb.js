const BASE = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// generic fetch helper
async function tmdbFetch(path, params = {}) {
    const url = new URL(BASE + path);
    Object.entries({ api_key: API_KEY, ...params }).forEach(([k, v]) =>
        url.searchParams.set(k, v)
    );
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`TMDb error ${res.status}`);
    return res.json();
}

// specific API calls
export function getPopularMovies(page = 1) {
    return tmdbFetch('/movie/popular', { page });
}

export function getTopRated(page = 1) {
    return tmdbFetch('/movie/top_rated', { page });
}

export function getNowPlaying(page = 1) {
    return tmdbFetch('/movie/now_playing', { page });
}

export function getUpcoming(page = 1) {
    return tmdbFetch('/movie/upcoming', { page });
}

export function getMovieDetails(movieId) {
    return tmdbFetch(`/movie/${movieId}`);
}

export async function getMovieCredits(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
    return res.json(); // returns cast + crew
}
