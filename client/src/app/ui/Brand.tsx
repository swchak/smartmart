import { Box, Button } from "@mui/material";
import Image from "next/image";

interface BrandProps {
    height: number;
    width?: number;
}
export default function Brand(props: BrandProps) {
    const aspectRati: number = 365 / 231;
    let width: number;
    if (!props.width) {
        width = (365 * props.height) / 231;
    } else {
        width = props.width;
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button>
                <Image src='/images/logo8.jpg' alt="logo" width={width} height={props.height}></Image>
            </Button>
        </Box>
    );
}