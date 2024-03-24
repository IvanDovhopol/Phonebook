import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Row, Body, Button, Copy } from './styled';
import { ImPhone } from 'react-icons/im';
import { MdOutlineContentCopy } from 'react-icons/md';
import { copyNumberToast } from 'constans/utils';

export const Contact = ({ id, name, number, email }) => {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteContact(id));
  }

  function handleCopy(number) {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        copyNumberToast();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  }

  return (
    <>
      <Row>
        <Body>{name}</Body>
        <Body>{email}</Body>
        <Body>
          {number}{' '}
          <Copy type="button" onClick={() => handleCopy(number)}>
            <MdOutlineContentCopy size="15" />
          </Copy>
        </Body>
        <Body>
          <Button>
            <a href={`tel:${number}`}>
              <ImPhone size="15" />
            </a>
          </Button>
        </Body>
        <Body>
          <Button type="button" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Body>
      </Row>
    </>
  );
};
