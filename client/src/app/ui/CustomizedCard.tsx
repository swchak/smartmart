import { CardHeader, CardMedia, Card, Paper, Typography, Box, Button } from "@mui/material";
import Image from "next/image";


interface cardProps {
    title: string,
    imageSrc: string
};

export default function CustomizedCard(data: cardProps) {
    return (
        <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* <Box>
                <Typography sx={{ fontFamily: 'sans-serif', fontWeight: 'bold' }} variant='h5' align="center">{data.title}</Typography>
            </Box> */}
            <Box>
                <Button>
                    <Image src={data.imageSrc} alt={data.title} width={300} height={300}></Image>
                </Button>

            </Box>
        </Paper>
    );
}