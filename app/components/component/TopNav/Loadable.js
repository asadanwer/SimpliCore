import styled from 'styled-components';
export const Menu = styled.ul`
  padding-right: 15rem;
  box-shadow: 3px 3px 5px 6px #f0f0f0;
`;
export const InnerMenu = styled.li`
  display: inline;
  margin-left: 2rem;
  float: right;
  color: gray;
  font-size: 1.5rem;
  margin-top: -26px;
  &:hover {
    color: black;
  }
`;

export const Banner = styled.header`
  float: 'left';
  font-size: 2em;
`;
export const Wrapper = styled.div`
  background-color: #f0f0f0;
`;
