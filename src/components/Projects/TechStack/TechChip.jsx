import { Chip } from "@mui/material";

export function TechChip(props) {
  const { label } = props;
  return (
    <Chip
      className="!border !border-neutral-500 !border-solid bg-gradient-to-br from-neutral-800 to-neutral-900"
      label={label}
      style={{
        color: "white",
      }}
    />
  );
}
