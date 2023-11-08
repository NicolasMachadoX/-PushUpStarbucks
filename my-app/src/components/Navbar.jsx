
import logo from '../assets/img/logo.png'
import  {Link} from 'react-router-dom'

const Navbar = () =>{
return(    
<nav className="navbar navbar-expand-lg   bg-dark">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-top"/>

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active navbar-brand text-light"><Link to="/" className="nav-link active navbar-brand text-light"><img src="" alt="" />Inicio</Link></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active navbar-brand text-light"><Link to="https://www.starbucks.com.co/menu" className="nav-link active navbar-brand text-light">Menu</Link></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active navbar-brand text-light"><Link to="https://www.starbucks.com.co/seccion/novedades" className="nav-link active navbar-brand text-light">Novedades</Link></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active navbar-brand text-light"><Link to="https://www.starbucks.com.co/stores" className="nav-link active navbar-brand text-light">Contacto</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
};

export default Navbar;