import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { addToast, errorToast } from 'constans/utils';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextError, StyledForm, Input, Label, Button } from './styled';

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required(),
  phone: Yup.string().required(),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleSubmit = ({ name, phone, email }, { resetForm }) => {
    console.log('contacts ff', contacts.data.results);
    if (contacts.data.results.some(e => e.name === name)) {
      resetForm();
      return errorToast();
    }

    dispatch(addContact({ name, phone, email }));
    resetForm();
    addToast();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <>
        <StyledForm>
          <Label>
            Name
            <Input type="text" name="name" placeholder="John" />
            <TextError name="name" component="div" />
          </Label>

          <Label>
            Email
            <Input type="email" name="email" placeholder="mail@example.com" />
            <TextError name="email" component="div" />
          </Label>

          <Label>
            Phone
            <Input type="tel" name="phone" placeholder="0504631567" />
            <TextError name="phone" component="div" />
          </Label>

          <Button type="sumbit">
            {isLoading && !error ? 'loading ...' : 'Add contact'}
          </Button>
        </StyledForm>
      </>
    </Formik>
  );
};
