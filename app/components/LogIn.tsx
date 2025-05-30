import {
  Button,
  Input,
  Grid,
} from '@mui/material';

import { useNavigate } from 'react-router';
import { useState } from 'react';
import { UserStatus, type LogInDetails } from '~/models/user';
import { logInUser } from '~/services/userServices';
import { saveToLocalStorage } from '~/utilities/localStorage';



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
          const id:number = response.data.userDetails.id;
          saveToLocalStorage("isUserLoggedIn","true");
          navigate(`landlord/${id}`);
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
          size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}} 
       >
          <Grid size={{xs: 6, sm: 6, md: 3, lg: 3, xl: 3}}>
              <Input 
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email" 
                fullWidth
              />
          </Grid>

          <Grid size={{xs: 6, sm: 6, md: 3, lg: 3, xl: 3}}>
              <Input 
                  onChange={(event) => setPassWord(event.target.value)}
                  placeholder="Password" 
                  fullWidth
              />
          </Grid>
          <Grid 
            size={{xs: 6, sm: 6, md: 3, lg: 3, xl: 3}}
            container 
            spacing={2}
            direction="row"
            display={"flex"}
            justifyContent={"space-around"}
          >
              <Grid size={{xs: 3, sm: 3, md: 1, lg: 1, xl: 1}} alignContent={"start"}>
                <Button 
                    onClick={handleLogIn}
                >
                    LogIn
                </Button>
              </Grid>
              <Grid size={{xs: 3, sm: 3, md: 1, lg: 1, xl: 1}} alignContent={"start"}>
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
