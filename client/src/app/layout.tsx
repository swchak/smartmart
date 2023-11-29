
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ResponsiveAppBar from './ui/ResponsiveAppBar'
import { Box, Container, Grid } from '@mui/material'
import CustomThemeProvider from './ui/CustomThemeProvider'
import Footer from './ui/Footer'
import CustomCacheProvider from './ui/CustomCacheProvider'
import BackgroundImage from '../../public/images/background.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        <CustomCacheProvider>
          <CustomThemeProvider>
            <Grid container sx={{ flexDirection: 'column' }}>
              <Grid item sx={{ marginBottom: '20px' }}> <ResponsiveAppBar></ResponsiveAppBar></Grid>
              <Grid item > <Container maxWidth='xl' sx={{ backgroundImage: BackgroundImage }}>{children}</Container></Grid>
              <Grid item><Footer /></Grid>
            </Grid>
          </CustomThemeProvider>
        </CustomCacheProvider>
      </body>
    </html>
  )
}