import {
  Box,
  Button,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { FC, FormEvent, useReducer } from 'react';
import { Link } from 'react-router-dom';
const RegistrationFormComponent: FC = () => {
  const onSubmitHandler = (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    console.log('Clicked');
  };
  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderColor: '#cccccc',
        width: '350px',
        marginTop: 2,
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
        >
          <Typography variant="h4" component="h1">
            Create Account
          </Typography>
          <InputLabel
            sx={{
              fontWeight: 500,
              marginTop: 1,
              color: '#000000',
            }}
            htmlFor="name"
          >
            Your Name
          </InputLabel>
          <TextField
            type="text"
            name="name"
            id="name"
            variant="outlined"
            size="small"
          />
          <InputLabel
            sx={{
              fontWeight: 500,
              marginTop: 1,
              color: '#000000',
            }}
            htmlFor="email"
          >
            Your Email
          </InputLabel>
          <TextField
            type="text"
            name="email"
            id="email"
            variant="outlined"
            size="small"
          />
          <InputLabel
            sx={{
              fontWeight: 500,
              marginTop: 1,
              color: '#000000',
            }}
            htmlFor="password"
          >
            Your Password
          </InputLabel>
          <TextField
            type="text"
            name="password"
            id="password"
            variant="outlined"
            size="small"
            placeholder="Minimum 6 characters required "
          />
          <InputLabel
            sx={{
              fontWeight: 500,
              marginTop: 1,
              color: '#000000',
            }}
            htmlFor="confirmPassword"
          >
            Re-enter your Password
          </InputLabel>
          <TextField
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            variant="outlined"
            size="small"
            placeholder="Confirm password"
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: '16px',
              height: '31px',
              backgroundColor: '#f0c14b',
              color: 'black',
              borderColor: '#a88734 #9c7e31 #846a29',
              textTransform: 'none',
            }}
          >
            Register
          </Button>
        </Grid>
      </form>
      <div style={{ marginTop: '30px' }}>
        <small>
          <span>
            By creating an account, you agree to Bi3ti's{' '}
          </span>
        </small>
      </div>
      <div>
        <small>
          <a href="#" style={{ textDecoration: 'none' }}>
            Conditions of use
          </a>{' '}
          and{' '}
          <a href="#" style={{ textDecoration: 'none' }}>
            Privacy policy
          </a>
        </small>
      </div>
      <Divider
        sx={{ marginTop: '36px', marginBottom: '36px' }}
      />
      <div>
        <small>
          Already have an account?{' '}
          <Link
            to="/signin"
            style={{
              textDecoration: 'none',
              color: '0000ee',
            }}
          >
            Signin
          </Link>
        </small>
      </div>
      <div>
        <small>
          Buying for work?
          <a href="#" style={{ textDecoration: 'none' }}>
            Create a free business account{' '}
          </a>{' '}
        </small>
      </div>
    </Box>
  );
};

export default RegistrationFormComponent;
