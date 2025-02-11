import { SearchOff } from '@mui/icons-material';
import { Button, Divider, Paper, Typography } from '@mui/material';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <Paper
      sx={{
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 6,
      }}
    >
      <SearchOff sx={{ fontSize: 100 }} color="primary" />
      <Typography variant="h3" gutterBottom>
        Oopssss 😬...Page Not Found
      </Typography>

      <Button fullWidth component={Link} to="/catalog" color="primary">
        Go Back to catalog
      </Button>
    </Paper>
  );
};

export default NotFound;
