import logo from '../../assets/logo.svg';
import './navbar.css';

const NavBar = () => {
    return (
        <>
            <header>
               
                <nav className="navbar navbar-expand-lg bg-secondary d-flex justify-content-between align-items-center px-4">
                    <div className="col col-6">
                        <img src={logo} className='scale-logo'/>
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div className='col-7 d-flex justify-content-end'>
                            <button className='btn btn-primary rounded-pill mx-2'>Ingreso</button>
                            <button className='btn btn-primary rounded-pill'>Registro</button>
                        </div>
                        <div className='col text-white d-flex mx-3'>
                            <i className="fas fa-cart-arrow-down"></i>
                            <span className='badge rounded-pill bg-primary align-self-center fs-6 mx-1'>1</span>
                        </div>
                        
                        <div className="col collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <button class="btn btn-light text-secondary" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Tecnología</a>
                                        <a className="dropdown-item" href="#">Hogar</a>
                                        <a className="dropdown-item" href="#">Deportes</a>
                                        <a className="dropdown-item" href="#">Belleza</a>
                                        <a className="dropdown-item" href="#">Libros</a>
                                        <a className="dropdown-item" href="#">Abarrotes</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;