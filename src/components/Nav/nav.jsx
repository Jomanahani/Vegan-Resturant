import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import './nav.css';

const Nav = (props) => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href='/#'>Home</a>
        </li>
        <li>
          <a href='/#'>About us</a>
        </li>
        <li>
          <a href='/#'>Special</a>
        </li>
        <li>
          <a href='/#'>Menu</a>
        </li>
        <li>
          <a href='/#'>Blogs</a>
        </li>
        <li>
        <img src={search} alt="search" />
        </li>
      </ul>
      <button><hr></hr> Book Now <hr></hr></button>
    </nav>
  );
};

export default Nav;

