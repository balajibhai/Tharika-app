type ImageProps = {
  imageStyle: {};
};

const Image = ({ imageStyle }: ImageProps) => {
  return (
    <img
      src={"https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"}
      alt={"Profile"}
      style={imageStyle}
    />
  );
};

export default Image;
