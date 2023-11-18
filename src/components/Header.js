import { Link } from "react-router-dom";
import { routes } from "../routes";
import { styled } from "styled-components";

const HelloHeader = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  li {
    margin-left: 60px;
  }
`;

export const Header = () => {
  return (
    <div>
      <HelloHeader>
        <Logo>
          <Link to={routes.home}>Main_Home</Link>
        </Logo>

        <MenuList>
          <li>
            <Link to={routes.detail}>Detail</Link>
          </li>
          <li>
            <Link to={routes.search}>Search</Link>
          </li>
        </MenuList>
      </HelloHeader>
    </div>
  );
};
