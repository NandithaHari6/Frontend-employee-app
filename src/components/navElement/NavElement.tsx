import Image from "../image/Image";
import "./NavElement.css";
const NavElement = ({
  nav_heading,
  nav_icon_src,
  onClick,
}: {
  nav_heading: string;
  nav_icon_src: string;
  onClick: () => void;
}) => {
  return (
    <div className="nav_element" onClick={onClick}>
      <div className="icon">
        <Image source={nav_icon_src} className="icon_img" />
      </div>
      <div className="label">{nav_heading}</div>
    </div>
  );
};
export default NavElement;
