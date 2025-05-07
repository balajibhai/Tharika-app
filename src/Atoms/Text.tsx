import { Typography } from "@mui/material";

interface textProps {
  variant?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "body2"
    | "body1"
    | "subtitle1"
    | "subtitle2"
    | "overline";
  content: string;
  sx?: object;
  onClick?: () => void;
}

const Text = (props: textProps) => {
  const { content, sx, variant, onClick } = props;
  return (
    <Typography variant={variant} sx={sx} onClick={onClick}>
      {content}
    </Typography>
  );
};

export default Text;
