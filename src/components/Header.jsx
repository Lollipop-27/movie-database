import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // adjust path if needed

export default function Header({ searchTerm, setSearchTerm }) {
    return (
        <header className="header">
            {/* Logo */}
            <div className="header-left">
                <Link to="/">
                    <img src={logo} alt="SilverReel Logo" className="logo" />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="header-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/favourites">Favourites</Link>
            </nav>

            {/* Search Bar */}
            <div className="header-right">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </header>
    );
}
