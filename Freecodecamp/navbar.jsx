export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>        
          <ul className="sub-menu" aria-label="Apps">   
            <li className="sub-menu"></li>            
          <li className="sub-menu"></li>            
          <li className="sub-menu"></li>         
          </ul>      
        </li>
      </ul>
    </nav>
  );
};