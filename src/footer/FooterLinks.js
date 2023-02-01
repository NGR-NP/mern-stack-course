import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "styled-components";
const Ul = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
`;
const FooterLinks = () => {
  return (
    <Ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
        <KeyboardArrowDownIcon fontSize="x-small" className="navLinkIcon" />
        <ul aria-label="submenu">
          <li>
            <NavLink to="/shop/mens">Mens</NavLink>
          </li>
          <li>
            <NavLink to="/shop/womens">Womens</NavLink>
          </li>
          <li>
            <NavLink to="/shop/accosseries">Accosseries</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="admin">Admin</NavLink>
      </li>
    </Ul>
  );
};
export default FooterLinks;
