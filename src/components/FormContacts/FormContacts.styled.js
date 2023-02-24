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
  align-items: flex-end; ;
`;

export const Input = styled(Field)`
  min-width: 280px;
  margin-left: 10px;
  padding: 4px;
  font-size: 20px;
  border: 1px solid rgba(33, 33, 33, 0.5);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  outline: none;
`;
export const BtnStyled = styled.button`
  padding: 4px;
  font-size: 20px;
  border: 1px solid rgba(33, 33, 33, 0.5);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #70a1ff;
    border-color: #70a1ff;
    overflow: hidden;
  }
`;
