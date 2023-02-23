import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Formik, Form } from 'formik';
import { logIn } from 'redux/auth/operations';
import { Container } from '@mui/material';
import * as Yup from 'yup';
import {
  LoginFormErrorMessage,
  LoginFormInput,
  LoginFormLabel,
  LoginFormSubmitButton,
  LoginFormTitle,
  LoginFormWrapper,
} from './Login.styled';


const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate();
    const handleSubmit = (values, { resetForm }) => {
    const user = {
      email: values.email,
      password: values.password,
    };
      dispatch(logIn(user));
      navigate("/contacts");
      resetForm();
      
  };
  return (
      <Container maxWidth='xl'>
    <LoginFormWrapper>
      <LoginFormTitle>Login Form</LoginFormTitle>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <LoginFormLabel htmlFor="email">Email Address</LoginFormLabel>
            <LoginFormInput type="email" name="email" autoComplete="email"/>
            <LoginFormErrorMessage name="email" component="div" />

            <LoginFormLabel htmlFor="password">Password</LoginFormLabel>
            <LoginFormInput type="password" name="password" autoComplete="password"/>
            <LoginFormErrorMessage name="password" component="div" />

            <LoginFormSubmitButton type="submit" disabled={isSubmitting}>
              Login
            </LoginFormSubmitButton>
          </Form>
        )}
      </Formik>
      </LoginFormWrapper>
      </Container>
  );
};

export default Login;
