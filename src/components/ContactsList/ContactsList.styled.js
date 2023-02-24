import styled from 'styled-components';

export const TitleList = styled.h2`
  margin: 0 0 20px;
  font-size: 32px;
  font-style: oblique;
  color: #576574;
  text-shadow: #000 0px 0 1px;
`;

export const ContactList = styled.ul`
  margin: 16px;
  padding: 0;
`;
export const ItemEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NumberEl = styled.span`
  margin: 0 10px;
  font-style: italic;
`;
export const BtnDellete = styled.button`
  padding: 4px;
  font-size: 16px;
  border: none;
  border-radius: 2px;
  background-color: rgba(34, 47, 62, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #70a1ff;
    border-color: #70a1ff;
    overflow: hidden;
    box-shadow: 0px 2px 2px rgba(0, 0, 200, 0.5);

    &:disabled {
      background-color: lightgray;
      cursor: default;
    }
  }
`;
