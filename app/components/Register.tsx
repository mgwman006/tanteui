import {  Alert, Button, Grid, IconButton, Input, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { User } from "~/models/user";
import { createUser } from "~/services/userServices";


export default function Register()
{
    
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [laststName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    const handleClick = async () => {
        
        const usr : User = {
            firstName:firstName,
            lastName:laststName,
            email:email,
            passWord:password
        };

        try {
                const response = await createUser(usr);
                if(response.status===201)
                    navigate("/");
        } catch (error) {
            console.error('Failed to load users:', error); }
        };

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
                    <h1>Register User</h1>
                </Grid>
                <Grid size={3}>
                    <Input 
                        onChange={(event)=> setFirstName(event.target.value)}
                        placeholder="Firs tName" 
                        fullWidth
                    />
                </Grid>
                <Grid size={3}>
                    <Input 
                        onChange = {(event) => setLastName(event.target.value)}
                        placeholder="Last Name" 
                        fullWidth
                    />
                </Grid>
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
                <Grid size={3}>
                    <Button 
                        onClick={handleClick}
                    >
                        Submit
                    </Button>
                
                </Grid>
            
            </Grid>
    );
}