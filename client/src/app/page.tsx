'use client'
import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import HomePageCards from './ui/HomePageCards';

export default function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
            <HomePageCards></HomePageCards>
        </Box>

    );
}