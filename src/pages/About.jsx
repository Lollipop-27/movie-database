import logo from '../assets/logo.png'; // your app logo
import tmdbLogo from '../assets/tmdb.svg'; // download from TMDb logo page
import '../App.css';

export default function About() {
    return (
        <div className="about-page">
            {/* App logo */}
            <img src={logo} alt="SilverReel Logo" className="about-logo" />

            {/* App description */}
            <p>
                Every film, in the opinion of SilverReel, is a thread in the vast fabric of
                narrative, interwoven with passion, inventiveness, and immortal moments.
                SilverReel is your carefully chosen entryway to film discovery, drawing influence
                from the sophistication of cinemas from the 20th century and the modern, sleek
                style of the internet world. Established in 2025, our website seamlessly combines
                contemporary innovation with vintage charm, transforming browsing into a cinematic
                experience in and of itself. Discover the enchantment of cinema like never before
                with SilverReel, which offers everything from well-known classics to obscure
                independent treasures.
            </p>

            {/* TMDb Attribution */}
            <div className="tmdb-attribution">
                <img src={tmdbLogo} alt="TMDb Logo" className="tmdb-logo" />
                <p className="tmdb-text">
                    This product uses the TMDb API but is not endorsed or certified by TMDb
                </p>
            </div>
        </div>
    );
}
