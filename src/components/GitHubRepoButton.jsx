import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export function GitHubRepoButton(props) {
    const {name, link} = props;
    return (
        <Button 
            target="_blank" 
            href={link} 
            className="w-full md:w-fit bg-gradient-to-br from-blue-500 to-blue-600" 
            variant="contained" 
            startIcon={<GitHubIcon/>}
        >
            {name}
        </Button>
    )
}