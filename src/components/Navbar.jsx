import { Link } from "react-router-dom";

export default function Navbar() {
    function active(to = '/') {
        let current_url = window.location.pathname;
        if (current_url == to) return 'active';
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark-subtle">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${ active('/') } `} to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${ active('/tentang-kami') } `} to="/tentang-kami">TENTANG KAMI</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
