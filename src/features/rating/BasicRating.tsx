import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function BasicRating() {
    return (
        <Box>
            <Rating name="read-only" value={5} readOnly size="small"/>
        </Box>
    );
}
