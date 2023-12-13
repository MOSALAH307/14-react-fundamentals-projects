import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const submenuHandler = (event) => {
    if (!event.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={submenuHandler}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
