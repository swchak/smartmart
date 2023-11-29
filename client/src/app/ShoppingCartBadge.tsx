import { styled, Badge, BadgeProps, IconButton, Typography, Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import { ShoppingCartRounded } from "@mui/icons-material";

const StyledShoppingCartBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function ShoppingCartBadge() {
    return (
        <Box sx={{ display: 'flex', justifyItems: 'center' }}>
            {/* <Typography variant="overline" align="center" sx={{ textTransform: 'capitalize', fontFamily: 'fantasy', padding: 0 }}>Cart</Typography> */}
            <IconButton aria-label="cart" color="inherit" >
                <StyledShoppingCartBadge badgeContent={4} color="primary">
                    <ShoppingCartRounded color="inherit" />
                </StyledShoppingCartBadge>
            </IconButton>
        </Box >
    );
}