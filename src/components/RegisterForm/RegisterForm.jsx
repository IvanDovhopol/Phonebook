import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import { selectError, selectUser, selectLoading } from '../../redux/auth/selectors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  TextError,
  StyledForm,
  Label,
  Button,
  Input,
  Title,
  RegisterRejected,
} from './styled';

const schema = Yup.object({
  name: Yup.string().required().min(3).max(25),
  email: Yup.string().required().email().min(13).max(30),
  password: Yup.string().required().min(7).max(25),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const data = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    if (data.name || data.email !== null) {
      dispatch(register({ name, email, password }));
      return resetForm();
    }
    dispatch(register({ name, email, password }));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Title>Registration</Title>
          {error && <RegisterRejected>Invalid credentials.</RegisterRejected>}

          <Label>
            Name
            <Input type="text" name="name" />
            <TextError name="name" component="div" />
          </Label>
          <Label>
            Email
            <Input type="email" name="email" />
            <TextError name="email" component="div" />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
            <TextError name="password" component="div" />
          </Label>
          <div>
            <p>
              Already have an account? <NavLink to="/login">Log in</NavLink>.
            </p>
          </div>

          <Button type="submit">{isLoading ? 'Loading...' : 'register'}</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
