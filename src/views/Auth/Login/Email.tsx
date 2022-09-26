import { SyntheticEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, TextField, Card, CardHeader, CardContent, InputAdornment } from '@mui/material';
import { useAppStore } from '../../../store';
import customAxios from '../../../utils/axios';
import { AppButton, AppLink, AppIconButton, AppAlert, AppForm } from '../../../components';
import { useAppForm, SHARED_CONTROL_PROPS, eventPreventDefault } from '../../../utils/form';

const VALIDATE_FORM_LOGIN_EMAIL = {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      maximum: 32,
      message: 'must be between 8 and 32 characters',
    },
  },
};

interface FormStateValues {
  email: string;
  password: string;
}

const LoginEmailView = () => {
  const history = useHistory();
  const [, dispatch] = useAppStore();
  const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError] = useAppForm({
    validationSchema: VALIDATE_FORM_LOGIN_EMAIL,
    initialValues: { email: '', password: '' } as FormStateValues,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>();
  const values = formState.values as FormStateValues; // Typed alias to formState.values as the "Source of Truth"

  const handleShowPasswordClick = useCallback(() => {
    setShowPassword((oldValue) => !oldValue);
  }, []);

  const handleFormSubmit = async (event: any) => {
      event.preventDefault();
      if (!values?.email || !values?.password) {
        setError('Please check email and password');
        return;
      }
      // const  data  = await customAxios.post('/user/login', {
      //     email: values?.email,
      //     password: values?.password,
      // });
      // dispatch({ type: 'LOG_IN', payload: data });
      dispatch({ type: 'LOG_IN', });
      // history.replace('/');
    }

  const handleCloseError = useCallback(() => setError(undefined), []);

  return (
    <AppForm onSubmit={handleFormSubmit}>
      <Card>
        <CardHeader title="Login with Email" />
        <CardContent>
          <TextField
            required
            label="Email"
            name="email"
            value={values?.email}
            error={fieldHasError('email')}
            helperText={fieldGetError('email') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            type={showPassword ? 'text' : 'password'}
            label="Password"
            name="password"
            value={values?.password}
            error={fieldHasError('password')}
            helperText={fieldGetError('password') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AppIconButton
                    aria-label="toggle password visibility"
                    icon={showPassword ? 'visibilityon' : 'visibilityoff'}
                    title={showPassword ? 'Hide Password' : 'Show Password'}
                    onClick={handleShowPasswordClick}
                    onMouseDown={eventPreventDefault}
                  />
                </InputAdornment>
              ),
            }}
          />
          {error ? (
            <AppAlert severity="error" onClose={handleCloseError}>
              {error}
            </AppAlert>
          ) : null}
          <Grid container justifyContent="center" alignItems="center">
            <AppButton type="submit" disabled={!formState.isValid}>
              Login
            </AppButton>
          </Grid>
        </CardContent>
      </Card>
    </AppForm>
  );
};

export default LoginEmailView;
