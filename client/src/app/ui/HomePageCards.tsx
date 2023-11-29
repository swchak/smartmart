import { Box } from "@mui/material";
import CustomizedCard from "./CustomizedCard";


const cardData = [
    { title: 'Best Sellers', imageSrc: "/images/bestsellers.png" },
    { title: 'Black Friday Deals', imageSrc: "/images/blackfridaysale.png" },
    { title: 'Clearance Sale', imageSrc: "/images/clearancesale.png" }
]

export default function HomePageCards() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {/* {cardData.map(card =>
                <CustomizedCard title={card.title} imageSrc={card.imageSrc} key={card.title}
                />)} */}
        </Box>
    );
}