import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export function GitHubRepoButton(props) {
  const { name, link } = props;
  return (
    <Button
      target="_blank"
      href={link}
      className="w-full md:w-fit bg-gradient-to-br from-zinc-700 to-zinc-800"
      variant="contained"
      startIcon={<GitHubIcon />}
    >
      {name}
    </Button>
  );
}
