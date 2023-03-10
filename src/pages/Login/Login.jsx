import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { logIn } from 'redux/auth/operations';
import { Container } from '@mui/material';
import * as Yup from 'yup';
import {
  LoginFormErrorMessage,
  LoginFormField,
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
    navigate('/contacts');
    resetForm();
  };
  return (
    <Container maxWidth="xl">
      <LoginFormWrapper>
        <LoginFormTitle>Please, login to access your contacts</LoginFormTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <LoginFormField>
              <LoginFormLabel htmlFor="email">Email
                  <LoginFormInput type="email" name="email" autoComplete="email" />
                  </LoginFormLabel>
              <LoginFormErrorMessage name="email" component="div" />

              <LoginFormLabel htmlFor="password">Password
              <LoginFormInput
                type="password"
                name="password"
                autoComplete="password"
                  />
                  </LoginFormLabel>
              <LoginFormErrorMessage name="password" component="div" />

              <LoginFormSubmitButton type="submit" disabled={isSubmitting}>
                Login
                </LoginFormSubmitButton>
                </LoginFormField>
            </Form>
          )}
        </Formik>
      </LoginFormWrapper>
    </Container>
  );
};

export default Login;
