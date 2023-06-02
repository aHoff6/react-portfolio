import { Link } from "react-router-dom";

export default function NavBar() {
    return <nav className="navbar">
        <Link to="/" className="name">Anthony Hoffman</Link>
        <ul>
            <CustomTag to="/about">About Me</CustomTag>
            <CustomTag to="/mywork">Portfolio</CustomTag>
            <CustomTag to="/contact">Contact</CustomTag>
        </ul>
    </nav>
}

function CustomTag({ to, children, ...props }) {
    return (
        <li >
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}