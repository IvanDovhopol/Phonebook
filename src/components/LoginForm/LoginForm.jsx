import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../../redux/auth/operations';
import {
  selectError,
  selectUser,
  selectLoading,
} from '../../redux/auth/selectors';
import { Form, Label, Input, Title, Button, LoginRejected } from './styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const data = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (data.name || data.email !== null) {
      dispatch(
        login({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      return form.reset();
    }
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Log In</Title>
      {error && <LoginRejected>Invalid credentials.</LoginRejected>}

      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>

      <div>
        <p>
          Don't have an account? <NavLink to="/register">Register</NavLink>.
        </p>
      </div>

      <Button type="submit">{isLoading ? 'Loading...' : 'Login'}</Button>
    </Form>
  );
};
