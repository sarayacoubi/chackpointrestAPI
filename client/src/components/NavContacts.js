import { Link } from "react-router-dom";

const NavContacts = () => {
  return (
    <div>

<nav className="navbar">
    <div className="nav-brand">
        <a href="#" className="brand-logo">MonCarnet</a>
    </div>
    <ul className="nav-links">
      <Link to="/"> <li><a  className="nav-link active">Home</a></li></Link>
        <Link to='/ContactList'>  <li><a  className="nav-link">Contact</a></li> </Link>
      <Link to="/AddContact"> <li><a  className="nav-link btn-add">Add Contact</a></li></Link>
        
    </ul>
</nav>

     
    </div>
  );
};

export default NavContacts;
