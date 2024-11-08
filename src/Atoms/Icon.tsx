import AddIcon from "@mui/icons-material/Add";
import HeightOutlinedIcon from "@mui/icons-material/HeightOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

type IconProps = {
  icon: keyof typeof ICON_MAP;
};

export const ICON_MAP = {
  AddIcon: AddIcon,
  HeightOutlinedIcon: HeightOutlinedIcon,
  FitnessCenterIcon: FitnessCenterIcon,
};

const Icon = ({ icon }: IconProps) => {
  const Component = ICON_MAP[icon];

  return (
    <div>
      <Component />
    </div>
  );
};

export default Icon;
