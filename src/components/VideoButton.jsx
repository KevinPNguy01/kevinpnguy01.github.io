import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import YouTubeIcon from "@mui/icons-material/YouTube";

export function VideoButton(props) {
  const { name, link } = props;
  return (
    <Button
      target="_blank"
      href={link}
      className="w-full md:w-fit bg-gradient-to-br from-red-500 to-red-700"
      variant="contained"
      startIcon={<YouTubeIcon />}
    >
      {name}
    </Button>
  );
}
