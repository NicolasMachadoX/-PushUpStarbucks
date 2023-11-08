
import instagram from '../assets/img/ig.webp'
import twitter from '../assets/img/tw.webp'
import facebook from '../assets/img/fb.png'

import './Sidebar.css';

import  {Link} from 'react-router-dom'

const Sidebar = () =>{
return(    
 <div className="sidebar">
 <ul className="ulSide">
        <li className="nav-item ulLink">
        <Link to="https://www.facebook.com/StarbucksColombia/?locale=es_LA"><a className="nav-link active navbar-brand text-light"><img  className='imgSidebar'src={facebook} alt="" /> </a></Link>
        </li>
        <li className="nav-item ulLink">
        <Link to="https://twitter.com/Starbucks"><a className="nav-link active navbar-brand text-light"><img  className='imgSidebar'src={twitter} alt="" /> </a></Link>
        </li>
        <li className="nav-item ulLink">
        <Link to="https://www.instagram.com/starbuckscol/?hl=es"><a className="nav-link active navbar-brand text-light"><img  className='imgSidebar'src={instagram} alt="" /> </a></Link>
        </li>
      </ul>
 </div>
)
};

export default Sidebar;