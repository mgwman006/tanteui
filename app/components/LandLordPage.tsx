import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, ListItem, Stack, Switch, TextField, Tooltip } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import type { Tenant } from '~/models/user';
import { getTenants, registerTenant } from '~/services/userServices';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';



   

export default function LandLordPage() {

    const params = useParams();
    const navigate = useNavigate();
    const [openForm, setOpenForm] = useState(false);
    const [tenantFirstName, setTenantFirstName] = useState('');
    const [tenantLatName, setTenantLastName] = useState('');
    const [tenantEmail, setTenantEmail] = useState('');
    const [tenantPhoneNumber, setTenantPhoneNumber] = useState('');
    const [tenants,setTenants] = useState([]);
    const [landlordId, setLandLordId] = useState(Number(params.landlordId));
    useEffect(() => {

        try {
            getTenants(landlordId).then(
              response => {
                setTenants(response.data);
              }
            );
        } catch (error) {
          console.log(error);
        }
    },[]);


    const handleClickOpen = () => {
        setOpenForm(true);
    };

    const handleClose = () => {
        setOpenForm(false);
    };

    const handleSubmit = async () => {
        setOpenForm(false);

        const tenant : Tenant = {
            firstName:tenantFirstName,
            lastName:tenantLatName,
            phoneNumber:tenantPhoneNumber,
            email:tenantEmail
        };

        try {
            const response = await registerTenant(landlordId,tenant);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <React.Fragment>
      <Grid container
        display={'flex'}
        direction={'column'}
        alignContent={'center'}>
        <Grid 
            container
            display={'flex'}
            size={{ xs: 12, sm: 6 }}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            >
            <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                 Tenants
                </Typography>
            </Grid>
            <Grid 
                 
                size={{ xs: 6, sm: 3 }} 
                display={'flex'}
                justifyContent={'end'}>
                <Tooltip title="Add Tenant">
                    <IconButton aria-label="add tenant" size="large" color='primary' onClick={handleClickOpen}>
                        <PersonAddAlt1Icon />
                    </IconButton>
                </Tooltip>
                 
            </Grid>
            
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
            <List >
            {tenants.map(({ id, firstName, lastName, email }) => (
                <ListItem 
                  divider
                  key={id}
                  >
                    <ListItemButton>
                        <ListItemAvatar>
                          <Avatar alt="Profile Picture" src={""} />
                        </ListItemAvatar>
                        <ListItemText primary={firstName} secondary={lastName} />
                        <Chip label="not paid" color="error" variant="outlined" />

                    </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Grid>
        
      </Grid>
      

       <Dialog
        open={openForm}
        onClose={handleClose}
      >
        <DialogTitle>Tenant Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Make sure all info are valid
          </DialogContentText>
          <Grid 
            container
            display={'flex'}
            direction={'column'}
            alignItems={'center'}
            >
                <Grid>
                    <TextField id="standard-basic" label="First Name" variant="standard" onChange={(e) => setTenantFirstName(e.target.value)}/>
                </Grid>
                <Grid>
                    <TextField id="standard-basic" label="Last Name" variant="standard"  onChange={(e) => setTenantLastName(e.target.value)}/>
                </Grid>
                <Grid>
                    <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setTenantEmail(e.target.value)}/>
                </Grid>
                <Grid>
                    <TextField id="standard-basic" label="Phone Number" variant="standard" onChange={(e) => setTenantPhoneNumber(e.target.value)} />
                </Grid>
                <Grid container>
                    <Grid><Button onClick={handleClose}>Cancel</Button></Grid>
                    <Grid><Button onClick={handleSubmit}>Submit</Button></Grid>
                </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}