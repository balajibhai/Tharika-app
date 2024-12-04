type BlueLinkProps = {
  onClick: () => void;
  content: string;
};

const cssStyle = {
  cursor: "pointer",
  color: "blue",
};

const BlueLink = (props: BlueLinkProps) => {
  const { onClick, content } = props;
  return (
    <div style={cssStyle} onClick={onClick}>
      {content}
    </div>
  );
};

export default BlueLink;
