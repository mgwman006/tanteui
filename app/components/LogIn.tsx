import * as React from 'react';
import {
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Alert,
  IconButton,
  Box,
  Input,
} from '@mui/material';

import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

function CustomEmailField() {
  return (
    
        <Box
        component="form"
        noValidate
        autoComplete="off"
        >
            <Input placeholder="Email" fullWidth/>

        </Box>
  );
}

function CustomPasswordField() {

    return(
        <Box
        component="form"
        noValidate
        autoComplete="off"
        >
            <Input placeholder="Password" fullWidth/>

        </Box>
    );
}

function CustomButton() {
  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2 }}
      onClick={() => alert("yooo")}
      onClickCapture={() => alert("yee")}
    >
      Log In
    </Button>
  );
}

function SignUpLink() {
  return (
    <Link to="register">
      Sign up
    </Link>
  );
}

function ForgotPasswordLink() {
  return (
    <Link to="/" >
      Forgot password?
    </Link>
  );
}

function Title() {
  return <h2 style={{ marginBottom: 8 }}>Login</h2>;
}

function Subtitle() {
  return (
    <Alert sx={{ mb: 2, px: 1, py: 0.25, width: '100%' }} severity="info">
      LogIn with email and password.
    </Alert>
  );
}

function RememberMeCheckbox() {
  const theme = useTheme();
  return (
    <FormControlLabel
      label="Remember me"
      control={
        <Checkbox
          name="remember"
          value="true"
          color="primary"
          sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
        />
      }
      slotProps={{
        typography: {
          color: 'textSecondary',
          fontSize: theme.typography.pxToRem(14),
        },
      }}
    />
  );
}

export default function LogIn() {
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={(provider, formData) =>
          alert(
            `Logging in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}, and checkbox value: ${formData.get('remember')}`,
          )
        }
        slots={{
          title: Title,
          subtitle: Subtitle,
          emailField: CustomEmailField,
          passwordField: CustomPasswordField,
          submitButton: CustomButton,
          signUpLink: SignUpLink,
          rememberMe: RememberMeCheckbox,
          forgotPasswordLink: ForgotPasswordLink,
        }}
        slotProps={{ form: { noValidate: true } }}
        providers={providers}
      />
    </AppProvider>
  );
}
