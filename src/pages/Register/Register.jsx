import { Container } from '@mui/material';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import {
  RegisterFormErrorMessage,
  RegisterFormField,
  RegisterFormInput,
  RegisterFormLabel,
  RegisterFormSubmitButton,
  RegisterFormTitle,
  RegisterFormWrapper,
} from './Register.styled';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.confirmPassword,
    };
    dispatch(register(newUser));
    resetForm();
  };
  return (
    <Container maxWidth="xl">
      <RegisterFormWrapper>
        <RegisterFormTitle>Create your own phone book by registering now!</RegisterFormTitle>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <RegisterFormField>
                <RegisterFormLabel htmlFor="name">
                  Name
                  <RegisterFormInput type="text" name="name" />
                </RegisterFormLabel>
                <RegisterFormErrorMessage name="name" component="div" />
              </RegisterFormField>

              <RegisterFormField>
                <RegisterFormLabel htmlFor="email">
                  Email
                  <RegisterFormInput type="email" name="email" />
                </RegisterFormLabel>
                <RegisterFormErrorMessage name="email" component="div" />
              </RegisterFormField>

              <RegisterFormField>
                <RegisterFormLabel htmlFor="password">
                  Password
                  <RegisterFormInput type="password" name="password" />
                </RegisterFormLabel>
                <RegisterFormErrorMessage name="password" component="div" />
              </RegisterFormField>

              <RegisterFormField>
                <RegisterFormLabel htmlFor="confirmPassword">
                  Confirm Password
                  <RegisterFormInput type="password" name="confirmPassword" />
                </RegisterFormLabel>
                <RegisterFormErrorMessage
                  name="confirmPassword"
                  component="div"
                />
              </RegisterFormField>

              <RegisterFormSubmitButton type="submit" disabled={isSubmitting}>
                Register
              </RegisterFormSubmitButton>
            </Form>
          )}
        </Formik>
      </RegisterFormWrapper>
    </Container>
  );
};

export default RegisterForm;
