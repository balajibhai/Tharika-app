import { Box, Card, CardContent, styled, SxProps, Theme } from "@mui/material";

// Update WhiteCardProps to include an sx prop
type WhiteCardProps = {
  children: React.ReactNode;
  sx?: SxProps<Theme>; // Allows custom styles to be passed as a style object
  cardStyle: {};
  cardContentStyle?: {};
  onClick?: () => void;
};

// WhiteCardStyle now just styles Box without spreading sx, as Box will handle it directly
const WhiteCardStyle = styled(Box)({});

const WhiteCard = (props: WhiteCardProps) => {
  const { cardStyle, children, cardContentStyle, onClick, sx } = props;
  return (
    <WhiteCardStyle sx={sx} onClick={onClick}>
      <Card sx={cardStyle}>
        <CardContent sx={cardContentStyle}>{children}</CardContent>
      </Card>
    </WhiteCardStyle>
  );
};

export default WhiteCard;
