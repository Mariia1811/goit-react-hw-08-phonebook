import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const AuthNavList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const AuthNavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px 4px 5px;
  font-size: 16px;
  font-weight: 600;
  color: #222f3e;
    &:hover {
      color: #fff;
   }
  &.active {
    color: #fff;
    border-bottom: 2px solid;
      
 
  
`;
