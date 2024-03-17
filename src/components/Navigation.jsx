const Naviation = () => {
    return (
        <div>
            <nav className="navi">
                <div className="logo">
                    <img className="logobrand" src="./public/logo.png" alt="logo" />
                </div>

                <ul >
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button className="but0">
                    Login
                </button>
            </nav>
        </div>
    )
}
export default Naviation;