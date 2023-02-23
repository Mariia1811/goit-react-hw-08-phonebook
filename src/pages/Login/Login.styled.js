import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginFormTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const LoginFormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const LoginFormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const LoginFormInput = styled(Field)`
  padding: 8px;
  font-size: 18px;
`;

export const LoginFormErrorMessage = styled(ErrorMessage)`
  color: red;
`;

export const LoginFormSubmitButton = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0069d9;
  }

  &:disabled {
    background-color: lightgray;
    cursor: default;
  }
`;
