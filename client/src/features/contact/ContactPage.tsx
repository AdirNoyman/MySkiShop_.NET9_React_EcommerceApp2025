import { useSelector } from 'react-redux';
import { CounterState } from './counterReducer';
import { Typography } from '@mui/material';

const ContactPage = () => {
  const data = useSelector((state: CounterState) => state.data);

  return (
    <>
      <Typography variant="h2">Contact Page 🤓</Typography>
      <Typography variant="body1">The data is {data}</Typography>
    </>
  );
};

export default ContactPage;
