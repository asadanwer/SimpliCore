/**
 *
 * Asynchronously loads the component for LeftMenu
 *
 */
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #0a6268;
  color: white;
  margin-top: -65px;
  height: 100vh;
  width: 20vw;
`;
export const Menu = styled.ul`
  list-style-type: none;
  
`;
export const InnerMenu = styled.li`
  font-size: 20px;
  margin-top: 4rem;
  color:white ;
text-decoration:underline #0a6268;
  &:hover{
    color:#000;
  }

`;
