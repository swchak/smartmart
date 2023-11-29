'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Brand from './Brand';
import Search from './Search';
import ShoppingCartBadge from '../ShoppingCartBadge';
import { Divider, Grid, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material';


const pages = ['Clothing', 'Handbags', 'Jewelry', 'Shoes', 'Beauty', 'Home', 'Deals', 'Clearance'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    return (
        <AppBar position="static" >
            <Container maxWidth={false}>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ flexBasis: '20%' }}>
                        <Brand height={70}></Brand>
                    </Box>
                    <Box sx={{ flexBasis: '60%', display: 'flex', justifyContent: 'center' }}>
                        <Search />
                    </Box>
                    <Box sx={{ display: 'flex', flexBasis: '20%', justifyContent: 'right', alignItems: 'center' }}>
                        <List sx={{ display: 'flex', flexBasis: '20%' }}>
                            <ListItemButton>
                                <ShoppingCartBadge></ShoppingCartBadge>
                            </ListItemButton >
                            <ListItem>
                                <Button variant='outlined' color='inherit' sx={{ textTransform: 'capitalize' }}>Sign in</Button>
                            </ListItem>
                        </List>
                    </Box>
                </Toolbar>
            </Container>
            {/* <Box color="inherit" sx={{ backgroundColor: "#ffee9414" }}> */}
            <Box color="inherit">
                <Divider sx={{ borderColor: 'inherit', borderStyle: 'outset' }} light={true}></Divider>
                <List sx={{ display: 'flex' }}>
                    {pages.map((page) => (
                        <ListItem key={page} >
                            <Button sx={{ color: 'inherit', textTransform: 'capitalize' }}>{page}</Button>
                            {/* <Divider orientation='vertical' light={true} sx={{ borderColor: 'inherit' }}></Divider> */}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </AppBar >
    );
}
export default ResponsiveAppBar;