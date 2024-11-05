import AddIcon from "@mui/icons-material/Add";

type IconProps = {
  icon: keyof typeof ICON_MAP;
};

export const ICON_MAP = {
  AddIcon: AddIcon,
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
