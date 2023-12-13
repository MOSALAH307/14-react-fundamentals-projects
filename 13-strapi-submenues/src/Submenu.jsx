import { useRef } from "react";
import { useGlobalContext } from "./Context";
import sublinks from "./data";

const SubMenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((link) => link.pageId === pageId);
  const submenuContainer = useRef();

  const mouseLeaveHandler = (event) => {
    const submenu = submenuContainer.current;
    const { right, left, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      ref={submenuContainer}
      onMouseLeave={mouseLeaveHandler}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, icon, label, url } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
