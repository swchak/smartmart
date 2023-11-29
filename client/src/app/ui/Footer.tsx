'use client'

import * as React from 'react';
import { AppBar, Box, Grid, List, ListItemButton, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import Brand from './Brand';

const links = ['About us', 'Contact us'];

export default function Footer() {
    return (
        <AppBar position="static" sx={{ bottom: 0, position: 'fixed' }} className='footer-link-text'>
            <Grid container sx={{ flex: 'display', alignItems: 'center' }}>
                <Grid item xs={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                            <ListItemButton >About us</ListItemButton>
                            <ListItemButton >News & Blogs</ListItemButton>
                            <ListItemButton>Careers</ListItemButton>
                        </List>
                    </Box>

                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <List >
                            <ListItemButton >Track Returns</ListItemButton>
                            <ListItemButton >Track Orders</ListItemButton>
                            <ListItemButton >Billing Queries</ListItemButton>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={4} container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid item>
                        <Brand height={50}></Brand>
                    </Grid>
                    <Grid item>
                        <List sx={{ display: 'flex' }}>
                            <ListItemButton >
                                <Facebook></Facebook>
                            </ListItemButton>
                            <ListItemButton>
                                <Twitter></Twitter>
                            </ListItemButton>
                            <ListItemButton >
                                <Instagram></Instagram>
                            </ListItemButton>
                        </List>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="caption"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                fontFamily: 'fantasy',
                                fontSize: '0.7rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'block',
                                paddingTop: '5px'
                            }}
                            align='center'
                        >
                            © 2023 SmartMart. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <List>
                        <ListItemButton>Become a Member</ListItemButton>
                        <ListItemButton>Find a Store</ListItemButton>
                        <ListItemButton>Customer service</ListItemButton>
                    </List>
                </Grid>
                <Grid item xs={2}>
                    <List>
                        <ListItemButton>Chat with us</ListItemButton>
                        <ListItemButton>Email us</ListItemButton>
                        <ListItemButton>Report </ListItemButton>
                    </List>
                </Grid>
            </Grid>
        </AppBar >
        // <AppBar position="static" sx={{ bottom: 0, position: 'fixed' }} className='footer-link-text'>
        //     <Grid container sx={{ flexDirection: 'column' }}>
        //         <Grid item container>
        //             <Grid item container id="footer-row-1-col-1">
        //                 <Grid item>
        //                     <List className='padding-bottom-0'>
        //                         <ListItemButton >About us</ListItemButton>
        //                         <ListItemButton >News & Blogs</ListItemButton>
        //                         <ListItemButton >Careers</ListItemButton>
        //                     </List>
        //                 </Grid>
        //                 <Grid item>
        //                     <List className='padding-bottom-0'>
        //                         <ListItemButton >Track Returns</ListItemButton>
        //                         <ListItemButton >Track Orders</ListItemButton>
        //                         <ListItemButton >Billing Queries</ListItemButton>
        //                     </List>
        //                 </Grid>
        //                 <Grid item>
        //                     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        //                         <Brand height={70}></Brand>
        //                         <List className='footer-social-links'>
        //                             <ListItemButton sx={{ flexGrow: 0 }}>
        //                                 <Facebook></Facebook>
        //                             </ListItemButton>
        //                             <ListItemButton sx={{ flexGrow: 0 }}>
        //                                 <Twitter></Twitter>
        //                             </ListItemButton>
        //                             <ListItemButton sx={{ flexGrow: 0 }}>
        //                                 <Instagram></Instagram>
        //                             </ListItemButton>
        //                         </List>
        //                     </Box>

        //                 </Grid>
        //                 <Grid item >
        //                     <List className='padding-bottom-0'>
        //                         <ListItemButton>Become a Member</ListItemButton>
        //                         <ListItemButton>Find a Store</ListItemButton>
        //                         <ListItemButton>Customer service</ListItemButton>
        //                     </List>
        //                 </Grid>
        //                 <Grid item >
        //                     <List className='padding-bottom-0'>
        //                         <ListItemButton>Chat with us</ListItemButton>
        //                         <ListItemButton>Email us</ListItemButton>
        //                         <ListItemButton>Report </ListItemButton>
        //                     </List>
        //                 </Grid>
        //             </Grid>
        //             <Grid item>
        //                 <Typography
        //                     variant="caption"
        //                     noWrap
        //                     component="a"
        //                     href="#"
        //                     sx={{
        //                         fontFamily: 'fantasy',
        //                         fontSize: '0.7rem',
        //                         color: 'inherit',
        //                         textDecoration: 'none',
        //                         display: 'block'

        //                     }}
        //                     align='center'
        //                 >
        //                     © 2023 SmartMart. All rights reserved.
        //                 </Typography>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </AppBar >


    );
}