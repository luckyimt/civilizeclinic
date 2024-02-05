import civilize from '../assets/videos/civilize.mp4'
const Header = () => {
    
    return (
        <>
        <header className="header" >
            <nav className="nav">
                    <a href="#home">CIVILIZE</a>

                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#products" className="nav__link">CASES</a>
                    </li>
  
                    <li className="nav__item">
                        <a href="#contacts" className="nav__link">CONTACTS</a>
                    </li>
                        </ul>
                </nav>

            x
                <div className="hero">
                    <video src={civilize} autoPlay loop/>
                </div>
                </header>
        </>
        
    )
}
export default Header