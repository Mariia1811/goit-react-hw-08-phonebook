import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(34, 47, 62, 0.7);
  font-waight: 500;
  color: #fff;

  padding: 20px 34px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;
export const Logo = styled.h1`
  margin: 0 0 8px;
  font-size: 32px;
  font-style: oblique;
  color: #fff;
  text-shadow: #718093 2px 1px 2px;
`;
