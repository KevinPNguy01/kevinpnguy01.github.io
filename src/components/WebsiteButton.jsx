import { Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export function WebsiteButton(props) {
    const {name, link} = props;
    return (
        <Button 
            target="_blank" 
            href={link} 
            className="w-full md:w-fit bg-gradient-to-br from-blue-500 to-blue-700" 
            variant="contained" 
            startIcon={<OpenInNewIcon/>}
        >
            {name}
        </Button>
    )
}