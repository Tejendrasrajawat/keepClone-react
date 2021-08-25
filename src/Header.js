import logo from './images/logo.png';

const Header = () => {
    return(
        <>
        <div className='header'>
        <img alt='logo' src={logo} width='70' height='50' />
        <h1>Google Keep</h1>
        </div>
        </>
    )
}

export default Header;