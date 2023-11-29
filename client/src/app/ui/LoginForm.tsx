import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

export default function LoginForm() {
    return (
        <Container component="form" sx={{ width: 'fit-content' }}>
            <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#0d47a1', borderStyle: 'solid', borderRadius: "20px", paddingTop: '50px', width: 'fit-content', height: 'fix-content' }}>
                <Grid item>
                    <Box>
                        <Typography align='center' variant="h6">Login Credentials</Typography>
                    </Box>
                </Grid>
                <Grid item container sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '50px' }} rowGap={4}>
                    <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} columnGap={3} container>
                        <Grid item>
                            <Typography>User Name</Typography>
                        </Grid>
                        <Grid>
                            <TextField id="user-name" label="username" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} columnGap={3} container>
                        <Grid item>
                            <Typography>Password</Typography>
                        </Grid>
                        <Grid>
                            <TextField id="password" label="password" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' sx={{ textTransform: 'inherit' }}>Submit</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    );
}

