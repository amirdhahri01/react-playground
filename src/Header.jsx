import ReacLogo from "./imgs/react-logo.png"

const Header = () => {
    return (
        <header>
            <img src={ReacLogo} alt="" />
            <nav>
                <ul className='nav-list'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header