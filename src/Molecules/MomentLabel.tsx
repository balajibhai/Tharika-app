import Text from "../Atoms/Text";

type MomentLabelProps = {
  content: string;
  time: string;
};

const MomentLabel = ({ content, time }: MomentLabelProps) => {
  return (
    <>
      <Text variant="h6" content={content} />
      <Text variant="subtitle2" content={time} />
    </>
  );
};

export default MomentLabel;
