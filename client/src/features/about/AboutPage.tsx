/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, Typography } from '@mui/material';
import {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
} from './errorApi';
import { useState } from 'react';

const AboutPage = () => {
  const [validationErros, setValidationErrors] = useState<string[]>([]);

  const [trigger400Error] = useLazyGet400ErrorQuery();
  const [trigger401Error] = useLazyGet401ErrorQuery();
  const [trigger404Error] = useLazyGet404ErrorQuery();
  const [trigger500Error] = useLazyGet500ErrorQuery();
  const [triggerValidationError] = useLazyGetValidationErrorQuery();

  const getValidationError = async () => {
    try {
      await triggerValidationError().unwrap();
    } catch (err: any) {
      const errorArray = err.message.split(',');
      console.log(errorArray);
      setValidationErrors(errorArray);
    }
  };
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Errors for testing{' '}
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() => trigger400Error().catch((err) => console.log(err))}
        >
          Test 400 Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            trigger401Error().catch((err: any) => console.log(err))
          }
        >
          Test 401 Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            trigger404Error().catch((err: any) => console.log(err))
          }
        >
          Test 404 Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            trigger500Error().catch((err: any) => console.log(err))
          }
        >
          Test 500 Error
        </Button>
        <Button variant="contained" onClick={getValidationError}>
          Test Validation Error
        </Button>
      </ButtonGroup>
      {validationErros.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation errors</AlertTitle>
          <List>
            {validationErros.map(err => (
              <ListItem key={err}>{err}</ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
};

export default AboutPage;
