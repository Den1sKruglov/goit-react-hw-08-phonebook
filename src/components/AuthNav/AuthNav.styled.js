import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 28px;
  color: #2a363b;
  margin-left: 10px;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;

  :hover,
  :focus {
    color: #f69a73;
  }
  &.active {
    color: white;
    background-color: rgb(169,169,169);
  }
`;
