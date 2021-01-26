import logo from '../../assets/logo.svg';
import './navbar.css';

const NavBar = () => {
    return (
        <>
            <header>
                <nav className='bg-secondary d-flex justify-content-between align-items-center px-4'>
                    <div className="col col-6">
                        <img src={logo} className='scale-logo'/>
                    </div>
                    <div className='col col-3 d-flex justify-content-center'>
                        <button className='btn btn-primary rounded-pill mx-2'>Ingreso</button>
                        <button className='btn btn-primary rounded-pill'>Registro</button>
                    </div>
                    <div className='col mx-2 text-white d-flex justify-content-end'>
                        <i className="fas fa-cart-arrow-down"></i>
                        <span className='badge rounded-pill bg-primary align-self-center fs-6 mx-1'>1</span>
                    </div>
                    <div className="col">
                        <button className='btn btn-light text-secondary'><i className="fas fa-bars"></i></button>
                        <ul className='bg-light p-4 text-secondary text-uppercase list-menu rounded-3 d-none'>
                            <li><i class="fas fa-tag"></i>Categorías</li>
                            <hr/>
                            <li><a href="#" className='text-secondary'>Tecnología</a></li>
                            <li><a href="#" className='text-secondary'>Hogar</a></li>
                            <li><a href="#" className='text-secondary'>Deportes</a></li>
                            <li><a href="#" className='text-secondary'>Belleza</a></li>
                            <li><a href="#" className='text-secondary'>Libros</a></li>
                            <li><a href="#" className='text-secondary'>Abarrotes</a></li>
                            <li><i class="fas fa-heart"></i>Favoritos</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;