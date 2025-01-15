import { decrement, increment } from './counterReducer';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/store/store';

const ContactPage = () => {
  const {data} = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h2">Contact Page 🤓</Typography>
      <Typography variant="body1">The data is {data}</Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(increment(5))} color='error'>
          Increment
        </Button>
        <Button onClick={() => dispatch(decrement(10))} color='primary'>
          Decrement
        </Button>
        <Button onClick={() => dispatch(increment(10))} color='secondary'>
          Increment Big
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ContactPage;
