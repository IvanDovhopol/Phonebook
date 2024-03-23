import toast from 'react-hot-toast';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserSecret } from 'react-icons/fa';
import { Button, Wrapper, Data } from './styled';

export const deletedToast = () => {
  return toast.success('Contact deleted!', {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });
};

export const addToast = () => {
  return toast.success(`Contact added!`, {
    style: {
      border: '1px solid green',
      padding: '16px',
      color: 'green',
    },
  });
};

export const errorToast = () => {
  return toast.error('The contact already exists!', {
    style: {
      border: '1px solid red',
      padding: '16px',
      color: 'red',
    },
  });
};

export const copyNumberToast = () => {
  return toast.success('Number copied!', {
    style: {
      border: '1px solid black',
      padding: '16px',
      color: 'black',
    },
    iconTheme: {
      primary: 'black',
      secondary: '#FFFAEE',
    },
  });
};

export const successRegisterToast = (name, email) => {
  return toast.custom(t => {
    console.log(t);
    return (
      <Wrapper>
        <FaUserSecret size="40" />

        <Data>
          <i>Welcome, {name}!</i>
          <i>{email}</i>
        </Data>

        <Button onClick={() => toast.dismiss(t.id)}>
          <AiOutlineClose size="20" />
        </Button>
      </Wrapper>
    );
  });
};

export const successLoginToast = (name, email) => {
  return toast.custom(t => {
    console.log(t);
    return (
      <Wrapper>
        <FaUserSecret size="40" />
        {/* <img
          style={{ 'border-radius': 20 }}
          src="//www.gravatar.com/avatar/59979654429c4fe3b6a5af79cadece3e"
          alt="random avatar"
          width="35"
        /> */}

        <Data>
          <i>Welcome, {name}!</i>
          <i>{email}</i>
        </Data>

        <Button onClick={() => toast.dismiss(t.id)}>
          <AiOutlineClose size="20" />
        </Button>
      </Wrapper>
    );
  });
};
