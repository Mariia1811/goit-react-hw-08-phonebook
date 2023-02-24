import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 32px;
  font-style: oblique;
  color: #576574;
  text-shadow: #000 0px 0 1px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: flex-end;
  font-size: 18px;
  color: #576574;
`;

export const Input = styled(Field)`
   min-width: 280px;
   margin-left: 16px;
  padding: 8px;
  font-size: 20px;
  border: 1px solid rgba(33, 33, 33, 0.5);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  outline: none;
   &:hover {
   box-shadow: 0px 4px 4px rgba(0, 0, 200, 0.5);
`;
export const BtnStyled = styled.button`
    padding: 8px 18px;
  font-size: 20px;
  border: none;
  border-radius: 2px;
  background-color:rgba(34, 47, 62, 0.4);
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
`;
