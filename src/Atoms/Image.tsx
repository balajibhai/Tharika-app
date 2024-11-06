const Image = () => {
  const imageStyle = {
    width: 100,
    height: 100,
    borderRadius: "100%",
    objectFit: "cover" as const,
  };

  return (
    <img
      src={"https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"}
      alt={"Profile"}
      style={imageStyle}
    />
  );
};

export default Image;
