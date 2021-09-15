import { Link } from 'react-router-dom';
import { HiLink } from 'react-icons/hi';

import { logout } from '../services/authService';
import { useUsuario } from '../context/usuario-context';

const Navbar = () => {

    const { usuario } = useUsuario();

    const handleLogout = async () => {
        const res = await logout();
        if (res.data.message) {
            return window.location.href = "/";
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <HiLink className="text-white fs-3" />
                    Favorite Links
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                            usuario ?
                                <>
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Links
                                        </Link>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <Link
                                                className="dropdown-item"
                                                to="/links"
                                            >
                                                All Links
                                            </Link>
                                            <div className="dropdown-divider"></div>
                                            <Link
                                                className="dropdown-item"
                                                to="/links/add"
                                            >
                                                Add a Link
                                            </Link>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/profile"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="#"
                                            type="button"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signin">
                                            SignIn
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">
                                            SignUp
                                        </Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
