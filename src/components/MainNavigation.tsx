import { Link } from "react-router-dom";
import styled from "styled-components";

const MainNavigation = () => {

  return (
    <Nav>
      <NavItem>
        <NavLink to="/">
          LOGO
        </NavLink>
      </NavItem>
      <Span>
        <NavItem>
          <NavLink to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/work">
            Work
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </NavItem>
      </Span>
    </Nav>
  );
};

export default MainNavigation;


const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 1rem;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const Span = styled.span`
  display: flex;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  position: relative;

  &:hover {
    font-weight: 600;
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      border-radius: 50%;
      width: 4px;
      height: 4px;
      background-color: #000000;
    }

    &.active {
    font-weight: bold;
  }
  }
`;
