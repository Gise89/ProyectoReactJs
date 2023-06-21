import './Header.scss'
import logo from '../../assets/react.svg'

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                {/* <img src='/img/vite.svg' alt='logo'/> */}
                <img src={logo} alt='logo'/>

                <nav className="header__nav">
                    <a className="header__link" href="#">Enlace 1</a>
                    <a className="header__link" href="#">Enlace 2</a>
                    <a className="header__link" href="#">Enlace 3</a>
                </nav>
            </div>
        </header>
    )
}

export default Header