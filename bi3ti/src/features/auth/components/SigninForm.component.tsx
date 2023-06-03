import {
  Box,
  Button,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import {
  FC,
  FormEvent,
  useReducer,
} from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../../hooks/input/useInput';
import {
  validateNameLength,
  validatePasswordLength,
} from '../../../shared/utils/validation/length';
import { validateEmail } from '../../../shared/utils/validation/email';
const SigninFormComponent: FC = () => {
  const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler:
      emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputClearHandler:
      emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError:
      passwordHasError,
    textChangeHandler:
      passwordChangeHandler,
    inputBlurHandler:
      passwordBlurHandler,
    inputClearHandler:
      passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    // nameClearHandler();
    emailClearHandler();
    passwordClearHandler();
    // confirmpasswordClearHandler();
  };
  const onSubmitHandler = (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (
      emailHasError ||
      passwordHasError
    )
      return;
    if (
      email.length === 0 ||
      password.length === 0
    )
      return;

    console.log('User', {
      email,
      password,
    });
    clearForm();
  };
  return (
    <>
      <Box
        sx={{
          border: 1,
          padding: 2,
          borderColor: '#cccccc',
          width: '350px',
          marginTop: 2,
        }}
      >
        <form
          onSubmit={onSubmitHandler}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
          >
            <Typography
              variant="h4"
              component="h1"
            >
              Sign-In{' '}
            </Typography>

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
              value={email}
              onChange={
                emailChangeHandler
              }
              onBlur={emailBlurHandler}
              error={emailHasError}
              helperText={
                emailHasError
                  ? 'Must be an email'
                  : ''
              }
              type="email"
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
              value={password}
              onChange={
                passwordChangeHandler
              }
              onBlur={
                passwordBlurHandler
              }
              error={passwordHasError}
              helperText={
                passwordHasError
                  ? 'Minimum 6 characters required'
                  : ''
              }
              type="password"
              name="password"
              id="password"
              variant="outlined"
              size="small"
              placeholder="Please type in your password"
            />

            <Button
              type="submit"
              variant="contained"
              style={{
                marginTop: '16px',
                height: '31px',
                backgroundColor:
                  '#f0c14b',
                color: 'black',
                borderColor:
                  '#a88734 #9c7e31 #846a29',
                textTransform: 'none',
              }}
            >
              Sign-In
            </Button>
          </Grid>
        </form>
        <div
          style={{ marginTop: '30px' }}
        >
          <small>
            <span>
              By continuing, you agree
              to Bi3ti's{' '}
            </span>
          </small>
        </div>
        <div>
          <small>
            <a
              href="#"
              style={{
                textDecoration: 'none',
              }}
            >
              Conditions of use
            </a>{' '}
            and{' '}
            <a
              href="#"
              style={{
                textDecoration: 'none',
              }}
            >
              Privacy policy
            </a>
          </small>
        </div>
      </Box>
      <div
        style={{ marginTop: '16px' }}
      >
        <Divider>
          <small
            style={{
              color: '#76767676',
            }}
          >
            New to Bi3Ti?
          </small>
        </Divider>

        <Link
          to="/register"
          style={{
            textDecoration: 'none',
            color: '0000ee',
          }}
        >
          <Button
            variant="contained"
            style={{
              width: '100%',
              marginTop: '12px',
              height: '31px',
              backgroundColor:
                '#f1f1f1',
              color: 'black',
              borderColor:
                '#a88734 #9c7e31 #846a29',
              textTransform: 'none',
            }}
          >
            Register
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SigninFormComponent;
