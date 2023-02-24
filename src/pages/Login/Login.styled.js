import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const LoginFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`;

export const LoginFormTitle = styled.h2`
  margin: 0 0 80px;
  font-size: 32px;
  font-style: oblique;
  color: #576574;
  text-shadow: #000 0px 0 1px;
`;

export const LoginFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoginFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  margin-bottom: 8px;
  color: #576574;
`;

export const LoginFormInput = styled(Field)`
  min-width: 280px;
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

export const LoginFormErrorMessage = styled(ErrorMessage)`
  color: red;
`;

export const LoginFormSubmitButton = styled.button`
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
