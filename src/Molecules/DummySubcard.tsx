import WhiteCard from "../Atoms/WhiteCard";
import Image from "../Atoms/Image";

const DummySubcard = () => {
  return (
    <WhiteCard>
      <WhiteCard>
        <div style={{ display: "flex" }}>
          <Image />
          <Image />
        </div>
        <div>
          <Image />
          <Image />
        </div>
      </WhiteCard>
    </WhiteCard>
  );
};

export default DummySubcard;
