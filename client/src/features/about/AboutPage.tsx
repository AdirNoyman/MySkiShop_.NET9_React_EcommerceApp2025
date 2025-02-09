/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ButtonGroup, Container, Typography } from '@mui/material';
import {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
} from './errorApi';

const AboutPage = () => {
  const [trigger400Error] = useLazyGet400ErrorQuery();
  const [trigger401Error] = useLazyGet401ErrorQuery();
  const [trigger404Error] = useLazyGet404ErrorQuery();
  const [trigger500Error] = useLazyGet500ErrorQuery();
  const [triggerValidationError] = useLazyGetValidationErrorQuery();

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Errors for testing{' '}
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
          <Button
            variant="contained"
            onClick={() =>
              triggerValidationError().catch((err: any) => console.log(err))
            }
          >
            Test Validation Error
          </Button>
        </ButtonGroup>
      </Typography>
    </Container>
  );
};

export default AboutPage;
