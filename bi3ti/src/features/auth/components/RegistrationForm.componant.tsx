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
import {
  validateNameLength,
  validatePasswordLength,
} from '../../../shared/utils/validation/length';
import useInput from './../../../hooks/input/useInput';
import { validateEmail } from '../../../shared/utils/validation/email';
import { NewUser } from '../models/NewUser';
const RegistrationFormComponent: FC =
  () => {
    const {
      text: name,
      shouldDisplayError: nameHasError,
      textChangeHandler:
        nameChangeHandler,
      inputBlurHandler: nameBlurHandler,
      inputClearHandler:
        nameClearHandler,
    } = useInput(validateNameLength);

    const {
      text: email,
      shouldDisplayError: emailHasError,
      textChangeHandler:
        emailChangeHandler,
      inputBlurHandler:
        emailBlurHandler,
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
    } = useInput(
      validatePasswordLength,
    );

    const {
      text: confirmpassword,
      shouldDisplayError:
        confirmpasswordHasError,
      textChangeHandler:
        confirmpasswordChangeHandler,
      inputBlurHandler:
        confirmpasswordBlurHandler,
      inputClearHandler:
        confirmpasswordClearHandler,
    } = useInput(
      validatePasswordLength,
    );
    const clearForm = () => {
      nameClearHandler();
      emailClearHandler();
      passwordClearHandler();
      confirmpasswordClearHandler();
    };
    const onSubmitHandler = (
      e: FormEvent<HTMLFormElement>,
    ) => {
      e.preventDefault();
      if (password !== confirmpassword)
        return;
      if (
        nameHasError ||
        emailHasError ||
        passwordHasError ||
        confirmpasswordHasError
      )
        return;
      if (
        name.length === 0 ||
        email.length === 0 ||
        password.length === 0 ||
        confirmpassword.length === 0
      )
        return;
      const newUser: NewUser = {
        name,
        email,
        password,
      };
      console.log(newUser);
      clearForm();
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
              value={name}
              type="text"
              onChange={
                nameChangeHandler
              }
              onBlur={nameBlurHandler}
              error={nameHasError}
              helperText={
                nameHasError
                  ? 'Enter your Name'
                  : ''
              }
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
              value={confirmpassword}
              onChange={
                confirmpasswordChangeHandler
              }
              onBlur={
                confirmpasswordBlurHandler
              }
              error={
                confirmpassword.length >
                  0 &&
                password !==
                  confirmpassword
              }
              helperText={
                confirmpassword.length >
                  0 &&
                password !==
                  confirmpassword
                  ? 'Passwords must match'
                  : ''
              }
              type="password"
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
                backgroundColor:
                  '#f0c14b',
                color: 'black',
                borderColor:
                  '#a88734 #9c7e31 #846a29',
                textTransform: 'none',
              }}
            >
              Register
            </Button>
          </Grid>
        </form>
        <div
          style={{ marginTop: '30px' }}
        >
          <small>
            <span>
              By creating an account,
              you agree to Bi3ti's{' '}
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
        <Divider
          sx={{
            marginTop: '36px',
            marginBottom: '36px',
          }}
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
            .
          </small>
        </div>
        <div>
          <small>
            Buying for work?{' '}
            <a
              href="#"
              style={{
                textDecoration: 'none',
              }}
            >
              Create a free business
              account.{' '}
            </a>{' '}
          </small>
        </div>
      </Box>
    );
  };

export default RegistrationFormComponent;
