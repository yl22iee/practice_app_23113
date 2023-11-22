import { Link } from "react-router-dom";
import { routes } from "../routes";
import { styled } from "styled-components";

const HelloHeader = styled.div`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  li {
    margin-left: 20px;
  }
`;

export const Header = () => {
  return (
    <HelloHeader>
      <Logo>
        <Link to={routes.home}>Main_Home</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.detail}>Detail</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </HelloHeader>
  );
};
