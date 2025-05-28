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
  Grid,
} from '@mui/material';

import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { UserStatus, type LogInDetails } from '~/models/user';
import { logInUser } from '~/services/userServices';



export default function LogIn() {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [passWord,setPassWord] = useState('');

  

   const handleLogIn = async () => {
    
    const logInDetails: LogInDetails = {
      email: email,
      passWord: passWord
    }

    try {
      const response = await logInUser(logInDetails);
      if(response.status===200 && response.data.userStatus == UserStatus.LogInSuccess)
      {
          console.log(response);
          navigate("homepage");
      }
          

      else 
        console.log(response);
    } catch (error)
    {
      console.error('Failed to load users:', error); 
    }

  }
  
  return (
       <Grid
          container 
          spacing={2}
          direction="column"
          sx={{
              justifyContent: "center",
              alignItems: "center",
          }}
       >
          <Grid size={3}>
              <Input 
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email" 
                fullWidth
              />
          </Grid>

          <Grid size={3}>
              <Input 
                  onChange={(event) => setPassWord(event.target.value)}
                  placeholder="Password" 
                  fullWidth
              />
          </Grid>
          <Grid 
            size ={3}
            container 
            spacing={2}
            direction="row"
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
          >
              <Grid size={3}>
                <Button 
                    onClick={handleLogIn}
                >
                    LogIn
                </Button>
              </Grid>
              <Grid size={3}>
                <Button 
                    onClick={() => navigate("registerlandlord")}
                >
                    Register
                </Button>
              </Grid>
          </Grid>
                
       </Grid>
  );
}
